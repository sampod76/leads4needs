import React from 'react';

const Card = () => {
    return (
        <div className='hidden mdd:block'>
            <div className='w-80 h-[28.125rem] lg:w-[20.75rem] lg:h-[30rem]  bg-[#7065F0] rounded-2xl flex flex-col justify-between p-4 text-white ' >

                <div className='pt-3'>
                    <h6>LEADS4NEEDS</h6>
                    <h1 className='text-3xl mt-5 leading-[2.9rem]'>Register your business with us.</h1>
                    <p className='w-2/3 text-base leading-9 text-white/70'>Discover India’s vast and fast growing business webiste.</p>

                </div>
                <div className='flex items-center gap-2'>

                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="" className='w-12 h-12 rounded-md' />
                    <div className='space-y-[-0.7rem]'>
                        <p>Luke Simson</p>
                        <p className='text-white/60 text-base'>Student</p>
                    </div>

                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default Card;