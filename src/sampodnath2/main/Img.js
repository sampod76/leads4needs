import React from 'react';

const Img = () => {
    return (
        <div className='flex gap-2'>
            <img src="https://images.unsplash.com/photo-1670406072263-74c556e5ecf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='md:h-[20rem] md:w-4/6 w-full h-[10rem]'/>
            <img src="https://images.unsplash.com/photo-1670443987325-3cf95c385b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='h-[20rem] w-1/6 hidden md:block'/>
            <img src="https://images.unsplash.com/photo-1670432728527-c1aada2497f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className='h-[20rem] w-1/6 hidden md:block'/>
        </div>
    );
};

export default Img;