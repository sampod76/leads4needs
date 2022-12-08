import React from 'react';

const Image = () => {
    return (
        <div className='md:grid grid-cols-3 gap-2 hidden mb-3'>
            <div className=''>
                <img src="https://images.unsplash.com/photo-1670460395275-4d5e0ddb7275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='h-[25rem] w-full' />
            </div>
            <div className='space-y-2'>
                <div>
                    <img src="https://images.unsplash.com/photo-1670296047577-36c2c1281a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='h-[12rem] w-full' />
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1670470076011-cd2f6e03ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className='h-[12.5rem]' />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1670470076011-cd2f6e03ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className='h-[12.5rem]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className=''>

                    <img src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className='h-[15rem] w-full' />
                </div>
                <div className=''>

                    <img src="https://images.unsplash.com/photo-1670433000581-7b36d9b2fe4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className='h-[9.5rem] w-full ' />
                </div>



            </div>
        </div>
    );
};

export default Image;