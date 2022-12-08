import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { Button, Dialog } from "@material-ui/core";

const Copied = () => {
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      {/* navbar */}
      <div className=" flex py-3  ">
        <h5 className="text-[#262064] font-poppins font-semibold px-32">
          Leads4Needs
        </h5>
        <div className=" ml-[452px] font-poppins text-[12px]">
          <button className="  mr-16">Manage Property</button>
          <button className=" mr-10">Blog</button>
          <button className=" bg-[#7065F0] px-4 py-[6px] rounded-md text-white">
            Log In
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-32">
          {/* left card */}
          <div className="h-[400px]  p-4 w-[420px] ml-28 rounded-md bg-[#7065F0]">
            <h5 className=" font-poppins text-[12px] text-white font-medium">
              PGWARS
            </h5>
            <div className=" mt-3 flex gap-3">
              <img
                src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className=" h-[80px] rounded-full w-[80px]"
                alt=""
              />
              <div className=" mt-4 ">
                <h5 className=" font-poppins font-semibold text-white text-[20px]">
                  Bruce Kent
                </h5>
                <p className=" font-poppins  text-white text-[15px]">
                  Software Engineer
                </p>
              </div>
            </div>
            <hr className=" scroll-mt-2 text-white" />
            <div className="flex gap-3 ">
              <IoIosCall className="text-white h-6 w-6" />
              <span className=" font-semibold font-poppins mt-1 text-[12px] text-white">
                9876543210 (Whatsapp)
              </span>
            </div>

            <div className="flex gap-3 mt-1">
              <AiOutlineMail className="text-white h-5 w-5" />
              <span className=" font-semibold font-poppins mt-1 text-[12px] text-white">
                brucekent@gmail.com
              </span>
            </div>

            <div className="flex gap-3 mt-1">
              <TiLocation className="text-white h-6 w-6" />
              <span className=" font-semibold font-poppins mt-1 text-[12px] text-white">
                Los Angeles, USA
              </span>
            </div>

            <div className=" mt-5 flex gap-4">
              <h5 className="text-[10px] font-poppins font-semibold text-white">
                Approved Businesses
              </h5>
              <h5 className="text-[10px] font-poppins font-semibold text-white">
                Views
              </h5>
            </div>
            <div className=" flex gap-32">
              <h5 className="text-[10px] font-poppins font-semibold text-white">
                5
              </h5>
              <h5 className="text-[10px] font-poppins font-semibold text-white">
                304
              </h5>
            </div>
          </div>

          <div className="  ">
            <h5 className=" font-poppins text-[30px] py-3 font-semibold">
              Add PG
            </h5>
            <div className="mt-2">
              <div className=" ">
                <div className="flex flex-col ">
                  <label
                    htmlFor="Pg name"
                    className=" font-poppins text-[#5B5B5B] text-[15px]"
                  >
                    {" "}
                    PG Name
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className=" h-8 w-[420px] rounded-md border-[1.5px] border-[#E4E4E4]"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="Pg name"
                    className=" font-poppins text-[#5B5B5B] text-[15px]"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className=" h-8 w-[420px] rounded-md border-[1.5px] border-[#E4E4E4]"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="Pg name"
                    className=" font-poppins text-[#5B5B5B] text-[15px]"
                  >
                    {" "}
                    PG Address
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className=" h-8  w-[420px] rounded-md border-[1.5px] border-[#E4E4E4]"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="Pg name"
                    className=" font-poppins text-[#5B5B5B] text-[15px]"
                  >
                    {" "}
                    City
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className=" h-8  w-[420px] rounded-md border-[1.5px] border-[#E4E4E4]"
                  />
                </div>
                <div className="font-poppins text-[#5B5B5B] mt-3">
                  <label htmlFor="">Gender</label>
                  <div className=" mt-1  flex">
                    <span className="bg-[#F1F0FE] border-1 border-[#7065F0] font-poppins font-semibold text-[12px] rounded-md text-[#7065F0] px-12 py-2">
                      Male
                    </span>
                    <span className=" border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B]  px-12 py-2">
                      Female
                    </span>
                    <span className=" border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] px-12 py-2">
                      Unisex
                    </span>
                  </div>
                </div>
                <div className="font-poppins text-[#5B5B5B] mt-3">
                  <label htmlFor="">Types of Room Sharing</label>
                  <div className=" mt-1  flex">
                    <span className="bg-[#F1F0FE] border-1 border-[#7065F0] font-poppins font-semibold text-[12px] rounded-md text-[#7065F0] px-4 py-2">
                      1 Room
                    </span>
                    <span className=" border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B]  px-4 py-2">
                      2 Room
                    </span>
                    <span className=" border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] px-4 py-2">
                      3 Room
                    </span>
                    <span className=" border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] px-4 py-2">
                      4 Room
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className=" font-poppins font-semibold text-[17px] -mb-3">
                    Room Sharing Price
                  </h5>
                  <hr className="text-[#7065F0]" />
                  <div className="flex gap-4">
                    <div className="flex flex-col ">
                      <label
                        htmlFor="Pg name"
                        className=" font-poppins font-semibold text-[#5B5B5B] text-[14px]"
                      >
                        {" "}
                        Single Room Price
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className=" h-8 w-52 mt-2 rounded-md border-[1.5px] border-[#E4E4E4]"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label
                        htmlFor="Pg name"
                        className=" font-poppins font-semibold text-[#5B5B5B] text-[14px]"
                      >
                        {" "}
                        Double Room Price
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className=" mt-2 h-8 w-52 rounded-md border-[1.5px] border-[#E4E4E4]"
                      />
                    </div>
                  </div>

                  <div className="flex mt-3 gap-4">
                    <div className="flex flex-col ">
                      <label
                        htmlFor="Pg name"
                        className=" font-poppins font-semibold text-[#5B5B5B] text-[14px]"
                      >
                        {" "}
                        Triple Room Price
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className=" mt-2 h-8 w-52 rounded-md border-[1.5px] border-[#E4E4E4]"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label
                        htmlFor="Pg name"
                        className=" font-poppins font-semibold text-[#5B5B5B] text-[14px]"
                      >
                        {" "}
                        Four Room Price
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className=" mt-2 h-8 w-52 rounded-md border-[1.5px] border-[#E4E4E4]"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <h5 className=" font-poppins text-[15px] text-[#5B5B5B] font-semibold">
                      Upload Images
                    </h5>

                    <div className="flex gap-3">
                      <div className=" h-52 w-48 border-[1.4px] rounded-md border-[#E4E4E4]">
                        <div className=" ">
                          {/* <AiOutlinePlus className='absolute -mb-16s h-10  w-10'/> */}
                          <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={createProductImagesChange}
                            multiple
                          />
                        </div>
                      </div>
                      <div className=" h-52 w-48 border-[1.4px] rounded-md border-[#F1F0FB]">
                        <img
                          src={imagesPreview[0]}
                          className=" rounded-tl-md rounded-tr-md h-[50%] w-full "
                          alt=""
                        />

                        <div className="p-3">
                          <div className="h-5 w-16 rounded-md bg-[#7065F0]">
                            {" "}
                          </div>
                          <div className="h-3 mt-1 w-16 rounded-lg bg-black">
                            {" "}
                          </div>
                          <div className="h-3 mt-1 w-32 rounded-lg bg-[#878787] -mb-2">
                            {" "}
                          </div>
                          <hr className="text-[#c3c0dd]" />

                          <div className="flex gap-2">
                            <div className="h-[10px] w-[10px] -mt-2 rounded-full bg-[#7065F0] "></div>
                            <div className="h-[10px] w-[35px] -mt-2 rounded-sm bg-[#878787] "></div>
                            <div className="h-[10px] w-[10px] -mt-2 rounded-full bg-[#7065F0] "></div>
                            <div className="h-[10px] w-[35px] -mt-2 rounded-sm bg-[#878787] "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className=" h-20 p-2 rounded-md border-[#D9D9D9] border-[1.4px]">
                      <div className="flex gap-2">
             
                      <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]"></div>

                                                
                        {imagesPreview.map((image, index) => (
                            <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]" key={index}>
                                <img
                                src={image}
                                className="h-14 w-16 rounded-md"
                                />
                            </div>
                            ))}     

                        {/* <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]"></div>
                        <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]">
                          <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="h-14 w-16 rounded-md"
                          />
                        </div>
                        <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]">
                          <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="h-14 w-16 rounded-md"
                          />
                        </div>
                        <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]">
                          <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="h-14 w-16 rounded-md"
                          />
                        </div>
                        <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]">
                          <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="h-14 w-16 rounded-md"
                          />
                        </div>
                        <div className="h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]">
                          <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="h-14 w-16 rounded-md"
                          />
                        </div> */}







                      </div>
                    </div>

                    <div className="flex justify-end mt-2">
                      <button className="bg-[#7065F0] font-poppins text-[12px] px-5 py-[10px] font-semibold mr-2 rounded-md text-white  ">
                        Reject
                      </button>
                      <button className="bg-[#7065F0] font-poppins text-[12px] px-5 py-[10px]  font-semibold rounded-md text-white ">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copied;
