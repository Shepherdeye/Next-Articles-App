import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
                <h2 className="text-6xl font-extrabold text-red-600 mb-4">404</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link
                    href="/"
                    className="bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300"
                >
                    Go to Home Page
                </Link>
            </div>
        </div>

    )
}

export default NotFoundPage