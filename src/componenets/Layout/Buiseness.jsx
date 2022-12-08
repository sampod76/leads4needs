import React from 'react'
import Navbar from './Navbar'
import { AiFillStar, AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import { MdFastfood, MdOutlineShower } from "react-icons/md";
import { BsCloudSnow } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GrFan } from "react-icons/gr";
export default function Buiseness() {
  return (
    <div>
      <div className='sm:block hidden'>
        <Navbar />
      </div>

      <div className=''>
        <div className='md:hidden'>
          <div id="carouselExampleControls" class="carousel slide  relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/2009-05-16_Main_office_lobby_at_Hampton_Forest_Apartments.jpg"
                  class="block h-[380px] w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://5.imimg.com/data5/ANDROID/Default/2022/6/HY/PQ/DA/125048533/prod-20220610-2322455281946374359187468-jpg-500x500.jpg"
                  class="block h-[380px]  w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-erick-mufasa-1350789.jpg&fm=jpg"
                  class="block h-[380px]  w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>



        <div className='py-4 md:px-28'>
          <div className='md:flex gap-2 hidden'>
            <img src="https://nigerianbuildingdesigns.com/wp-content/uploads/2020/10/GB_Photo-3-1.jpg" className='h-[400px] w-[300px]' alt="" />

            <div className='flex flex-col gap-2'>
              <img src="https://5.imimg.com/data5/ANDROID/Default/2022/6/HY/PQ/DA/125048533/prod-20220610-2322455281946374359187468-jpg-500x500.jpg" className='h-[200px] w-[400px]' alt="" />

              <div className='flex gap-2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/2009-05-16_Main_office_lobby_at_Hampton_Forest_Apartments.jpg" className='h-[193px] w-[196px]' alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/2009-05-16_Main_office_lobby_at_Hampton_Forest_Apartments.jpg" className='h-[193px] w-[196px]' alt="" />

              </div>

            </div>
            <div className='flex flex-col gap-2'>
              <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-erick-mufasa-1350789.jpg&fm=jpg" className='h-[273px] w-[300px]' alt="" />
              <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-erick-mufasa-1350789.jpg&fm=jpg" className='h-[120px] w-[300px]' alt="" />
            </div>
          </div>



          <div className=' mt-8 '>
            <div className=' mt-4 sm:block hidden absolute z-50 ml-[50%]'>
              <div className=' border-1 border-[#878787] rounded-md px-4 py-3'>
                <h5 className=' font-poppins font-semibold '>Prices</h5>
                <div className='flex flex-col'>
                  <div className='flex justify-between px-3 mt-2 font-poppins text-white font-medium w-[300px] bg-[#7065F0] py-4 rounded-md '>
                    <span className=''>Single Room</span>
                    <div className=' border-[0.5px]'></div>
                    <span>4000</span>
                  </div>
                  <div className='flex justify-between px-3 mt-2 border-1 border-[#878787] font-poppins text-black font-medium w-[300px]  py-4 rounded-md '>
                    <span className=''>Single Room</span>
                    <div className=' border-[0.5px]'></div>
                    <span>4000</span>
                  </div>
                  <div className='flex justify-between px-3 mt-2 border-1 border-[#878787] font-poppins text-black font-medium w-[300px]  py-4 rounded-md '>
                    <span className=''>Single Room</span>
                    <div className=' border-[0.5px]'></div>
                    <span>4000</span>
                  </div>
                  <div className='flex justify-between px-3 mt-2 border-1 border-[#878787] font-poppins text-black font-medium w-[300px]  py-4 rounded-md '>
                    <span className=''>Single Room</span>
                    <div className=' border-[0.5px]'></div>
                    <span>4000</span>
                  </div>

                </div>
              </div>

              <div className='flex gap-2 mt-2 '>
                <div className='bg-[#7065F0] rounded-md text-white px-3 py-2 text-[25px]'>
                  <FiPhoneCall />
                </div>
                <div>
                  <div className='bg-[#7065F0] rounded-md py-2 text-white px-28  '>
                    <h5 className='text-[15px] mt-1 '>Call Now</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className=' md:bg-transparent bg-white  absolute md:mt-0  -mt-32 rounded-tr-[40px] rounded-tl-[40px]'>
              <div className='px-4 py-4'>
                <div className=' flex justify-between'>
                  <h5 className='text-black font-poppins font-semibold md:text-[30px]'>Birdhouse PG (Boys)</h5>
                  <AiOutlineHeart className='text-[#7065F0] border-1 md:hidden p-1 h-7 w-7 border-[#F1F0FB] rounded-full ' />
                </div>
                <span className=' font-poppins text-[#878787] md:text-[17px] text-[12px] font-medium'>2685, Outram Lines, GTB Nagar, Delhi, 110009</span>
                <span className='flex text-[#FFA800] items-center'>
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><span className='text-[#878787] ml-1 font-poppins font-medium md:text-[14px] text-[12px] flex items-center'>9 Reviews <AiOutlineRight /></span>
                </span>
                <div className='md:hidden mt-4'>
                  <h5 className=' font-poppins font-semibold text-[16px] '>
                    Prices
                  </h5>
                  <div className='flex gap-4'>
                    <div className='flex flex-col font-poppins items-center border-1 border-[#DADFFC] text-[#7065F0] px-[33px] rounded-lg py-1  text-[12px]'>
                      <span className=' font-medium'>Single Room </span>
                      <span className=' font-extrabold'>4000</span>
                    </div>

                    <div className='flex flex-col font-poppins items-center border-1 border-[#DADFFC] text-[#7065F0] px-[33px] rounded-lg py-1  text-[12px]'>
                      <span className=' font-medium'>Double Room </span>
                      <span className=' font-extrabold'>4000</span>
                    </div>
                  </div>

                  <div className='flex mt-3 gap-4'>
                    <div className='flex flex-col font-poppins items-center border-1 border-[#DADFFC] text-[#7065F0] px-[36px] rounded-lg py-1  text-[12px]'>
                      <span className=' font-medium'>Triple Room </span>
                      <span className=' font-extrabold'>4000</span>
                    </div>

                    <div className='flex flex-col font-poppins items-center border-1 border-[#DADFFC] text-[#7065F0] px-[36px] rounded-lg py-1  text-[12px]'>
                      <span className=' font-medium'>Four Room </span>
                      <span className=' font-extrabold'>4000</span>
                    </div>
                  </div>

                </div>
                <div className=' mt-3'>
                  <div className=' flex justify-between'>
                    <h5 className='md:text-[28px] text-[18px] '>Features</h5>
                    <span className=' md:hidden text-[#2194FF] mt-2 font-poppins font-bold text-[10px]'>See more</span>
                  </div>
                  <div className='flex mt-3 md:gap-4 gap-3'>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center md:py-3 px-[14px] py-1 md:rounded-md rounded-xl md:px-4 border-1 border-[#DADFFC]'>
                      <MdFastfood />
                      <span className='text-[13px] font-poppins font-semibold'>Food</span>
                    </div>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center md:py-3 px-[14px] py-1 md:rounded-md rounded-xl md:px-4 border-1 border-[#DADFFC]'>
                      <MdOutlineShower />
                      <span className='text-[13px] font-poppins font-semibold'>Geyser</span>
                    </div>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center md:py-3 px-[16px] py-1 md:rounded-md rounded-xl md:px-8 border-1 border-[#DADFFC]'>
                      <BsCloudSnow className='text-[#7065F0]' />
                      <span className='text-[13px] font-poppins font-semibold'>AC</span>
                    </div>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center md:py-3 px-[14px] py-1 md:rounded-md rounded-xl md:px-4 border-1 border-[#DADFFC]'>
                      <span className=' font-poppins font-bold'>P</span>
                      <span className='text-[13px] font-poppins font-semibold'>Parking</span>
                    </div>

                  </div>

                  <div className='md:flex sm:block hidden mt-3 gap-4'>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center py-3 rounded-md px-4 border-1 border-[#DADFFC]'>
                      <MdFastfood />
                      <span className='text-[13px] font-poppins font-semibold'>Food</span>
                    </div>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center py-3 rounded-md px-4 border-1 border-[#DADFFC]'>
                      <MdOutlineShower />
                      <span className='text-[13px] font-poppins font-semibold'>Geyser</span>
                    </div>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center py-3 rounded-md px-8 border-1 border-[#DADFFC]'>
                      <BsCloudSnow className='text-[#7065F0]' />
                      <span className='text-[13px] font-poppins font-semibold'>AC</span>
                    </div>
                    <div className='flex flex-col text-[#7065F0] gap-1 items-center py-3 rounded-md px-4 border-1 border-[#DADFFC]'>
                      <span className=' font-poppins font-bold'>P</span>
                      <span className='text-[13px] font-poppins font-semibold'>Parking</span>
                    </div>

                  </div>

                  <div className='mt-4'>
                    <h5 className='  font-semibold font-poppins md:text-[28px] text-[15px] text-black'>PG Agent</h5>
                    <div className='   mt-8 flex items-center gap-3'>
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className='h-[60px] w-[60px] rounded-full' alt="" />
                      <div className='flex flex-col '>
                        <span className=' font-poppins md:font-semibold font-extrabold md:text-[18px] text-[12px]'>Jenna White</span>
                        <span className=' font-poppins text-[#878787] font-semibold md:text-[13px] text-[10px]'>Owner 9876543210</span>
                      </div>
                      <div className=' ml-9'>

                        <button className='text-[12px] flex items-center bg-[#7065F0] px-3 py-2 text-white font-poppins font-semibold rounded-lg gap-2'><FiPhoneCall />Call Now</button>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4'>
                    <div className=''>
                      <h5 className=' font-poppins text-[15px] font-semibold text-black'>Map</h5>

                      <div>
                        <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iy6P.qskNVuU/v0/1200x-1.png" className='h-[200px] w-[98%] rounded-md ' alt="" />
                      </div>
                    </div>

                    <div className=' mt-8'>
                      <h5 className=' font-poppins font-bold text-[15px] md:text-[22px]'>Description</h5>
                      <p className='text-[#878787] font-poppins font-semibold md:text-[17px] text-[11px] '>Pg In Provide the Best Facility at a Very Less Price, This Pg Business Specialization is <span className=' '> no AC, Geyser, wifi, and More.</span> If you want to connect with these Pg In, Click on Contact Details and Directly Call This Business Owner without any Circumstances. If you are interested in this business profile so directly call, and firstly please say that you got This Business Detail from PgWars.com Website.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* price */}

          </div>

        </div>
      </div>
    </div>
  )
}
