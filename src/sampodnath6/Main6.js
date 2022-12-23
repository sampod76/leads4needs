import React from 'react';
import Banner from './Components/Banner';
import Properties from './Components/Properties';
import Modal from 'react-modal';
import Emoji from './Components/Emoji/Emoji';
import { toast, Toaster } from 'react-hot-toast';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px'
    },
};

const Main6 = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openRatingModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    const successfullRating = () => {
        // console.log('first')
        toast.success('Successfully rating!')
        closeModal()
    }

    return (
        <div className='font-Poppins'>
            <Banner openRatingModal={openRatingModal}></Banner >
            <Properties openRatingModal={openRatingModal}></Properties>
            <div>

                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="md:h-[27rem] md:w-96 w-full h-full ">
                        <div className="flex justify-between">
                            <h3> </h3>
                            <button onClick={closeModal} className='border-2 rounded-full px-3 py-2 text-2xl bg-[#7065F0] text-white font-bold'>X</button>
                        </div>
                        <p className='mt-2 font-bold ml-1 text-xl'>Q.How much rating you give <span className='text-[#7065F0]'>Sampod narayen </span> PG ?</p>
                        <Emoji></Emoji>

                        <div className='flex justify-end gap-2 mr-3'>
                            <button onClick={successfullRating} className='bg-[#7065F0] rounded-md p-2 px-4 text-white'>Submit</button>

                        </div>

                    </div>
                </Modal>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Main6;