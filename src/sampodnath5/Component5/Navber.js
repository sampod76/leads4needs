import React from 'react';

const Navber = () => {
    return (
        <div className='flex justify-between items-center my-2 '>
           <a href="/" className='lg:text-3xl text-xl font-bold  no-underline text-[#000929]'>Leads4Needs</a>
            <div className='flex gap-2 '>
               
               <a href="/" className='sm:py-2 sm:px-5 text-base font-medium   p-2  no-underline text-[#000929] hidden md:block'>Blog</a>
               <a href="/" className='bg-[#7065F0] hover:bg-[#342e77]  rounded-lg text-white p-2 no-underline' >Manage Property</a>
            </div>
        </div>
    );
};

export default Navber;