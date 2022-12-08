import React from 'react';
import Img from './Img';
import Leftside from './Leftside';
import Rightside from './Rightside';


const Main2 = () => {
    return (
        <div className='max-w-[1500px]  mx-auto '>
            <Img></Img>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-7 p-3'>
                <Leftside></Leftside>
                <Rightside></Rightside>
            </div>
        </div>
    );
};

export default Main2;