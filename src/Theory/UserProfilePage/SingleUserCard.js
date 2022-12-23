import React from 'react';

const SingleUserCard = () => {
    return (
        <div className='bg-[#333e50] flex flex-col gap-2 items-center p-3'>
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='rounded-full w-44  ring-2 ring-white' />
            <div className='my-2 space-y-[-0.5rem] flex flex-col items-center'>
                <p className='text-lg'>Adam Miles</p>
                <p>Rank: <span className='text-blue-400'>1250</span></p>
            </div>
            <h6 className='bg-blue-400 w-[90%] text-center py-2 '>Message</h6>
        </div>
    );
};

export default SingleUserCard;