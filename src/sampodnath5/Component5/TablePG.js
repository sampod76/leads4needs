import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '0%',

        transform: 'translate(-50%, -50%)',
    },
};

const TablePG = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div>
                <div className='flex justify-between my-3'>
                    <h2>286 users</h2>
                    <button onClick={openModal} className='px-4 py-2 rounded-xl bg-blue-600 text-white'>Add Role</button>
                </div>
                <div class="md:w-full mx-auto  ">

                    <div class="flex flex-col rounded-lg border-2">
                        <div class="overflow-x-auto shadow-md sm:rounded-lg">
                            <div class="inline-block min-w-full align-middle">
                                <div className='flex justify-between p-3 items-center'>
                                    <input type="search" name="" id="" placeholder='search' className='px-3 p-3 md:p-0 focus:outline-none border-1 rounded-lg border-gray-200 w-[35%]' />

                                    <div className='flex items-center justify-between gap-3 '>
                                        <button className='px-3 py-2 bg-blue-700 rounded-xl text-white'>Deleted</button>
                                        <p className=''>Showing</p>

                                        <select name="" id="" className=''>

                                            <option value="10">10
                                            </option>
                                            <option value="5">5
                                            </option>
                                        </select>
                                        <p>of 67 results</p>
                                    </div>
                                </div>
                                <div class="overflow-hidden ">
                                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                        <thead class="bg-gray-100 dark:bg-gray-700 h-20 ">
                                            <tr className='divide-x  divide-gray-200 h-20'>

                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    PG NAME
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    CONTACT
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    AGENT
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    No. of PG
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    TOTAL VIEWS
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    EDIT PROFILE
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y  divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 ">
                                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />

                                                    <div className='md:space-y-1 space-y-[]'>
                                                        <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                        <p className='flex items-center gap-1 text-xs mr-2 md:mr-0'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                    </div>

                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                    <div >
                                                        <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                        <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                    </div>
                                                </td>

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />


                                                    <p className='text-sm mt-3 ml-1  font-bold'>Charlie Quinn</p>


                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">2</td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">10</td>
                                                <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                    <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                                </td>
                                            </tr>
                                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />

                                                    <div className='md:space-y-1 space-y-[]'>
                                                        <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                        <p className='flex items-center gap-1 text-xs mr-2 md:mr-0'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                    </div>

                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                    <div >
                                                        <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                        <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                    </div>
                                                </td>

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />


                                                    <p className='text-sm mt-3 ml-1  font-bold'>Charlie Quinn</p>


                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">2</td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">10</td>
                                                <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                    <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                                </td>
                                            </tr>
                                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />

                                                    <div className='md:space-y-1 space-y-[]'>
                                                        <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                        <p className='flex items-center gap-1 text-xs mr-2 md:mr-0'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                    </div>

                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                    <div >
                                                        <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                        <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                    </div>
                                                </td>

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />


                                                    <p className='text-sm mt-3 ml-1  font-bold'>Charlie Quinn</p>


                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">2</td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">10</td>
                                                <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                    <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                                </td>
                                            </tr>
                                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />

                                                    <div className='md:space-y-1 space-y-[]'>
                                                        <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                        <p className='flex items-center gap-1 text-xs mr-2 md:mr-0'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                    </div>

                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                    <div >
                                                        <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                        <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                    </div>
                                                </td>

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />


                                                    <p className='text-sm mt-3 ml-1  font-bold'>Charlie Quinn</p>


                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">2</td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">10</td>
                                                <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                    <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                                </td>
                                            </tr>
                                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />

                                                    <div className='md:space-y-1 space-y-[]'>
                                                        <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                        <p className='flex items-center gap-1 text-xs mr-2 md:mr-0'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                    </div>

                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                    <div >
                                                        <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                        <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                    </div>
                                                </td>

                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-start">
                                                    <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='md:w-14 md:h-14 w-7 h-7 rounded-full' />


                                                    <p className='text-sm mt-3 ml-1  font-bold'>Charlie Quinn</p>


                                                </td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">2</td>
                                                <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center md:text-left">10</td>
                                                <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                    <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                                </td>
                                            </tr>
                                           

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='w-[30.875rem]'>
                        <div className='flex justify-between bg-[#7065F0] text-white rounded-md p-3'>
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-white text-lg p-2 rounded-xl'>Add Role</h2>
                            <button onClick={closeModal} className='px-2 text-3xl rounded-lg text-white'>X</button>

                        </div>

                        <form className='space-y-3'>
                            <input type="search" name="" id="" placeholder='Search people, users, etc' className='border-2 rounded-lg p-2 w-full my-1' />
                            <div className='flex gap-3 items-center border-2 rounded-lg'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGVCZrqzb4-IKeQ5UJLnXKlhPzHrVdtu0yg&usqp=CAU" alt="" className='w-10 h-10 rounded-full' />
                                <div className=''>
                                    <p className='text-base -mb-[2px] mt-2 font-semibold'>Alisha Meyna</p>
                                    <p className='text-base  font-semibold'>Software Developer</p>
                                </div>
                            </div>
                            <div className='border-2 rounded-lg flex gap-3'>
                                <input type="radio" name="admin" id="admin" />
                                <label htmlFor='admin'>
                                    <h5>Admin</h5>
                                    <p>This role manages everything on the Page. It’s the only role that can edit the Page and manage all admins. </p>
                                </label>
                            </div>
                            <div className='border-2 rounded-lg flex gap-3'>
                                <input type="radio" name="admin" id="super" />
                                <label htmlFor='super'>
                                    <h5>Super Admin</h5>
                                    <p>This role manages everything on the Page. It’s the only role that can edit the Page and manage all admins.  </p>
                                </label>
                            </div>
                            <div className='border-2 rounded-lg flex gap-3'>
                                <input type="radio" name="admin" id="modarate" />
                                <label htmlFor='modarate'>
                                    <h5>Moderater</h5>
                                    <p>This role manages everything on the Page. It’s the only role that can edit the Page and manage all admins.  </p>
                                </label>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default TablePG;