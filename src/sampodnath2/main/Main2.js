import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import React from 'react';
import Img from './Img';
import Leftside from './Leftside';
import Rightside from './Rightside';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { TfiSharethis } from "react-icons/tfi";


const Main2 = () => {
    // function classNames(...classes) {
    //     return classes.filter(Boolean).join(' ')
    // }

    const manu = [<FaFacebook className='w-6 h-6 md:w-10 md:h-10 ' ></FaFacebook>,
    <FaLinkedin className='w-6 h-6 md:w-10 md:h-10 ' ></FaLinkedin>,
    <FaWhatsappSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaWhatsappSquare>,
    <FaTwitterSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaTwitterSquare>,
    <SiTelegram className='w-6 h-6 md:w-10 md:h-10 ' ></SiTelegram>]


    return (
        <div className='max-w-[1400px]  mx-auto  md:py-4 relative'>
            <div className='md:mx-16'>

                <Img></Img>

                <div className='absolute right-[5%] top-[2%]'>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md   p-3 text-sm font-medium text-gray-700   ">
                                <TfiSharethis className='text-white w-6 h-6 md:w-10 md:h-10'></TfiSharethis>

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
                            <Menu.Items className="absolute right-0 z-10 w-10 lg:w-14 origin-top-right rounded-md  ">
                                <div className="py-1 space-y-1 text-white cursor-pointer ">

                                    {
                                        manu.map(li => <Menu.Item>
                                            {({ active }) => (
                                                li
                                            )}
                                        </Menu.Item>)
                                    }

                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16  gap-y-2 md:mt-7 p-3 absolute md:relative  top-[80%] bg-white rounded-3xl md:mx-16'>
                <Leftside></Leftside>
                <Rightside></Rightside>
            </div>
        </div>
    );
};

export default Main2;