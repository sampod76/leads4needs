import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PythonIcon } from '../Svg';

const ArticleList_Leftside = () => {
    const [ListCssActive, setListCssActiove] = useState(null)
    const PythonList = [
        'Python Variables',
        'Pyton | Types of Variables',
        'Python | Identifiers',
        'Python | Keywords',
        'Python | Input',
        'Python | Comments',
        'Python | Operators',
        'Python | String',
        'Python | If',
        'Python | If Else',
        'Python | Looping',
        'Python |While',
        'Python | Identifiers',
    ]

    return (
        <div className='flex flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0'>
            <Link className='relative flex no-underline  w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
                <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
                    <PythonIcon className={'w-12'}></PythonIcon>
                </div>
                <h3 className='mt-1 w-full h-full text-center  text-[#01B6FF] py-2.5 font-bold'>PYTHON</h3>
            </Link>
            {
                PythonList.map((list, i) => <Link key={i} onClick={() => setListCssActiove(i)} href=" " className={` courseShadow no-underline relative text-white py-4 text-lg bg-[#333F50] shadow-2xl px-6  font-bold whitespace-nowrap ${i === ListCssActive && 'border-2 border-[#01B6FF]'} `}>
                    <div className={`  ${i === ListCssActive ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5' : 'h-full -top-0'} absolute  -right-5 w-10  bg-[#333F50] transfrom -skew-x-[18deg]`}></div>
                    <div className={`${i === ListCssActive ? 'block' : 'hidden'} w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}></div>  {list}</Link>,


                )
            }
        </div>
    );
};

export default ArticleList_Leftside;