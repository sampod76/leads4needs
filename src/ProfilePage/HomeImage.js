import React from 'react';
import img from "./img1/img1.png";

const HomeImage = () => {
    return (
        <div className="">
            <img src={img} alt="" className="w-full h-72 md:h-full lg:h-full " />
        </div>
    );
};

export default HomeImage;