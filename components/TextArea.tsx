"use client"

import { TextareaHTMLAttributes, forwardRef, useState, useRef } from "react";
import { mergeRefs } from "react-merge-refs"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxLength?: number;
}

const styles = `block p-2.5 w-full min-h-fit font-medium text-lg text-gray-900 bg-white resize-none outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white `

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
    maxLength,
    className,
    ...props
}, ref) => {
    const localRef = useRef<HTMLTextAreaElement>(null);
    const [count, setCount] = useState(0)
    const fitContent = () => {
        if(localRef.current) {
            localRef.current.style.height = "";
            localRef.current.style.height = (localRef.current.scrollHeight + 9) + "px";
            setCount(localRef.current.value.length)
        }
    }
    return (            
            <div className="transition-all rounded border-4 border-cgray dark:border-gray-600 focus-within:ring-cgreen focus-within:border-cgreen dark:focus-within:ring-cgray-outline dark:focus-within:border-cgray-dark">
                <textarea ref={mergeRefs([localRef, ref])} maxLength={maxLength} onInput={fitContent} className={`${styles} ${className}`} {...props} />
                {maxLength && <div className="text-end dark:bg-gray-700 bottom-0 bg-white p-2 text-gray-400 font-semibold text-sm">{count}/{maxLength}</div>}
            </div>
    );
})

TextArea.displayName = "TextArea";


export default TextArea;
