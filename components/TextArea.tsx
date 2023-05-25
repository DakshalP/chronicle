"use client"

import { TextareaHTMLAttributes, FormEventHandler } from "react";
import { useRef } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    onInput?: undefined;
}

const styles = `block p-2.5 w-full min-h-fit font-medium text-lg text-gray-900 bg-white rounded border-4 border-cgray resize-none outline-none transition-all
focus:ring-cgreen focus:border-cgreen 
dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cgray-outline dark:focus:border-cgray-dark`

const TextArea: React.FunctionComponent<TextareaProps> = ({
    className,
    ...props
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const fitContent = () => {
        if(textAreaRef.current) {
            textAreaRef.current.style.height = "";
            textAreaRef.current.style.height = (textAreaRef.current.scrollHeight + 9) + "px";
        }
    }
    return (            
            <textarea ref={textAreaRef} onInput={fitContent} className={`${styles} ${className}`} {...props} />
    );
};

export default TextArea;
