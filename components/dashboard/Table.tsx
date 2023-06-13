import { BiLinkExternal } from "react-icons/bi"
const Table = () => {
  return (
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 sm:rounded-lg bg-white dark:bg-gray-900">
                                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                        <thead>
                                                            <tr>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            DATE & TITLE
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            HOURS
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            DETAILS
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            ACTION
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        6/7
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        Jack's Study
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>35</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500 gap-2">
                                                                        <BiLinkExternal className="w-5 h-5" />
                                                                        <p>
                                                                            More
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        6/7
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        Jack's Study
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>35</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500 gap-2">
                                                                        <BiLinkExternal className="w-5 h-5" />
                                                                        <p>
                                                                            More
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        6/7
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        Jack's Study
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>35</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500 gap-2">
                                                                        <BiLinkExternal className="w-5 h-5" />
                                                                        <p>
                                                                            More
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        6/7
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        Jack's Study
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>35</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500 gap-2">
                                                                        <BiLinkExternal className="w-5 h-5" />
                                                                        <p>
                                                                            More
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        6/7
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        Jack's Study
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>35</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500 gap-2">
                                                                        <BiLinkExternal className="w-5 h-5" />
                                                                        <p>
                                                                            More
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
  )
}

export default Table