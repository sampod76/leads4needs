import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import Modal from 'react-modal';
const UplodeImgCard = ({ img }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openImgModal() {
        setIsOpen(true);
    }
    function closeImgModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '30px'
        },
    };
    return (
        <div className=' h-20 md:h-28 lg:h-28  w-full bg-black rounded-lg relative'>
            <img src={img} alt="" className=' w-full h-full  opacity-70 rounded-lg' />
            <AiOutlineEye onClick={openImgModal} className='lg:text-4xl text-3xl text-white absolute top-[35%]'></AiOutlineEye>
            <FiTrash2 className='lg:text-4xl text-3xl text-white absolute top-[35%] left-[60%] opacity-60'></FiTrash2>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeImgModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <div className='flex justify-end w-full'>
                        <button onClick={closeImgModal} className='text-lg border-2 px-3 py-2 mb-2 rounded-full bg-blue-400 text-white '>X</button>

                    </div>
                    <div>
                        <img src={img} alt="" className='rounded-lg min-w-[18.75rem]' />
                    </div>
                    <div className='flex justify-end my-2'>
                        <button className='bg-blue-500 w-[60%] mx-auto px-3 py-2 rounded-lg text-lg text-white my-2'>Delete</button>

                    </div>

                </div>

            </Modal>
        </div>
    );
};

export default UplodeImgCard;