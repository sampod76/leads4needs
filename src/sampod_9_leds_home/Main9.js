
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
                        <input type="search" name="" id="" placeholder='City' className='md:col-span-5 col-span-full px-3 p-3 md:p-0 focus:outline-none border-1 rounded-lg border-gray-200 placeholder:text-2xl ' />
                        <div className='border-1 rounded-lg border-gray-200 md:col-span-7 col-span-full px-3 p-3 md:p-0 flex gap-2'>
                            <BiSearch className='text-3xl text-gray-400'></BiSearch>
                            <input type="search" name="" id="" placeholder='Search' className='  focus:outline-none   placeholder:text-2xl' />
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



            
            <Footer></Footer>
            {/* <Footer></Footer> */}
        </main>

    );
};

export default Main9;