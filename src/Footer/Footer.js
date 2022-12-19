import React from 'react';
import Mail from '../sampodnath3/Img/Mail.png'
import My_Location from '../sampodnath3/Img/My_Location.png'
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className=''>
        <div className='bg-[#7065F0] relative max-w-[1440px] mx-auto '  >
                <div className='bg-[#7065F0] h-[23rem] smm:h-[25rem] md:h-[18rem] mdd:h-[20rem]  lg:h-[20.75rem] lgg:h-80 absolute w-full  top-0 mx-auto z-5 '>
                    <h1 className='lgg:text-[17rem] lg:text-[15.625rem] mdd:text-[12.375rem]  flex justify-center  md:text-[12rem] smm:text-[10rem] text-[5rem] font-extrabold text-[#776DF1] mt-28 md:-mt-8 '>PG Wars</h1>
                </div>

                <div className=' absolute z-10   w-full pt-4 px-2 md:px-0'>
                    <div className=' md:flex justify-between md:p-4 p-2  md:pt-10 text-white space-x-5'>

                        <div className='text-white space-y-1 md:ml-[3rem] md:w-[30%] mdd:w-[25%] ml-4 '>
                            <p className='font-bold text-xl'>PG Wars</p>
                            <div className='flex md:block items-center '>
                                <p className='text-xl md:text-2xl font-light  '>Easiest way <br className='hidden md:block' /> to find yourself a <span className='md:text-3xl text-lg font-bold'>PG</span>.</p>
                            </div>
                            <h5 className='flex items-center bg-white  px-2 py-2 text-[#7065F0] md:px-2 rounded-lg md:mt-4 w-fit text-sm'>FREE REGISTER <span><BsArrowRight className='w-5'></BsArrowRight></span></h5>
                        </div>
                        <div className='flex w-full  md:justify-around justify-between  lg:gap-5 md:mt-[1.875rem] mt-6 text-[10px] sm:text-[15px] md:text-[10px] md:text-lg '>
                            <div className='space-y-2'>
                                <h6 className='underline '>Services</h6>
                                <p>Blog</p>
                                <p>Feedback</p>
                                <p>Report</p>
                            </div>
                            <div className='space-y-2'>
                                <h6 className='underline '>Links</h6>
                                <p>About Us</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                                <p>Disclaimer</p>
                            </div>
                            <div className='mr-6'>
                                <h6 className='underline '>Contact Us</h6>
                                <div className='flex  gap-2'>
                                    <img src={My_Location} alt="" className='h-4 w-5 mt-1' />
                                    <p className=''> Sector 63, H-Block,
                                        Noida</p>
                                </div>

                                <div className='flex  gap-2'>

                                    <img src={Mail} alt="" className='h-4 w-5 mt-1' />
                                    <p className=''>contact@codeexampler.com</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-[92%] mx-auto pb-2 -mt-4 md:-mt-2'>

                        <hr className='bg-white' />
                        <p className='text-white text-start smm:text-xs ml-2 md:ml-9 lg:ml-2 text-[8px] md:text-lg'>2022 CodeExampler | Designed By CodeExampler.com | All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;