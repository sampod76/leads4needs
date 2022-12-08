import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/userActions";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";


const UpdateUser = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const {id} =useParams();

  const submitHanlder = (e) => {
    e.preventDefault();
     dispatch(editUser(name, city,phoneNumber,id));
  };

  return (
    <div className="form-conatiner">
      <form className="form" onSubmit={submitHanlder}>
        <h2 className="pg-heading">Update User</h2>

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
            placeholder="enter new phonenumber"
            className="pg-form-child pg-form-text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
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

export default UpdateUser;
