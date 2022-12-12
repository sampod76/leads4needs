import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
const Table = () => {
    return (
        <div>
            <div className='flex justify-between my-3'>
                <h2>286 users</h2>
                <button className='px-4 py-2 rounded-xl bg-blue-600 text-white'>Add Role</button>
            </div>
            <div class="md:w-full mx-auto">

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
                                            <th scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                PG NAME
                                            </th>
                                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                CONTACT
                                            </th>
                                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                ROLE
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
                                            <td scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-all" class="sr-only" >checkbox</label>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-center">
                                                <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='w-14 h-14 rounded-full' />

                                                <div className='space-y-1'>
                                                    <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                    <p className='flex items-center gap-1'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                </div>

                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                <div >
                                                    <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                    <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <button className='bg-[#FF6464] px-4 py-2 rounded-xl text-white'>Admin</button>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">2</td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">10</td>
                                            <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                            <td scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-all" class="sr-only" >checkbox</label>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-center">
                                                <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='w-14 h-14 rounded-full' />

                                                <div className='space-y-1'>
                                                    <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                    <p className='flex items-center gap-1'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                </div>

                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                <div >
                                                    <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                    <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <button className='bg-[#FF6464] px-4 py-2 rounded-xl text-white'>Admin</button>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">2</td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">10</td>
                                            <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                            <td scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-all" class="sr-only" >checkbox</label>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-center">
                                                <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='w-14 h-14 rounded-full' />

                                                <div className='space-y-1'>
                                                    <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                    <p className='flex items-center gap-1'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                </div>

                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                <div >
                                                    <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                    <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <button className='bg-[#FF6464] px-4 py-2 rounded-xl text-white'>Admin</button>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">2</td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">10</td>
                                            <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                            <td scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-all" class="sr-only" >checkbox</label>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-center">
                                                <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='w-14 h-14 rounded-full' />

                                                <div className='space-y-1'>
                                                    <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                    <p className='flex items-center gap-1'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                </div>

                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                <div >
                                                    <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                    <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <button className='bg-[#FF6464] px-4 py-2 rounded-xl text-white'>Admin</button>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">2</td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">10</td>
                                            <td class="p-2 text-sm font-medium text-left whitespace-nowrap">
                                                <button className='bg-blue-600 rounded-lg px-4 py-2 text-white'>Profile</button>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                            <td scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-all" class="sr-only" >checkbox</label>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center justify-center">
                                                <img src="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?b=1&k=20&m=1221755378&s=612x612&w=0&h=OWd3uLSGix_NPjWHyaWNgpZkGALEUNg3gq8DY9wNIdM=" alt="" className='w-14 h-14 rounded-full' />

                                                <div className='space-y-1'>
                                                    <p className='text-sm mt-1 ml-1  font-bold'>Charlie Quinn</p>
                                                    <p className='flex items-center gap-1'><BiTimeFive></BiTimeFive> Today at 4:40 p.m.</p>
                                                </div>

                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">

                                                <div >
                                                    <p className='flex gap-1 '><AiOutlineMail className='w-5 mt-1'></AiOutlineMail> charliequinn@gmail.com</p>
                                                    <p className='flex gap-1'><IoCallOutline className='w-5 mt-1'></IoCallOutline> +91 9876543210</p>
                                                </div>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <button className='bg-[#FF6464] px-4 py-2 rounded-xl text-white'>Admin</button>
                                            </td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">2</td>
                                            <td class="p-2 text-sm font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">10</td>
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
    );
};

export default Table;