import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePg } from "../../redux/pgActions";
import { Button, Dialog } from "@material-ui/core";

const UpdatePg = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [dialogOpener, setDialogOpener] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);


  const [reason, setReason] = useState("");
  const [action, setAction] = useState('approve');

  const dispatch = useDispatch();
  const { id } = useParams();

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

  const onOpenHandler = (index) => {
    setDialogOpener(!dialogOpener);
    setImageIndex(index);
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    const myImages = [];

    images.forEach((image) => {
      myImages.push(image);
    });

    if (myImages.length > 8) {
      alert("images should not exceed more than 8");
    } else {
      dispatch(updatePg(name, city, phoneNumber, id, images,reason,action));
    }
  };

  return (
    <div className="form-conatiner">
      <form className="form" onSubmit={submitHanlder}>
        <h2 className="pg-heading">Update pg</h2>

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

        <div>
          <label htmlFor="reason">accept or reject </label>

          <select
            name="reason"
            id="reason"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="approve">approve</option>
            <option value="reject">reject</option>
          </select>
        </div>
        <div>
          <label htmlFor="reason">Choose a reason </label>

          <select
            name="reason"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="bad room conditions">bad room conditions</option>
            <option value="image not good">image not good</option>
            <option value="cost not afforable">cost not afforable</option>
          </select>
        </div>

        <Dialog
          open={dialogOpener}
          onClose={() => setDialogOpener(!dialogOpener)}
        >
          <div className="DialogBox">
            <img src={imagesPreview[imageIndex]} alt="Product Preview" />
          </div>
        </Dialog>

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
            <Button onClick={() => onOpenHandler(index)} key={index}>
              <img src={image} alt="Product Preview" />
            </Button>
          ))}
        </div>

        <input
          type="submit"
          id="createProductBtn"
          className="send-inquiry-submit"
        />
      </form>
    </div>
  );
};

export default UpdatePg;
