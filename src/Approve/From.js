import React from 'react';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { TagsInput } from 'react-tag-input-component';

import UplodeImgCard from './UplodeImgCard';


const From = () => {
    const [selected, setSelected] = useState(["papaya"]);
    const [roomSelect, setRoomSelect] = useState([])
    const [gander, setGander] = useState('')

    const selectRoomFunction = (e) => {
        console.log(e.target.checked, e.target.value)
        if (e.target.checked) {
            console.log(e.target.value)
            setRoomSelect([...roomSelect, e.target.value])
        }
        else {
            const remainingRoom = roomSelect.filter(room => e.target.value !== room)
            setRoomSelect(remainingRoom)
        }
    }
    const images = [
        'https://images.unsplash.com/photo-1671638738896-787ef80a9f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.2.1420041849.1667928226&semt=sph',
        'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.2.1420041849.1667928226&semt=sph',
        'https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?size=626&ext=jpg&ga=GA1.2.1420041849.1667928226&semt=sph',
     
        
      ]
       
    
   
    return (
        <div className=' font-semibold w-full '>
            <h1 className='md:text-3xl font-bold text-black mb-4'>Add PG</h1>
            <form className=' flex flex-col gap-3 ' >
                <div className='flex flex-col   '>

                    <label className='mb-1'>PG Name</label>
                    <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                </div>
                <div className='flex flex-col   '>

                    <label className='mb-1'>Phone</label>
                    <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                </div>
                <div className='flex flex-col   '>

                    <label className='mb-1'>PG Address</label>
                    <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                </div>
                <div className='flex flex-col   '>

                    <label className='mb-1'>City</label>
                    <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                </div>
                {/* border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0] */}
                <div className=''>
                    <h1 className='mb-1 text-lg'>Gender</h1>
                    <div className='flex justify-around gap-2 md:gap-10 sm:text-lg'>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center  sm:p-2 border-2  w-full h-full space-x-2 ${gander === 'male' && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input type="radio" name="gander" id="Male" className='redioButton' value='male' onClick={(e) => setGander(e.target.value)} />
                            <label htmlFor="Male">Male</label>
                        </div>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center  sm:p-2 border-2  w-full h-full space-x-2 ${gander === 'female' && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input type="radio" name="gander" id="Female" value='female' className='' onClick={(e) => setGander(e.target.value)} />
                            <label htmlFor="Female">Female</label>
                        </div>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center  sm:p-2 border-2  w-full h-full space-x-2 ${gander === 'unisex' && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input type="radio" name="gander" id="Unisex" value='unisex' className='' onClick={(e) => setGander(e.target.value)} />
                            <label htmlFor="Unisex">Unisex</label>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='mb-1 text-lg'>Types of Room Sharing</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-6 md:text-lg '>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center sm:p-2 border-2 w-full h-full space-x-2 ${roomSelect.includes('1')  && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input onClick={(e) => selectRoomFunction(e)} type="checkbox" id="1" className='' value={1} />
                            <label htmlFor="1">1 room</label>
                        </div>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center sm:p-2 border-2 w-full h-full space-x-2 ${roomSelect.includes('2') && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input onClick={(e) => selectRoomFunction(e)} type="checkbox" id="2" className='' value={2} />
                            <label htmlFor="2">2 room</label>
                        </div>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center sm:p-2 border-2 w-full h-full space-x-2 ${roomSelect.includes('3') && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input onClick={(e) => selectRoomFunction(e)} type="checkbox" id="3" className='' value={3} />
                            <label htmlFor="3">3 room</label>
                        </div>
                        <div className={`focus:outline focus:outline-sky-600 rounded-lg text-center sm:p-2 border-2 w-full h-full space-x-2 ${roomSelect.includes('4') && 'border-[#7065F0] bg-[#7065F0]/10  text-[#7065F0]'}`}>
                            <input onClick={(e) => selectRoomFunction(e)} type="checkbox" id="4" className='' value={4} />
                            <label htmlFor="4">4 room</label>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h1 className='my-2 font-bold text-lg'>Room Sharing Price</h1>
                    <hr />

                    <div className='grid grid-cols-2 gap-3 mt-1'>
                        <div >
                            <h1 className='text-lg' >Single Room Price</h1>
                            <input type="text" name="" id="" className=' focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2  w-full disabled:bg-slate-200' disabled={!roomSelect.includes('1')} />
                        </div>
                        <div className=''>
                            <h1 className='text-lg'>Double Room Price</h1>
                            <input type="text" name="" id="" className=' focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2  w-full disabled:bg-slate-200 ' disabled={!roomSelect.includes('2')} />
                        </div>
                        <div className=''>
                            <h1 className='text-lg'>Triple Room Price</h1>
                            <input type="text" name="" id="" className=' focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2  w-full disabled:bg-slate-200' disabled={!roomSelect.includes('3')} />
                        </div>
                        <div className=''>
                            <h1 className='text-lg'>Four Room Price</h1>
                            <input type="text" name="" id="" className=' focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2  w-full disabled:bg-slate-200' disabled={!roomSelect.includes('4')} />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>Add Tag</h4>
                    {/* <pre className='flex'>{selected.map(se=><p >,{se}</p>)}</pre> */}
                    <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="fruits"
                        placeHolder="enter fruits"
                    />
                </div>

                <div className=''>
                    <h1 className='my-2 text-lg'>Upload Images</h1>
                    <div className='flex gap-4 ' >
                        <div className='flex flex-col justify-center items-center rounded-lg border-2 border-gray-300  w-40 h-[12rem] smm:w-60 smm:h-[16.8125rem] text-center'>
                            <h1 className='text-lg'>+</h1>
                            <h1 className='text-lg'>Cover Image</h1>
                        </div>
                        <div className='w-40 h-[12rem] smm:w-60 smm:h-[16.8125rem]  rounded-lg border-2 border-gray-300   '>
                            <div className='h-[50%]'>

                                <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full rounded-t-lg h-full' />
                            </div>
                            <div className='relative uplode h-[50%]'>

                                <div className='px-2 space-y-2'>

                                    <div className='p-2  rounded-2xl  w-[30%]   ' />
                                    <div className='p-2 rounded-2xl bg-[#7065F0] w-[40%]   ' />
                                    <div className='p-2 rounded-2xl bg-[#000929] w-[40%]   ' />
                                    <div className='p-2 rounded-2xl bg-[#878787] w-[80%]   ' />



                                </div>

                                <div className='hidden smm:flex gap-1 justify-around mt-1 p-1'>

                                    <div className='flex gap-[4px]'>
                                        <p className='w-2 h-2 mt-[2px] smm:w-5 smm:h-5 smm:mt-1  rounded-full bg-[#7065F0]'></p>
                                        <p className='w-7 h-2 mt-[2px] smm:w-12 smm:h-5 smm:mt-1  rounded-lg bg-[#878787]'></p>

                                    </div>
                                    <div className='flex gap-[4px]'>
                                        <p className='w-2 h-2 mt-[2px] smm:w-5 smm:h-5 smm:mt-1  rounded-full bg-[#7065F0]'></p>
                                        <p className='w-7 h-2 mt-[2px] smm:w-12 smm:h-5 smm:mt-1  rounded-lg bg-[#878787]'></p>

                                    </div>
                                    <div className='flex gap-[4px]'>
                                        <p className='w-2 h-2 mt-[2px] smm:w-5 smm:h-5 smm:mt-1  rounded-full bg-[#7065F0]'></p>
                                        <p className='w-7 h-2 mt-[2px] smm:w-12 smm:h-5 smm:mt-1  rounded-lg bg-[#878787]'></p>

                                    </div>
                                </div>
                                <i className='top-[-29%] smm:top-[-22%]'>
                                    <div className='flex gap-1'>
                                        <p className='w-6 h-6 mt-2 ml-3 rounded-full bg-white'></p>
                                        <p className='w-12 h-5 mt-2 ml-3 rounded-xl bg-white'></p>

                                    </div>
                                </i>
                            </div>


                        </div>



                    </div>
                </div>


                <div className='mt-2 border-2 border-gray-300 p-[0.685rem] rounded-lg'>
                    <div className='grid grid-cols-6 gap-1 justify-between items-center'>
                        <div className='flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl h-20 md:h-28 lg:h-28  text-center  sm:text-xs'>
                            <h1 className=' text-[10px] md:text-base'>+</h1>
                            <h1 className=' text-[10px] md:text-base'>More</h1>
                            <h1 className=' text-[8px]'>Uplode 5 image</h1>
                        </div>
                        {
                            images.map(img=> <UplodeImgCard img={img}></UplodeImgCard>)
                        }
                     
                       


                    </div>
                </div>
                <div className='flex justify-end gap-2 '>
                    <button className='bg-[#7065F0] p-3  rounded-lg text-center text-lg sm:w-[30%] text-white font-bold'>Approved</button>
                    <button className='bg-[#7065F0] p-3  rounded-lg text-center text-lg sm:w-[30%] text-white font-bold'>Reject</button>
                </div>

            </form>

        </div>
    );
};

export default From;