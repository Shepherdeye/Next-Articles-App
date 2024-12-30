import RegisterForm from "./RegisterForm"



const RegisterPage = () => {
    return (
        <section className='fix-height w-full flex items-center justify-center'>
            <div className='w-3/4 bg-white rounded-xl h-3/4 p-5 shadow-sm shadow-slate-900 flex flex-col justify-around items-center'>
                <h1 className='text-2xl h-1/5 font-bold my-2'>Create Email Now</h1>
                <RegisterForm />
            </div>
        </section>
    )
}

export default RegisterPage
