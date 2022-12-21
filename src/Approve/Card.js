import React from 'react';

const Card = () => {
    return (
        <div className='hidden mdd:block'>
            <div className='w-80 h-[28.125rem] lg:w-96 lg:h-[30rem]  bg-[#7065F0] rounded-2xl flex flex-col justify-between lg:px-6 lg:py-7 py-2 px-3 text-white ' >

                <div>
                    <h1 className='font-bold py-2 lg:py-5 lg:px-2 px-2 mt-2 text-lg'>PGWARS</h1>
                    <div>
                        <div className='flex justify-between items-center'>
                            <img src="https://img.freepik.com/free-photo/amused-pretty-girl-with-curly-afro-hair-raises-palms-has-cheerful-expression-smiles-broadly-sees-something-funny-wears-white-sweater_273609-43437.jpg?w=996&t=st=1670394261~exp=1670394861~hmac=215c25f54dfcd9178bcbf7f78927c032ca129ca089bf652b5093fcd936cf2745" alt="" className='w-[4rem] h-[4rem] lg:w-[8rem] lg:h-[8rem] rounded-full ml-3' />

                            <div className='space-y-3 ml-2 '>
                                <h1 className=' font-semibold text-2xl lg:text-3xl tracking-wide font-Poppins'>Bruce Kent</h1>
                                <h2 className='tracking-wide text-lg lg:text-xl'>Software Engineer</h2>
                            </div>
                        </div>
                        <hr className='w-[90%] mx-auto my-2 bg-white p-[1px] ' />

                        <div className='space-y-3  px-2'>

                            <div className='flex gap-3 ml-1 items-center  '>
                                <h1 className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </h1>
                                <h1 className='font-semibold text-lg'>
                                    9876543210 (Whatsapp)</h1>
                            </div>
                            <div className='flex gap-3 ml-1 items-center'>
                                <h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>

                                </h1>
                                <h1 className='font-semibold text-lg'>brucekent@gmail.com</h1>
                            </div>
                            <div className='flex gap-3 ml-1 items-center'>
                                <h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                </h1>
                                <h1 className=' font-semibold text-lg'> Los Angeles, USA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around  -ml-1 mb-2 pb-2 '>
                    <div className='space-y-3 '>
                        <h1 className='font-bold text-lg'>Approved Businesses</h1>
                        <h1 className='text-lg'>5</h1>
                    </div>
                    <div className='space-y-3 text-center '>
                        <h1 className='font-bold text-lg'>Views</h1>
                        <h1 className='text-lg'>304</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;