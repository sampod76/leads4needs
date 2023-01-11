import React from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import SingleUserCard from './SingleUserCard';
const Users = () => {
    return (
        <div className='max-w-[1440px] mx-auto bg-[#1e2736] min-h-screen text-white p-3 space-y-3'>

            <div className='flex justify-between items-center mx-7 '>

                <h3>CodeExampler</h3>
                <div className='flex gap-4'>
                    <h6>QUIZ</h6>
                    <h6>TUTORIAL</h6>
                    <h6>CERIFICATE</h6>
                    <h6>EXAMS</h6>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='rounded-full w-10 h-10 ring-2 ring-white' />
                    <AiFillCaretDown></AiFillCaretDown>
                </div>
            </div>
            <hr />
            <div className='flex gap-2 mx-7'>
                <h6>Followers</h6>
                <h6 className='text-blue-400'>Following</h6>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-7 gap-3'>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>
                <SingleUserCard></SingleUserCard>

            </div>

        </div>
    );
};

export default Users;