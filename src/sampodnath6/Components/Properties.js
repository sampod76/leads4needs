import React from "react";
import Card from "./Card";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import From from "./From";

const Properties = ({openRatingModal}) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
   

    <div className=" md:w-[80%] mx-auto  ">
      <div className="flex justify-between mt-2 w-80 md:w-[90%] mx-auto lg:w-full">
        <h1 className="text-2xl font-bold">Properties</h1>
        <button  onClick={openModal} className="mr-1">
          <span className="mr-3">+ </span> Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lgg:grid-cols-3 gap-8 md:m-8 lg:m-0 my-2">
        <Card openRatingModal={openRatingModal}></Card>
      </div>
      <>
     

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                 <From></From>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    </div>
   
  );
};

export default Properties;
