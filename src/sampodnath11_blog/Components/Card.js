import React from 'react';

const Card = () => {
    return (
        <section className='max-w-[1440px] mx-auto p-4 font-Lora'>
            <div className='mx-4 smm:mx-10 md:mx-24 lg:mx-16 xl:mx-24'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 '>
                    <div className='shadow-xl rounded-lg h-auto'>

                        <div className='lgg:h-[50%] h-[45%] bg-[#45E0A8] rounded-t-xl'>
                            <img src="https://static.semrush.com/blog/uploads/media/9a/af/9aafcbea5103f22bb93dc377a0b26250/google-my-business.svg" alt="" className='w-80 h-full mx-auto rounded-t-lg p-3' />
                        </div>
                        <div className='p-3 space-y-3'>
                            <div className='flex gap-3 '>
                                <h6>Local SEO</h6>
                                <h6>22 min read</h6>
                            </div>
                            
                            <h1 className='text-2xl lg:text-3xl font-semibold'>Google My Business: A Guide to Google Business Profile   </h1>
                            <p className='text-base md:text-lg'>Google Business Profile (formerly Google My Business) is a free business listing that supports reviews, Q&As, posts, and more.</p>
                            <div className='flex gap-3'>
                                <h6>Kelly Lyons</h6>
                                <h6>Sep 29, 2022</h6>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg h-auto'>

                        <div className='h-[50%]  bg-[#45E0A8] rounded-t-xl'>
                            <img src="https://static.semrush.com/blog/uploads/media/6e/11/6e11091f512fc8b351f95fa3e91dabe9/redirects.svg" alt="" className='w-80 h-full mx-auto rounded-t-lg p-3' />
                        </div>
                        <div className='p-3 space-y-3'>
                            <div className='flex gap-3'>
                                <h6>Technical SEO</h6>
                                <h6>22 min read</h6>
                            </div>
                            <h1 className='text-2xl lg:text-3xl font-semibold'>The Ultimate Guide to Redirects: URL Redirections Explained</h1>
                            <p className='text-base md:text-lg'>Google Business Profile (formerly Google My Business) is a free business listing that supports reviews, Q&As, posts, and more.</p>
                            <div className='flex gap-3'>
                                <h6>Kelly Lyons</h6>
                                <h6>Sep 29, 2022</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Card;