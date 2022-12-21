import React from 'react';
import BusinessCard from './BusinessCard';
import EditProfile from './EditProfile';
import HomeImage from './HomeImage';
import IntroCard from './IntroCard';

const ProfileMain = () => {
    return (
        <div>
            <HomeImage />
            <IntroCard />
            {/* <EditProfile /> */}
            <div className='max-w-[1440px] mx-auto'>
                <div className='mx-16'>
                    <BusinessCard />
                </div>
            </div>
        </div>
    );
};

export default ProfileMain;