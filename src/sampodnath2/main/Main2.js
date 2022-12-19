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
import Slider from 'react-slick';
import Modal from 'react-modal';
import Emoji from './Emoji/Emoji';
import './Emoji/Emoji.css'
import { toast, Toaster } from 'react-hot-toast';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px'
    },
};


const Main2 = () => {
    // function classNames(...classes) {
    //     return classes.filter(Boolean).join(' ')
    // }
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1.5,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    const manu = [<FaFacebook className='w-6 h-6 md:w-10 md:h-10 ' ></FaFacebook>,
    <FaLinkedin className='w-6 h-6 md:w-10 md:h-10 ' ></FaLinkedin>,
    <FaWhatsappSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaWhatsappSquare>,
    <FaTwitterSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaTwitterSquare>,
    <SiTelegram className='w-6 h-6 md:w-10 md:h-10 ' ></SiTelegram>]

    //modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openRatingModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const successfullRating = () => {
        // console.log('first')
        toast.success('Successfully rating!')
        closeModal()
    }

    return (
        <div className='max-w-[1400px]  mx-auto  md:py-4 relative'>
            <div className='md:mx-16 overflow-hidden'>

                {/* <Img></Img>
                 */}

                <Slider {...settings}>
                    <div className=" ">
                        <img src="https://images.unsplash.com/photo-1670968982569-722c875727dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-[25rem] sm:h-[30rem]    " />
                    </div>
                    <div className=" ">
                        <img src="https://images.unsplash.com/photo-1664574653006-4d7eb5f1a418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-[25rem] sm:h-[30rem]    " />
                    </div>
                    <div className=" ">
                        <img src="https://plus.unsplash.com/premium_photo-1661484952533-83719b54ca6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-[25rem] sm:h-[30rem]    " />
                    </div>
                    <div className=" ">
                        <img src="https://images.unsplash.com/photo-1670942298778-f339cac1fe01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-[25rem] sm:h-[30rem]    " />
                    </div>
                    <div className=" ">
                        <img src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-[25rem] sm:h-[30rem]    " />
                    </div>
                    <div className=" ">
                        <img src="https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-[25rem] sm:h-[30rem]    rounded-xl" />
                    </div>
                </Slider>
                <div className='absolute right-[5%] top-[2%] md:hidden'>

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

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16  gap-y-2 md:mt-7 p-3 absolute md:relative  top-[80%] bg-white rounded-[30px] md:mx-16'>
                <Leftside openRatingModal={openRatingModal}></Leftside>
                <Rightside></Rightside>
            </div>
            <div>

                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="md:h-[27rem] md:w-96 w-full h-full ">
                        <div className="flex justify-between">
                            <h3> </h3>
                            <button onClick={closeModal} className='border-2 rounded-full px-3 py-2 text-2xl bg-[#7065F0] text-white font-bold'>X</button>
                        </div>
                        <p className='mt-2 font-bold ml-1 text-xl'>Q.How much rating you give <span className='text-[#7065F0]'>Sampod narayen </span> PG ?</p>
                        <Emoji></Emoji>

                        <div className='flex justify-end gap-2 mr-3'>
                            <button onClick={successfullRating} className='bg-[#7065F0] rounded-md p-2 px-4 text-white'>Submit</button>

                        </div>

                    </div>
                </Modal>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Main2;