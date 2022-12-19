import React from 'react';

const Blog = () => {
    return (
        <section className=''>
            {/* blog 1 */}
            <div >
                <div className='bg-[#45E0A8]'>

                    <div className='flex justify-between items-center  max-w-[1440px] mx-auto px-5 py-3'>
                        <div className='w-[60%]'>
                            <h6>Advanced SEO /Local SEO</h6>
                            <h1 className='text-5xl'>Google My Business: A <br />Guide to Google <br /> Business Profile</h1>

                        </div>
                        <div>
                            <img src="https://static.semrush.com/blog/uploads/media/9a/af/9aafcbea5103f22bb93dc377a0b26250/google-my-business.svg" alt="" className='w-96' />
                        </div>
                    </div>
                </div>
                <div className='max-w-[1440px] mx-auto p-5'>

                    <div >
                        <p className='text-xl'>Google My Business—now called Google Business Profile—allows business owners to reach customers via Google Search and Google Maps.</p>
                        <p className='text-xl'>Maintaining a Business Profile helps you increase your visibility on Google, gain credibility with reviews, and control your business information.</p>
                        <div>
                            <p className='text-xl'>In this article, we’ll cover:</p>
                            <ul className='list-disc'>
                                <li className='text-xl'>

                                    Why you should have a Google Business Profile for your business
                                </li>
                                <li className='text-xl'>How to set up your Google Business Profile</li>
                                <li className='text-xl'>How to optimize your Google My Business profile</li>
                                <li className='text-xl'>Frequently asked questions</li>
                            </ul>
                        </div>
                        <p className='text-xl'>To start, let’s cover the basics of Google Business Profile, formerly Google My Business.</p>
                    </div>
                    <div>
                        <h1>What Is Google My Business (Now Known as Google Business Profile)? </h1>
                        <p className='text-xl'>Google Business Profile (GBP) is a free tool that allows you to influence how your business appears on Google Search, Google Maps, and Google Shopping.</p>
                        <p className='text-xl'>Using this tool lets you connect with customers, post business updates, list products or services, and more.</p>
                        <p className='text-xl'>Here’s what GBP looks like:</p>
                        <img src="https://static.semrush.com/blog/uploads/media/fe/40/fe400a2237ac4d57780194271449ac59/thierry-alberni-description.webp" alt="" className='w-10/12 h-[60vh]' />

                    </div>
                </div>

            </div>
            {/* blog 2 */}
            {/* <div>

            </div> */}
        </section>
    );
};

export default Blog;