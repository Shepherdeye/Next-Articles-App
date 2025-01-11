import RegisterForm from "./RegisterForm"



const RegisterPage = () => {
    return (
        <section className='fix-height w-full flex flex-col items-center justify-center p-4'>
            {/* Page Title and Description */}
            <div className='text-center mb-4'>
                <h1 className='text-3xl font-bold mb-2 font-sans text-gray-800'>
                    Create Your Email
                </h1>
                <p className='text-gray-600 text-base md:text-lg font-light'>
                    Sign up to create your personalized email account
                </p>
            </div>

            {/* Form Container */}
            <div className='w-full md:w-3/4 lg:w-1/2 bg-white rounded-xl h-auto p-5 shadow-sm shadow-slate-900 flex flex-col justify-around items-center'>
                <h2 className='text-2xl  my-4 font-sans text-gray-800'> Sign up</h2>
                <RegisterForm />
            </div>

            {/* End Description */}
            <p className='text-gray-500 text-xs md:text-sm lg:text-base mt-4 text-center font-light px-4 md:px-0'>
                By signing up, you agree to our <span className='text-blue-600 underline cursor-pointer'>Terms of Service</span> and <span className='text-blue-600 underline cursor-pointer'>Privacy Policy</span>.
                <br /> We value your privacy and ensure secure email management tailored to your needs.
            </p>
        </section>

    )
}

export default RegisterPage
