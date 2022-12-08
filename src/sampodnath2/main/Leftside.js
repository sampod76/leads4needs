import React from 'react';
import { FcRating } from "react-icons/fc";

const Leftside = () => {
    return (
        <div className='space-y-4 '>
            <div>
                <h5 className=' text-black font-bold'>ABC Dentist </h5>
                <p>2685, Outram Lines, GTB Nagar, Delhi, 110009</p>
                <p className='font-bold'>11 a.m. to 7:00 p.m.</p>
                <div className='flex items-center -mt-2'>
                    <div className='flex -mt-1'>
                        <FcRating></FcRating>
                        <FcRating></FcRating>
                        <FcRating></FcRating>
                        <FcRating></FcRating>
                    </div>
                    <h6 className='ml-1'>9 Reviews</h6>
                </div>
            </div>
            <div className=''>
                <h3>Business Specialization</h3>
                <div className='grid grid-cols-2 md:gap-3 gap-1 text-center'>
                    <div className='border-2 md:p-3 rounded-lg  text-sm px-1 py-2'>
                    Digital Marketing
                    </div>
                    <div className='border-2 md:p-3 rounded-lg text-sm px-1 py-2'>
                    Coaching Center
                    </div>
                    <div className='border-2 md:p-3 rounded-lg text-sm px-1 py-2'>
                    Institiute
                    </div>
                    <div className='border-2 md:p-3 rounded-lg text-sm px-1 py-2'>
                    More...
                    </div>
                </div>
            </div>

            <div>
                <h3>Description</h3>
                <p>Pg In Provide the Best Facility at a Very Less Price, This Pg Business Specialization is no AC, Geyser, wifi, and More. If you want to connect with these Pg In, Click on Contact Details and Directly Call This Business Owner without any Circumstances. If you are interested in this business profile so directly call, and firstly please say that you got This Business Detail from PgWars.com Website.Pg In Provide the Best Facility at a Very Less Price, This Pg Business Specialization is no AC, Geyser, wifi, and More. If you want to connect with these Pg In, Click on Contact Details and Directly Call This Business Owner without any Circumstances. If you are interested in this business profile so directly call, and firstly please say that you got This Business Detail from PgWars.com Website.</p>
            </div>
        </div>
    );
};

export default Leftside;