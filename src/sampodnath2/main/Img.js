import React from 'react';

const Img = () => {
    return (
        <div className='flex  gap-2 h-[22rem] md:h-[30rem]'>
            <img src="https://images.unsplash.com/photo-1670406072263-74c556e5ecf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='h-full md:w-3/5 w-full '/>
            <img src="https://images.unsplash.com/photo-1670443987325-3cf95c385b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='  hidden md:block w-1/5'/>
            <img src="https://images.unsplash.com/photo-1670432728527-c1aada2497f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='hidden md:block w-1/5'/>
        </div>
    );
};

export default Img;