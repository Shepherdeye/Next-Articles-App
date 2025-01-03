
"use client"

const Footer = () => {

    return (
        <div
            style={{ height: '50px' }}
            className='flex items-center justify-center text-white fixed-bottom bg-gray-700 '
        >
            <p style={{ fontSize: '12px' }}>
                &copy; {new Date().getFullYear()}  Developed by <strong>Elsayed Eldeeb</strong>. All rights reserved.
            </p>

        </div>
    )
}

export default Footer


