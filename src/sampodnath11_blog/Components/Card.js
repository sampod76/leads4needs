import React from 'react';

const Card = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
        <div className='shadow-xl rounded-lg h-[32.375rem]'>

            <div className='h-[50%] bg-[#45E0A8] rounded-t-xl'>
                <img src="https://static.semrush.com/blog/uploads/media/9a/af/9aafcbea5103f22bb93dc377a0b26250/google-my-business.svg" alt="" className='w-60 h-full mx-auto rounded-t-lg' />
            </div>
            <div className='p-3'>
                <div className='flex gap-3'>
                    <h6>Local SEO</h6>
                    <p>22 min read</p>
                </div>
                <h1 className='text-lg md:text-2xl'>Google My Business: A Guide to Google Business Profile this  </h1>
                <p className='text-base md:text-lg'>Google Business Profile (formerly Google My Business) is a free business listing that supports reviews, Q&As, posts, and more.</p>
                <div className='flex gap-3'>
                    <h6>Kelly Lyons</h6>
                    <p>Sep 29, 2022</p>
                </div>
            </div>
        </div>
        <div className='shadow-xl rounded-lg h-[32.375rem]'>

            <div className='h-[50%] bg-[#45E0A8] rounded-t-xl'>
                <img src="https://static.semrush.com/blog/uploads/media/6e/11/6e11091f512fc8b351f95fa3e91dabe9/redirects.svg" alt="" className='w-60 h-full mx-auto rounded-t-lg' />
            </div>
            <div className='p-3'>
                <div className='flex gap-3'>
                    <h6>Technical SEO</h6>
                    <p>22 min read</p>
                </div>
                <h1 className='text-lg md:text-2xl'>The Ultimate Guide to Redirects: URL Redirections Explained</h1>
                <p className='text-base md:text-lg'>Google Business Profile (formerly Google My Business) is a free business listing that supports reviews, Q&As, posts, and more.</p>
                <div className='flex gap-3'>
                    <h6>Kelly Lyons</h6>
                    <p>Sep 29, 2022</p>
                </div>
            </div>
        </div>

    </section>
    );
};

export default Card;