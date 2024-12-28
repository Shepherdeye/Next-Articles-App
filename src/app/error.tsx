'use client'

import Link from "next/link";

interface ErrorPropsHandling {
    error: Error;
    reset: () => void;
}


const ErrorHandling = ({ error, reset }: ErrorPropsHandling) => {
    return (
        <div className="flex items-center justify-center h-[83vh] w-full bg-gray-50 p-5">
            <div className="flex flex-col items-center justify-center h-auto bg-white shadow-lg rounded-lg p-8 text-center">
                <h3 className="font-bold text-red-500 text-3xl mb-4">
                    Something went wrong
                </h3>
                <p className="text-gray-800 text-xl mb-6">"{error.message}"</p>

                <button
                    onClick={() => reset()}
                    className="bg-blue-600 text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition duration-300 mb-4" >
                    Try Again
                </button>

                <Link
                    href="/"
                    className="text-blue-600 underline hover:text-blue-800 transition duration-300 text-lg"
                >
                    Return to the Home Page
                </Link>
            </div>
        </div>

    )
}

export default ErrorHandling