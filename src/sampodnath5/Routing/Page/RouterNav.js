import React from 'react';
import { Link } from 'react-router-dom';

const RouterNav = () => {
    return (
        <div className='my-5 mx-1'>
        <nav className='flex justify-start gap-5  '>
            <Link className='text-black text-lg no-underline font-medium'>User</Link>
            <Link className='text-black text-lg no-underline font-medium'>PG</Link>
            <Link className='text-black text-lg no-underline font-medium'>Admin</Link>
            <Link className='text-black text-lg no-underline font-medium'>Pending</Link>
        </nav>
        <hr className='bg-gray-600' />
    </div>
    );
};

export default RouterNav;