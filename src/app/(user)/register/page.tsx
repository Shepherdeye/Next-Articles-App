
import RegisterForm from "./RegisterForm"


import { redirect } from "next/navigation";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { cookies } from "next/headers";


const RegisterPage = async () => {


    // check  if the user exist to redirect to  home 
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);

    user && redirect("/")


    return (
        <section className='fix-height w-full flex flex-col items-center justify-center p-4'>
            {/* Page Title and Description */}
            <div className='text-center mb-4'>


            </div>

            {/* Form Container */}
            <div className='w-full md:w-3/4 lg:w-1/2 bg-white rounded-xl h-auto p-5 shadow-sm shadow-slate-900 flex flex-col justify-around items-center'>
                <h2 className='text-2xl  my-4 font-sans text-gray-800'> Sign up</h2>
                <RegisterForm />
            </div>

            {/* End Description */}
            <p className='text-gray-500 text-xs md:text-sm lg:text-base mt-4 text-center font-light px-4 md:px-0'>
                By signing up, you agree to our <span className='text-blue-600 underline cursor-pointer'>Terms of Service</span> and <span className='text-blue-600 underline cursor-pointer'>Privacy Policy</span>.

            </p>
        </section>

    )
}

export default RegisterPage
