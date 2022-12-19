import React from 'react';


const Img = () => {
    return (
        <div className='flex  gap-2 h-[22rem] md:h-[30rem]'>
            <img src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='h-full md:w-3/5 w-full '/>
            <img src="https://images.unsplash.com/photo-1670443987325-3cf95c385b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='  hidden md:block w-1/5'/>
            <img src="https://images.unsplash.com/photo-1670432728527-c1aada2497f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='hidden md:block w-1/5'/>
        </div>
    );
};

export default Img;