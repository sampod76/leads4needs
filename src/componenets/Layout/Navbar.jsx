import React from 'react'

export default function Navbar() {
  return (
    <div className=' px-[10px] sm:px-[120px] w-full '>
          <div className=' flex py-3 w-full items-center justify-between   '>
                <span className='text-[#262064] font-poppins text-[16px] sm:text-[23px] font-[600] sm:font-semibold '>PG WARS</span>
                <div className=' font-poppins gap-4 flex md:gap-11  font-medium md:text-[14px] text-[11px]'>
                    <button className=''>Manage Property</button>
                    <button className=' '>Blog</button>
                    <button className=' bg-[#7065F0] sm:px-4 px-3 py-[6px] rounded-md text-white'>Log In</button>
                </div>
            </div>
    </div>
  )
}
