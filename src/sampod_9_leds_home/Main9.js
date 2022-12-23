
import './card.css'
import { Menu, Transition } from '@headlessui/react'
import Slider from '@material-ui/core/Slider';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";

// import { TfiSharethis } from 'react-icons/tfi';

import { Fragment, useEffect, useRef, useState } from 'react';
import Footer from '../Footer/Footer';
import { BsArrowRight } from 'react-icons/bs';
import My_Location from './Img/My_Location.png'
import Mail from './Img/Mail.png'
import Card from './Card';
import { BiSearch } from "react-icons/bi";
// import Footer from '../componenets/Footer';

// import { ChevronDownIcon, EditActiveIcon, DuplicateInactiveIcon, EditInactiveIcon } from '@heroicons/react/20/solid'
// import { FaMale } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";

const Main9 = () => {
    const [value, setValue] = useState([1, 100])
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChange = (e, newValue) => {
        console.log(newValue);

        setValue(newValue);
    };

    return (

        <main className=' bg-[#F7F7FD] '>
            <section className=' max-w-[1420px] mx-auto p-3 min-h-screen'>
                <div>
                    <h2 className='font-bold md:text-3xl text-base my-4 text-left '>Search Properties to Rent</h2>
                    <div className='grid grid-cols-12 gap-3 bg-white rounded-xl p-3 font-bold w-full'>
                        <input type="search" name="" id="" placeholder='City' className='md:col-span-6 col-span-full px-3 p-3 md:p-0 focus:outline-none border-1 rounded-lg border-gray-200  ' />
                        <div className='border-1 rounded-lg border-gray-200 md:col-span-6 col-span-full px-3 p-3 md:p-0 flex gap-2'>
                            <BiSearch className='text-2xl text-gray-400'></BiSearch>
                            <input type="search" name="" id="" placeholder='Search' className='  focus:outline-none   ' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lggg:grid-cols-3 lg:gap-y-14 gap-5  my-5 
                     '>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                    </div>
                </div>



            </section>



            {/* <div className='bg-[#7065F0] w-full'>
                <div className='bg-[#7065F0] relative max-w-[1440px] mx-auto '  >
                    <div className='bg-[#7065F0] h-[23rem] smm:h-[25rem] md:h-[18rem] mdd:h-[20rem]  lg:h-[20.75rem] lgg:h-80 absolute w-full  top-0 mx-auto z-5 '>
                        <h1 className='lgg:text-[17rem] lg:text-[15.625rem] mdd:text-[12.375rem]  flex justify-center  md:text-[12rem] smm:text-[10rem] text-[5rem] font-extrabold text-[#776DF1] mt-28 md:-mt-8 '>PG Wars</h1>
                    </div>

                    <div className=' absolute z-10   w-full pt-4 px-2 md:px-0'>
                        <div className=' md:flex justify-between md:p-4 p-2  md:pt-10 text-white space-x-5'>

                            <div className='text-white space-y-1 md:ml-[3rem] md:w-[30%] mdd:w-[25%] ml-4 '>
                                <p className='font-bold text-xl'>PG Wars</p>
                                <div className='flex md:block items-center '>
                                    <p className='text-xl md:text-base font-light  '>Easiest way <br className='hidden md:block' /> to find yourself a <span className='md:text-3xl text-lg font-bold'>PG</span>.</p>
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

            </div> */}
            <Footer></Footer>
            {/* <Footer></Footer> */}
        </main>

    );
};

export default Main9;