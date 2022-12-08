import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPg } from "../redux/pgActions";
import "./createPg.css";
import { Button,Dialog} from '@material-ui/core'
// import imageCompression from 'browser-image-compression';



const CreatePg = () => {
  const [name, setName] = useState("");
  const [dialogOpener, setDialogOpener] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();


  // const createProductImagesChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   setImages([]);
  //   setImagesPreview([]);

  //   const options = {
  //     maxSizeMB: 2,
  //     maxWidthOrHeight: 1920,
  //     useWebWorker: true
  //   }


    // try {



    //   // files.forEach(async(file) => {
    //   //   const reader = new FileReader();
    //   //   // const compressedFile = await imageCompression(file, options);

    //   //   console.log(compressedFile)

        
  
    //   //   reader.onload = () => {
    //   //     if (reader.readyState === 2) {
    //   //       setImagesPreview((old) => [...old, reader.result]);
    //   //       setImages((old) => [...old, reader.result]);
    //   //     }
    //   //   };
  
    //   //   reader.readAsDataURL(compressedFile);
    //   // });
      
    // } catch (error) {
      
    // }



  // };


  const onOpenHandler =(index)=>{
       setDialogOpener(!dialogOpener)
       setImageIndex(index);
  }

  const submitHanlder = (e) => {
    e.preventDefault();

        const myImages=[]

        images.forEach((image)=>{
          myImages.push(image)
        })

        if(myImages.length>8){
          alert('images should not exceed more than 8')
        }else{
          dispatch(createPg(name, city, phoneNumber,images));
        }


    
  };

  return (
    <div className="form-conatiner">
      <form className="form" onSubmit={submitHanlder}>
        <h2 className="pg-heading">Add pg</h2>

        <div>
          <input
            type="text"
            placeholder="name"
            className="pg-form-child pg-form-text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="enter your city"
            className="pg-form-child pg-form-text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="phone no. with country code"
            className="pg-form-child pg-form-text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <Dialog open={dialogOpener} onClose={()=>setDialogOpener(!dialogOpener)}>
            <div className="DialogBox">
                <img  src={imagesPreview[imageIndex]} alt="Product Preview" />
            </div>
        </Dialog>



{/*   

        <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={createProductImagesChange}
                  multiple
                />
              </div>
  
              <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (

                <Button onClick={()=>onOpenHandler(index)} key={index}>
                    <img  src={image} alt="Product Preview" />
                </Button>

                  
                ))}
              </div> */}




        <input
          type="submit"
          id="createProductBtn"
          className="send-inquiry-submit"
        />
      </form>
    </div>
  );
};

export default CreatePg;
