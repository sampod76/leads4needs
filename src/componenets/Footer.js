import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#594fd1] text-white'>
            <div className='flex justify-evenly'>
                <div>
                    <h1 className='text-xl font-bold'>PG Wars</h1>
                    <p className='text-3xl'>
                        Easient Way
                        <br />
                        to find yourself a <span className='font-extrabold'>PG</span>
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Services</h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Links</h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Contact Us</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;