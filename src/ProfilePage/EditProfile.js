import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const EditProfile = () => {
    const [value, setValue] = useState()
    return (
        <div className='space-y-3 p-3'>
            <h4 className='text-center'>Edit Profile</h4>
            <div>

                <label className='mb-1 text-xl'>Business Name</label>
                <input type="text" name="" id="" className='focus:outline-none border-1 rounded-lg border-gray-200 p-2 w-full' />
            </div>
            <div>

                <label className='mb-1 text-xl'>Address</label>
                <input type="text" name="" id="" className='focus:outline-none border-1 rounded-lg border-gray-200 p-2 w-full' />
            </div>
            <div className='flex justify-between gap-2'>
                <div>

                    <label className='mb-1 text-xl'>City</label>
                    <input type="text" name="" id="" className='focus:outline-none border-1 rounded-lg border-gray-200 p-2 w-full' />
                </div>
                <div>

                    <label className='mb-1 text-xl'>State</label>
                    <input type="text" name="" id="" className='focus:outline-none border-1 rounded-lg border-gray-200 p-2 w-full' />
                </div>
            </div>
            <div className='flex justify-between gap-3'>
                <div className=''>
                    <label htmlFor="" className='mb-1 text-xl'>Phone</label>
                    <PhoneInput
                        country={'us'}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,

                        }}
                    />

                </div>


            </div>

            <div className=''>
                <label className='mb-1 text-xl' htmlFor="">Nokosocial</label>
                <input type="text" name="" id="" className='focus:outline-none border-1 rounded-lg border-gray-200 p-2 w-full' />
            </div>
            <div className=''>
                <label className='mb-1 text-xl' htmlFor="">Description</label>
                <input type="text" name="" id="" className='focus:outline-none border-1 rounded-lg border-gray-200 p-2 w-full' />
            </div>
        </div>
    );
};

export default EditProfile;