import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";


const Login = () => {
    return (
        <div className='container mx-auto bg-slate-200  '>
            <div className='max-w-sm bg-white rounded-xl px-4 pt-3 pb-5 '>
                <button className='py-2 px-3 rounded-xl border-2 bg-slate-200 font-bold'>X</button>

                <div className='-mt-3'>
                    <h1 className='text-center font-bold '>Sing In !</h1>
                    <h4 className='text-center leading-9 text-gray-400 font-normal'>Use your Google account to log in to CodeExemple</h4>
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                    <button className='p-3 rounded-2xl text-center border-2 flex text-xl font-semibold gap-10'><FcGoogle className='text-3xl'></FcGoogle>Log in with Google</button>
                    <button className='p-3 rounded-2xl text-center border-2 flex text-xl font-semibold gap-10'><FaGithubSquare className='text-3xl'></FaGithubSquare>Log in with Github</button>
                </div>
                <p className='text-center text-sm mt-4'>By continuing,you agree to our <span className='font-semibold'>Terms of Service</span> Read our <span className='font-semibold'>Privacy Policy</span></p>
            </div>


        </div>
    );
};

export default Login;