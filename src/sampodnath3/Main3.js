
import { BsArrowRight } from 'react-icons/bs';
import Footer_Image_2 from '../sampodnath3/Img/Footer_Image_2.png'
import Mail from '../sampodnath3/Img/Mail.png'
import My_Location from '../sampodnath3/Img/My_Location.png'
import '../sampodnath3/card.css'
import { Menu, Transition } from '@headlessui/react'
import Slider from '@material-ui/core/Slider';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";

// import { TfiSharethis } from 'react-icons/tfi';

import { Fragment, useEffect, useRef, useState } from 'react'
import Footer from './Footer';
// import { ChevronDownIcon, EditActiveIcon, DuplicateInactiveIcon, EditInactiveIcon } from '@heroicons/react/20/solid'
// import { FaMale } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";

const Main3 = () => {
    const [value, setValue] = useState([1, 100])
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChange = (e, newValue) => {
        console.log(newValue);

        setValue(newValue);
    };

    return (

        <main className=' bg-[#F7F7FD]'>
            <section className='container mx-auto p-3 min-h-screen '>

                <h1 className='font-bold md:text-3xl text-2xl my-4'>Search Properties to Rent</h1>
                <div className='grid grid-cols-12 gap-3 bg-white rounded-xl p-3 font-bold'>
                    <input type="search" name="" id="" placeholder='Search' className='lgg:col-span-5 md:col-span-5 col-span-full px-3 p-3 md:p-0 focus:outline-none border-1 rounded-lg border-gray-200  ' />
                    {/* <Menu as="div" className=" inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md   p-3 text-sm font-medium text-gray-700   ">
                                    <h1>gander</h1>

                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="">
                                    <div className="py-1 space-y-1 text-white cursor-pointer ">

                                        <Menu.Item>
                                            {({ active }) => <li>mail</li>}
                                        </Menu.Item>


                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu> */}

                    <div className='lggg:col-span-4 lg:col-span-3 md:col-span-4 col-span-7 w-[110%] md:w-[120%] lg:w-[100%] flex justify-between space-y-2 '>
                        <div className='flex flex-col  w-full md:w-10/12 text-[#878787]
                                '>
                            <div className='flex justify-between '>

                                <label htmlFor="Range" className='text-[#878787]'>Range</label>



                                {value[0]}$<FaLongArrowAltRight className='text-2xl '></FaLongArrowAltRight>{value[1]}$

                            </div>

                            <div style={{
                                margin: 'auto',
                                display: 'block',
                                width: '97%'
                            }} className='md:mt-2 mt-1 '>

                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"

                                />


                            </div>


                        </div>
                        <h1 className='text-gray-400 ml-3 mr-1 md:mr-3 text-5xl  '>|</h1>

                    </div>

                    <div className=' lggg:col-span-3 md:col-span-5 lg:col-span-4 col-span-3 lg:text-xl  rounded-xl lg:px-2 hidden  lg:block -mt-3  md:-mt-0 lggg:w-[110%] w-[100%]  '>

                        <div className='hidden lg:block'>
                            <label htmlFor="" className='text-[#878787] text-lg '>Gander</label>
                            <div className='space-y-1 space-x-2  '>

                                <>
                                    <input type="radio" name="gander" id="Male" className='border-2 border-gray-50 outline-1  ring-offset-neutral-500' />
                                    <label htmlFor="Male">Male</label>
                                </>
                                <>
                                    <input type="radio" name="gander" id="female" />
                                    <label htmlFor="female">Female</label>
                                </>
                                <>
                                    <input type="radio" name="gander" id="Other" />
                                    <label htmlFor="Other">Unisex</label>
                                </>

                            </div>
                        </div>


                    </div>

                    <div className='block lg:hidden col-span-4 md:col-span-3 md:ml-2 '>
                        <div className="text-center">
                            <Menu as="div" className="relative inline-block text-right z-10  -mt-1 ">

                                <label htmlFor="" className='text-[#878787] text-xl mb-2  mr-5'>Gender</label>
                                <div className='space-y-1 space-x-1    '>

                                    <>
                                        <input type="radio" name="gander" id="Male" className='  text-gray-700' />
                                        <label htmlFor="Male" className='text-xl'>M</label>
                                    </>
                                    <>
                                        <input type="radio" name="gander" id="female" />
                                        <label htmlFor="female" className='text-xl'>F</label>
                                    </>
                                    <>
                                        <input type="radio" name="gander" id="Other" />
                                        <label htmlFor="Other" className='text-xl'>U</label>
                                    </>

                                </div>
                            </Menu>
                        </div>
                    </div>

                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 lggg:grid-cols-3 lg:gap-y-14 gap-5  my-5 
                     '>



                    <div className='card relative w-full  mx-auto shadow-lg  '>

                        <div className='h-[55%] lg:h-[50%] xl:h-[50%] '>

                            <img src="https://images.unsplash.com/photo-1670605106692-aaedff8716d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-center  w-full rounded-t-3xl h-full " />
                        </div>

                        <div className='p-3'>

                            <div className="flex flex-col justify-between  space-y-2">
                                <div className="space-y-4 md:space-y-2">
                                    <h2 className="text-3xl font-bold tracking-wide md:mt-3  lggg:mt-4   "><span className='text-[#7065F0]'>₹3500</span>  <span className='font-normal text-2xl'>/ month </span></h2>
                                    <h3 className='font-semibold '>Beverly Hills</h3>
                                    <p className="text-lg md:text-lg">60/158 Rajiv chowk Mumbai Gate, Maharashtra, India</p>
                                </div>

                            </div>
                            <hr />
                            <div className='grid grid-cols-3 mt-2 gap-2'>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.49988 23.7501V16.2501C2.49988 15.6876 2.61446 15.1771 2.84363 14.7188C3.07279 14.2605 3.37488 13.8542 3.74988 13.5001V10.0001C3.74988 8.95839 4.11446 8.07298 4.84363 7.34381C5.5728 6.61464 6.45821 6.25006 7.49988 6.25006H12.4999C12.979 6.25006 13.427 6.33881 13.8436 6.51631C14.2603 6.69298 14.6457 6.93756 14.9999 7.25006C15.354 6.93756 15.7395 6.69298 16.1561 6.51631C16.5728 6.33881 17.0207 6.25006 17.4999 6.25006H22.4999C23.5415 6.25006 24.427 6.61464 25.1561 7.34381C25.8853 8.07298 26.2499 8.95839 26.2499 10.0001V13.5001C26.6249 13.8542 26.927 14.2605 27.1561 14.7188C27.3853 15.1771 27.4999 15.6876 27.4999 16.2501V23.7501H24.9999V21.2501H4.99988V23.7501H2.49988ZM16.2499 12.5001H23.7499V10.0001C23.7499 9.64589 23.6299 9.34881 23.3899 9.10881C23.1507 8.86964 22.854 8.75006 22.4999 8.75006H17.4999C17.1457 8.75006 16.849 8.86964 16.6099 9.10881C16.3699 9.34881 16.2499 9.64589 16.2499 10.0001V12.5001ZM6.24988 12.5001H13.7499V10.0001C13.7499 9.64589 13.6303 9.34881 13.3911 9.10881C13.1511 8.86964 12.854 8.75006 12.4999 8.75006H7.49988C7.14571 8.75006 6.84863 8.86964 6.60863 9.10881C6.36946 9.34881 6.24988 9.64589 6.24988 10.0001V12.5001ZM4.99988 18.7501H24.9999V16.2501C24.9999 15.8959 24.8799 15.5988 24.6399 15.3588C24.4007 15.1196 24.104 15.0001 23.7499 15.0001H6.24988C5.89571 15.0001 5.59863 15.1196 5.35863 15.3588C5.11946 15.5988 4.99988 15.8959 4.99988 16.2501V18.7501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>1/2/3/4</p>
                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M8.75012 27.5001V16.0626C7.68762 15.7709 6.79721 15.1876 6.07887 14.3126C5.35971 13.4376 5.00012 12.4167 5.00012 11.2501V2.50006H7.50012V11.2501H8.75012V2.50006H11.2501V11.2501H12.5001V2.50006H15.0001V11.2501C15.0001 12.4167 14.6405 13.4376 13.9214 14.3126C13.203 15.1876 12.3126 15.7709 11.2501 16.0626V27.5001H8.75012ZM21.2501 27.5001V17.5001H17.5001V8.75006C17.5001 7.0209 18.1097 5.54715 19.3289 4.32881C20.5472 3.10964 22.021 2.50006 23.7501 2.50006V27.5001H21.2501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>NoFood</p>

                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-8 ' viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 23.25V0.75H9.25C11.3333 0.75 13.1042 1.47917 14.5625 2.9375C16.0208 4.39583 16.75 6.16667 16.75 8.25C16.75 10.3333 16.0208 12.1042 14.5625 13.5625C13.1042 15.0208 11.3333 15.75 9.25 15.75H5.5V23.25H0.5ZM5.5 10.75H9.5C10.1875 10.75 10.7763 10.505 11.2663 10.015C11.7554 9.52583 12 8.9375 12 8.25C12 7.5625 11.7554 6.97375 11.2663 6.48375C10.7763 5.99458 10.1875 5.75 9.5 5.75H5.5V10.75Z" fill="#7065F0" />
                                    </svg>
                                    <p className='text-2xl md:text-base'>Parking</p>

                                </div>
                            </div>
                        </div>
                        <i className='top-[47%] sm:top-[47%] md:top-[41%] mdd:top-[42%]  lgg:top-[48%] lggg:top-[43%] '><div className='flex ml-8'><IoIosMan className='text-2xl text-white mt-[11.8px]'></IoIosMan> <h4 className='text-2xl font-bold text-white text-center mt-2 ml-2'>MALE</h4> </div> </i>
                    </div>
                    <div className='card relative w-full  mx-auto shadow-lg  '>

                        <div className='h-[55%] lg:h-[50%] xl:h-[50%] '>

                            <img src="https://images.unsplash.com/photo-1670605106692-aaedff8716d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-center  w-full rounded-t-3xl h-full " />
                        </div>

                        <div className='p-3'>

                            <div className="flex flex-col justify-between  space-y-2">
                                <div className="space-y-4 md:space-y-2">
                                    <h2 className="text-3xl font-bold tracking-wide md:mt-3  lggg:mt-4   "><span className='text-[#7065F0]'>₹3500</span>  <span className='font-normal text-2xl'>/ month </span></h2>
                                    <h3 className='font-semibold '>Beverly Hills</h3>
                                    <p className="text-lg md:text-lg">60/158 Rajiv chowk Mumbai Gate, Maharashtra, India</p>
                                </div>

                            </div>
                            <hr />
                            <div className='grid grid-cols-3 mt-2 gap-2'>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.49988 23.7501V16.2501C2.49988 15.6876 2.61446 15.1771 2.84363 14.7188C3.07279 14.2605 3.37488 13.8542 3.74988 13.5001V10.0001C3.74988 8.95839 4.11446 8.07298 4.84363 7.34381C5.5728 6.61464 6.45821 6.25006 7.49988 6.25006H12.4999C12.979 6.25006 13.427 6.33881 13.8436 6.51631C14.2603 6.69298 14.6457 6.93756 14.9999 7.25006C15.354 6.93756 15.7395 6.69298 16.1561 6.51631C16.5728 6.33881 17.0207 6.25006 17.4999 6.25006H22.4999C23.5415 6.25006 24.427 6.61464 25.1561 7.34381C25.8853 8.07298 26.2499 8.95839 26.2499 10.0001V13.5001C26.6249 13.8542 26.927 14.2605 27.1561 14.7188C27.3853 15.1771 27.4999 15.6876 27.4999 16.2501V23.7501H24.9999V21.2501H4.99988V23.7501H2.49988ZM16.2499 12.5001H23.7499V10.0001C23.7499 9.64589 23.6299 9.34881 23.3899 9.10881C23.1507 8.86964 22.854 8.75006 22.4999 8.75006H17.4999C17.1457 8.75006 16.849 8.86964 16.6099 9.10881C16.3699 9.34881 16.2499 9.64589 16.2499 10.0001V12.5001ZM6.24988 12.5001H13.7499V10.0001C13.7499 9.64589 13.6303 9.34881 13.3911 9.10881C13.1511 8.86964 12.854 8.75006 12.4999 8.75006H7.49988C7.14571 8.75006 6.84863 8.86964 6.60863 9.10881C6.36946 9.34881 6.24988 9.64589 6.24988 10.0001V12.5001ZM4.99988 18.7501H24.9999V16.2501C24.9999 15.8959 24.8799 15.5988 24.6399 15.3588C24.4007 15.1196 24.104 15.0001 23.7499 15.0001H6.24988C5.89571 15.0001 5.59863 15.1196 5.35863 15.3588C5.11946 15.5988 4.99988 15.8959 4.99988 16.2501V18.7501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>1/2/3/4</p>
                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M8.75012 27.5001V16.0626C7.68762 15.7709 6.79721 15.1876 6.07887 14.3126C5.35971 13.4376 5.00012 12.4167 5.00012 11.2501V2.50006H7.50012V11.2501H8.75012V2.50006H11.2501V11.2501H12.5001V2.50006H15.0001V11.2501C15.0001 12.4167 14.6405 13.4376 13.9214 14.3126C13.203 15.1876 12.3126 15.7709 11.2501 16.0626V27.5001H8.75012ZM21.2501 27.5001V17.5001H17.5001V8.75006C17.5001 7.0209 18.1097 5.54715 19.3289 4.32881C20.5472 3.10964 22.021 2.50006 23.7501 2.50006V27.5001H21.2501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>NoFood</p>

                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-8 ' viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 23.25V0.75H9.25C11.3333 0.75 13.1042 1.47917 14.5625 2.9375C16.0208 4.39583 16.75 6.16667 16.75 8.25C16.75 10.3333 16.0208 12.1042 14.5625 13.5625C13.1042 15.0208 11.3333 15.75 9.25 15.75H5.5V23.25H0.5ZM5.5 10.75H9.5C10.1875 10.75 10.7763 10.505 11.2663 10.015C11.7554 9.52583 12 8.9375 12 8.25C12 7.5625 11.7554 6.97375 11.2663 6.48375C10.7763 5.99458 10.1875 5.75 9.5 5.75H5.5V10.75Z" fill="#7065F0" />
                                    </svg>
                                    <p className='text-2xl md:text-base'>Parking</p>

                                </div>
                            </div>
                        </div>
                        <i className='top-[47%] sm:top-[47%] md:top-[41%] mdd:top-[42%]  lgg:top-[48%] lggg:top-[43%] '><div className='flex ml-8'><IoIosMan className='text-2xl text-white mt-[11.8px]'></IoIosMan> <h4 className='text-2xl font-bold text-white text-center mt-2 ml-2'>MALE</h4> </div> </i>
                    </div>
                    <div className='card relative w-full  mx-auto shadow-lg  '>

                        <div className='h-[55%] lg:h-[50%] xl:h-[50%] '>

                            <img src="https://images.unsplash.com/photo-1670605106692-aaedff8716d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-center  w-full rounded-t-3xl h-full " />
                        </div>

                        <div className='p-3'>

                            <div className="flex flex-col justify-between  space-y-2">
                                <div className="space-y-4 md:space-y-2">
                                    <h2 className="text-3xl font-bold tracking-wide md:mt-3  lggg:mt-4   "><span className='text-[#7065F0]'>₹3500</span>  <span className='font-normal text-2xl'>/ month </span></h2>
                                    <h3 className='font-semibold '>Beverly Hills</h3>
                                    <p className="text-lg md:text-lg">60/158 Rajiv chowk Mumbai Gate, Maharashtra, India</p>
                                </div>

                            </div>
                            <hr />
                            <div className='grid grid-cols-3 mt-2 gap-2'>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.49988 23.7501V16.2501C2.49988 15.6876 2.61446 15.1771 2.84363 14.7188C3.07279 14.2605 3.37488 13.8542 3.74988 13.5001V10.0001C3.74988 8.95839 4.11446 8.07298 4.84363 7.34381C5.5728 6.61464 6.45821 6.25006 7.49988 6.25006H12.4999C12.979 6.25006 13.427 6.33881 13.8436 6.51631C14.2603 6.69298 14.6457 6.93756 14.9999 7.25006C15.354 6.93756 15.7395 6.69298 16.1561 6.51631C16.5728 6.33881 17.0207 6.25006 17.4999 6.25006H22.4999C23.5415 6.25006 24.427 6.61464 25.1561 7.34381C25.8853 8.07298 26.2499 8.95839 26.2499 10.0001V13.5001C26.6249 13.8542 26.927 14.2605 27.1561 14.7188C27.3853 15.1771 27.4999 15.6876 27.4999 16.2501V23.7501H24.9999V21.2501H4.99988V23.7501H2.49988ZM16.2499 12.5001H23.7499V10.0001C23.7499 9.64589 23.6299 9.34881 23.3899 9.10881C23.1507 8.86964 22.854 8.75006 22.4999 8.75006H17.4999C17.1457 8.75006 16.849 8.86964 16.6099 9.10881C16.3699 9.34881 16.2499 9.64589 16.2499 10.0001V12.5001ZM6.24988 12.5001H13.7499V10.0001C13.7499 9.64589 13.6303 9.34881 13.3911 9.10881C13.1511 8.86964 12.854 8.75006 12.4999 8.75006H7.49988C7.14571 8.75006 6.84863 8.86964 6.60863 9.10881C6.36946 9.34881 6.24988 9.64589 6.24988 10.0001V12.5001ZM4.99988 18.7501H24.9999V16.2501C24.9999 15.8959 24.8799 15.5988 24.6399 15.3588C24.4007 15.1196 24.104 15.0001 23.7499 15.0001H6.24988C5.89571 15.0001 5.59863 15.1196 5.35863 15.3588C5.11946 15.5988 4.99988 15.8959 4.99988 16.2501V18.7501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>1/2/3/4</p>
                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M8.75012 27.5001V16.0626C7.68762 15.7709 6.79721 15.1876 6.07887 14.3126C5.35971 13.4376 5.00012 12.4167 5.00012 11.2501V2.50006H7.50012V11.2501H8.75012V2.50006H11.2501V11.2501H12.5001V2.50006H15.0001V11.2501C15.0001 12.4167 14.6405 13.4376 13.9214 14.3126C13.203 15.1876 12.3126 15.7709 11.2501 16.0626V27.5001H8.75012ZM21.2501 27.5001V17.5001H17.5001V8.75006C17.5001 7.0209 18.1097 5.54715 19.3289 4.32881C20.5472 3.10964 22.021 2.50006 23.7501 2.50006V27.5001H21.2501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>NoFood</p>

                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-8 ' viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 23.25V0.75H9.25C11.3333 0.75 13.1042 1.47917 14.5625 2.9375C16.0208 4.39583 16.75 6.16667 16.75 8.25C16.75 10.3333 16.0208 12.1042 14.5625 13.5625C13.1042 15.0208 11.3333 15.75 9.25 15.75H5.5V23.25H0.5ZM5.5 10.75H9.5C10.1875 10.75 10.7763 10.505 11.2663 10.015C11.7554 9.52583 12 8.9375 12 8.25C12 7.5625 11.7554 6.97375 11.2663 6.48375C10.7763 5.99458 10.1875 5.75 9.5 5.75H5.5V10.75Z" fill="#7065F0" />
                                    </svg>
                                    <p className='text-2xl md:text-base'>Parking</p>

                                </div>
                            </div>
                        </div>
                        <i className='top-[47%] sm:top-[47%] md:top-[41%] mdd:top-[42%]  lgg:top-[48%] lggg:top-[43%] '><div className='flex ml-8'><IoIosMan className='text-2xl text-white mt-[11.8px]'></IoIosMan> <h4 className='text-2xl font-bold text-white text-center mt-2 ml-2'>MALE</h4> </div> </i>
                    </div>
                    <div className='card relative w-full  mx-auto shadow-lg  '>

                        <div className='h-[55%] lg:h-[50%] xl:h-[50%] '>

                            <img src="https://images.unsplash.com/photo-1670605106692-aaedff8716d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-center  w-full rounded-t-3xl h-full " />
                        </div>

                        <div className='p-3'>

                            <div className="flex flex-col justify-between  space-y-2">
                                <div className="space-y-4 md:space-y-2">
                                    <h2 className="text-3xl font-bold tracking-wide md:mt-3  lggg:mt-4   "><span className='text-[#7065F0]'>₹3500</span>  <span className='font-normal text-2xl'>/ month </span></h2>
                                    <h3 className='font-semibold '>Beverly Hills</h3>
                                    <p className="text-lg md:text-lg">60/158 Rajiv chowk Mumbai Gate, Maharashtra, India</p>
                                </div>

                            </div>
                            <hr />
                            <div className='grid grid-cols-3 mt-2 gap-2'>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.49988 23.7501V16.2501C2.49988 15.6876 2.61446 15.1771 2.84363 14.7188C3.07279 14.2605 3.37488 13.8542 3.74988 13.5001V10.0001C3.74988 8.95839 4.11446 8.07298 4.84363 7.34381C5.5728 6.61464 6.45821 6.25006 7.49988 6.25006H12.4999C12.979 6.25006 13.427 6.33881 13.8436 6.51631C14.2603 6.69298 14.6457 6.93756 14.9999 7.25006C15.354 6.93756 15.7395 6.69298 16.1561 6.51631C16.5728 6.33881 17.0207 6.25006 17.4999 6.25006H22.4999C23.5415 6.25006 24.427 6.61464 25.1561 7.34381C25.8853 8.07298 26.2499 8.95839 26.2499 10.0001V13.5001C26.6249 13.8542 26.927 14.2605 27.1561 14.7188C27.3853 15.1771 27.4999 15.6876 27.4999 16.2501V23.7501H24.9999V21.2501H4.99988V23.7501H2.49988ZM16.2499 12.5001H23.7499V10.0001C23.7499 9.64589 23.6299 9.34881 23.3899 9.10881C23.1507 8.86964 22.854 8.75006 22.4999 8.75006H17.4999C17.1457 8.75006 16.849 8.86964 16.6099 9.10881C16.3699 9.34881 16.2499 9.64589 16.2499 10.0001V12.5001ZM6.24988 12.5001H13.7499V10.0001C13.7499 9.64589 13.6303 9.34881 13.3911 9.10881C13.1511 8.86964 12.854 8.75006 12.4999 8.75006H7.49988C7.14571 8.75006 6.84863 8.86964 6.60863 9.10881C6.36946 9.34881 6.24988 9.64589 6.24988 10.0001V12.5001ZM4.99988 18.7501H24.9999V16.2501C24.9999 15.8959 24.8799 15.5988 24.6399 15.3588C24.4007 15.1196 24.104 15.0001 23.7499 15.0001H6.24988C5.89571 15.0001 5.59863 15.1196 5.35863 15.3588C5.11946 15.5988 4.99988 15.8959 4.99988 16.2501V18.7501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>1/2/3/4</p>
                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M8.75012 27.5001V16.0626C7.68762 15.7709 6.79721 15.1876 6.07887 14.3126C5.35971 13.4376 5.00012 12.4167 5.00012 11.2501V2.50006H7.50012V11.2501H8.75012V2.50006H11.2501V11.2501H12.5001V2.50006H15.0001V11.2501C15.0001 12.4167 14.6405 13.4376 13.9214 14.3126C13.203 15.1876 12.3126 15.7709 11.2501 16.0626V27.5001H8.75012ZM21.2501 27.5001V17.5001H17.5001V8.75006C17.5001 7.0209 18.1097 5.54715 19.3289 4.32881C20.5472 3.10964 22.021 2.50006 23.7501 2.50006V27.5001H21.2501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>NoFood</p>

                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-8 ' viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 23.25V0.75H9.25C11.3333 0.75 13.1042 1.47917 14.5625 2.9375C16.0208 4.39583 16.75 6.16667 16.75 8.25C16.75 10.3333 16.0208 12.1042 14.5625 13.5625C13.1042 15.0208 11.3333 15.75 9.25 15.75H5.5V23.25H0.5ZM5.5 10.75H9.5C10.1875 10.75 10.7763 10.505 11.2663 10.015C11.7554 9.52583 12 8.9375 12 8.25C12 7.5625 11.7554 6.97375 11.2663 6.48375C10.7763 5.99458 10.1875 5.75 9.5 5.75H5.5V10.75Z" fill="#7065F0" />
                                    </svg>
                                    <p className='text-2xl md:text-base'>Parking</p>

                                </div>
                            </div>
                        </div>
                        <i className='top-[47%] sm:top-[47%] md:top-[41%] mdd:top-[42%]  lgg:top-[48%] lggg:top-[43%] '><div className='flex ml-8'><IoIosMan className='text-2xl text-white mt-[11.8px]'></IoIosMan> <h4 className='text-2xl font-bold text-white text-center mt-2 ml-2'>MALE</h4> </div> </i>
                    </div>
                    <div className='card relative w-full  mx-auto shadow-lg  '>

                        <div className='h-[55%] lg:h-[50%] xl:h-[50%] '>

                            <img src="https://images.unsplash.com/photo-1670605106692-aaedff8716d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-center  w-full rounded-t-3xl h-full " />
                        </div>

                        <div className='p-3'>

                            <div className="flex flex-col justify-between  space-y-2">
                                <div className="space-y-4 md:space-y-2">
                                    <h2 className="text-3xl font-bold tracking-wide md:mt-3  lggg:mt-4   "><span className='text-[#7065F0]'>₹3500</span>  <span className='font-normal text-2xl'>/ month </span></h2>
                                    <h3 className='font-semibold '>Beverly Hills</h3>
                                    <p className="text-lg md:text-lg">60/158 Rajiv chowk Mumbai Gate, Maharashtra, India</p>
                                </div>

                            </div>
                            <hr />
                            <div className='grid grid-cols-3 mt-2 gap-2'>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.49988 23.7501V16.2501C2.49988 15.6876 2.61446 15.1771 2.84363 14.7188C3.07279 14.2605 3.37488 13.8542 3.74988 13.5001V10.0001C3.74988 8.95839 4.11446 8.07298 4.84363 7.34381C5.5728 6.61464 6.45821 6.25006 7.49988 6.25006H12.4999C12.979 6.25006 13.427 6.33881 13.8436 6.51631C14.2603 6.69298 14.6457 6.93756 14.9999 7.25006C15.354 6.93756 15.7395 6.69298 16.1561 6.51631C16.5728 6.33881 17.0207 6.25006 17.4999 6.25006H22.4999C23.5415 6.25006 24.427 6.61464 25.1561 7.34381C25.8853 8.07298 26.2499 8.95839 26.2499 10.0001V13.5001C26.6249 13.8542 26.927 14.2605 27.1561 14.7188C27.3853 15.1771 27.4999 15.6876 27.4999 16.2501V23.7501H24.9999V21.2501H4.99988V23.7501H2.49988ZM16.2499 12.5001H23.7499V10.0001C23.7499 9.64589 23.6299 9.34881 23.3899 9.10881C23.1507 8.86964 22.854 8.75006 22.4999 8.75006H17.4999C17.1457 8.75006 16.849 8.86964 16.6099 9.10881C16.3699 9.34881 16.2499 9.64589 16.2499 10.0001V12.5001ZM6.24988 12.5001H13.7499V10.0001C13.7499 9.64589 13.6303 9.34881 13.3911 9.10881C13.1511 8.86964 12.854 8.75006 12.4999 8.75006H7.49988C7.14571 8.75006 6.84863 8.86964 6.60863 9.10881C6.36946 9.34881 6.24988 9.64589 6.24988 10.0001V12.5001ZM4.99988 18.7501H24.9999V16.2501C24.9999 15.8959 24.8799 15.5988 24.6399 15.3588C24.4007 15.1196 24.104 15.0001 23.7499 15.0001H6.24988C5.89571 15.0001 5.59863 15.1196 5.35863 15.3588C5.11946 15.5988 4.99988 15.8959 4.99988 16.2501V18.7501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>1/2/3/4</p>
                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M8.75012 27.5001V16.0626C7.68762 15.7709 6.79721 15.1876 6.07887 14.3126C5.35971 13.4376 5.00012 12.4167 5.00012 11.2501V2.50006H7.50012V11.2501H8.75012V2.50006H11.2501V11.2501H12.5001V2.50006H15.0001V11.2501C15.0001 12.4167 14.6405 13.4376 13.9214 14.3126C13.203 15.1876 12.3126 15.7709 11.2501 16.0626V27.5001H8.75012ZM21.2501 27.5001V17.5001H17.5001V8.75006C17.5001 7.0209 18.1097 5.54715 19.3289 4.32881C20.5472 3.10964 22.021 2.50006 23.7501 2.50006V27.5001H21.2501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>NoFood</p>

                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-8 ' viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 23.25V0.75H9.25C11.3333 0.75 13.1042 1.47917 14.5625 2.9375C16.0208 4.39583 16.75 6.16667 16.75 8.25C16.75 10.3333 16.0208 12.1042 14.5625 13.5625C13.1042 15.0208 11.3333 15.75 9.25 15.75H5.5V23.25H0.5ZM5.5 10.75H9.5C10.1875 10.75 10.7763 10.505 11.2663 10.015C11.7554 9.52583 12 8.9375 12 8.25C12 7.5625 11.7554 6.97375 11.2663 6.48375C10.7763 5.99458 10.1875 5.75 9.5 5.75H5.5V10.75Z" fill="#7065F0" />
                                    </svg>
                                    <p className='text-2xl md:text-base'>Parking</p>

                                </div>
                            </div>
                        </div>
                        <i className='top-[47%] sm:top-[47%] md:top-[41%] mdd:top-[42%]  lgg:top-[48%] lggg:top-[43%] '><div className='flex ml-8'><IoIosMan className='text-2xl text-white mt-[11.8px]'></IoIosMan> <h4 className='text-2xl font-bold text-white text-center mt-2 ml-2'>MALE</h4> </div> </i>
                    </div>
                    <div className='card relative w-full  mx-auto shadow-lg  '>

                        <div className='h-[55%] lg:h-[50%] xl:h-[50%] '>

                            <img src="https://images.unsplash.com/photo-1670605106692-aaedff8716d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-center  w-full rounded-t-3xl h-full " />
                        </div>

                        <div className='p-3'>

                            <div className="flex flex-col justify-between  space-y-2">
                                <div className="space-y-4 md:space-y-2">
                                    <h2 className="text-3xl font-bold tracking-wide md:mt-3  lggg:mt-4   "><span className='text-[#7065F0]'>₹3500</span>  <span className='font-normal text-2xl'>/ month </span></h2>
                                    <h3 className='font-semibold '>Beverly Hills</h3>
                                    <p className="text-lg md:text-lg">60/158 Rajiv chowk Mumbai Gate, Maharashtra, India</p>
                                </div>

                            </div>
                            <hr />
                            <div className='grid grid-cols-3 mt-2 gap-2'>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.49988 23.7501V16.2501C2.49988 15.6876 2.61446 15.1771 2.84363 14.7188C3.07279 14.2605 3.37488 13.8542 3.74988 13.5001V10.0001C3.74988 8.95839 4.11446 8.07298 4.84363 7.34381C5.5728 6.61464 6.45821 6.25006 7.49988 6.25006H12.4999C12.979 6.25006 13.427 6.33881 13.8436 6.51631C14.2603 6.69298 14.6457 6.93756 14.9999 7.25006C15.354 6.93756 15.7395 6.69298 16.1561 6.51631C16.5728 6.33881 17.0207 6.25006 17.4999 6.25006H22.4999C23.5415 6.25006 24.427 6.61464 25.1561 7.34381C25.8853 8.07298 26.2499 8.95839 26.2499 10.0001V13.5001C26.6249 13.8542 26.927 14.2605 27.1561 14.7188C27.3853 15.1771 27.4999 15.6876 27.4999 16.2501V23.7501H24.9999V21.2501H4.99988V23.7501H2.49988ZM16.2499 12.5001H23.7499V10.0001C23.7499 9.64589 23.6299 9.34881 23.3899 9.10881C23.1507 8.86964 22.854 8.75006 22.4999 8.75006H17.4999C17.1457 8.75006 16.849 8.86964 16.6099 9.10881C16.3699 9.34881 16.2499 9.64589 16.2499 10.0001V12.5001ZM6.24988 12.5001H13.7499V10.0001C13.7499 9.64589 13.6303 9.34881 13.3911 9.10881C13.1511 8.86964 12.854 8.75006 12.4999 8.75006H7.49988C7.14571 8.75006 6.84863 8.86964 6.60863 9.10881C6.36946 9.34881 6.24988 9.64589 6.24988 10.0001V12.5001ZM4.99988 18.7501H24.9999V16.2501C24.9999 15.8959 24.8799 15.5988 24.6399 15.3588C24.4007 15.1196 24.104 15.0001 23.7499 15.0001H6.24988C5.89571 15.0001 5.59863 15.1196 5.35863 15.3588C5.11946 15.5988 4.99988 15.8959 4.99988 16.2501V18.7501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>1/2/3/4</p>
                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-10 -mt-1 ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M8.75012 27.5001V16.0626C7.68762 15.7709 6.79721 15.1876 6.07887 14.3126C5.35971 13.4376 5.00012 12.4167 5.00012 11.2501V2.50006H7.50012V11.2501H8.75012V2.50006H11.2501V11.2501H12.5001V2.50006H15.0001V11.2501C15.0001 12.4167 14.6405 13.4376 13.9214 14.3126C13.203 15.1876 12.3126 15.7709 11.2501 16.0626V27.5001H8.75012ZM21.2501 27.5001V17.5001H17.5001V8.75006C17.5001 7.0209 18.1097 5.54715 19.3289 4.32881C20.5472 3.10964 22.021 2.50006 23.7501 2.50006V27.5001H21.2501Z" fill="#7065F0" />

                                    </svg>
                                    <p className='text-2xl md:text-base'>NoFood</p>

                                </div>
                                <div className='flex gap-1 justify-center'>
                                    <svg className='w-10 h-8 ' viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 23.25V0.75H9.25C11.3333 0.75 13.1042 1.47917 14.5625 2.9375C16.0208 4.39583 16.75 6.16667 16.75 8.25C16.75 10.3333 16.0208 12.1042 14.5625 13.5625C13.1042 15.0208 11.3333 15.75 9.25 15.75H5.5V23.25H0.5ZM5.5 10.75H9.5C10.1875 10.75 10.7763 10.505 11.2663 10.015C11.7554 9.52583 12 8.9375 12 8.25C12 7.5625 11.7554 6.97375 11.2663 6.48375C10.7763 5.99458 10.1875 5.75 9.5 5.75H5.5V10.75Z" fill="#7065F0" />
                                    </svg>
                                    <p className='text-2xl md:text-base'>Parking</p>

                                </div>
                            </div>
                        </div>
                        <i className='top-[47%] sm:top-[47%] md:top-[41%] mdd:top-[42%]  lgg:top-[48%] lggg:top-[43%] '><div className='flex ml-8'><IoIosMan className='text-2xl text-white mt-[11.8px]'></IoIosMan> <h4 className='text-2xl font-bold text-white text-center mt-2 ml-2'>MALE</h4> </div> </i>
                    </div>



                </div>

            </section>
            <div className='bg-[#7065F0] w-full'>

                <Footer></Footer>
            </div>
        </main>

    );
};

export default Main3;