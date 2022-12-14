import React from "react";
import Card from "./Card";

const Properties = () => {
  return (
    <div className=" lg:w-[1224px] mx-auto ">
      <div className="flex justify-between mt-2 w-80 mx-auto lg:w-full">
        <h1 className="text-2xl font-bold">Properties</h1>
        <button className="btn bg-indigo-500">
          <span className="mr-3">+ </span> Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:m-8 lg:m-0 my-2">
        <Card></Card>
      </div>
    </div>
  );
};

export default Properties;
