import React, { useState } from 'react';
import Card from './Component/Card';
import From from './Component/From';



const Main10 = () => {


    return (
        <div className=' p-4 container mx-auto '>
            <section className='flex justify-between gap-7 md:gap-12'>
                <Card></Card>
                <From></From>
            </section>


        </div>
    );
};

export default Main10;