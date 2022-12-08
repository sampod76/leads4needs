import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import "./Approvereject.css"
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/userActions";
import { darkScrollbar } from "@mui/material";
import { approvePg } from "../../redux/pgActions";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";


const ApproveReject = () => {


  const [reason, setReason] = useState("");
  const [action, setAction] = useState('choose reject or approve');

  const dispatch = useDispatch();
  const {id,userId}=useParams();

  const submitHanlder = (e) => {
    e.preventDefault();

  
    dispatch(approvePg(id,userId,action,reason));

    // dispatch(editUser(name, city,phoneNumber,id));
  };

  // const rejectHandler =()=>{
  //     dispatch(approvePg(id,userId,"reject"))
  // }

  // const approveHandler =()=>{
  //   dispatch(approvePg(id,userId,"approved"))
  // }



  return (
    <div className="form-conatiner">
    <form className="form" onSubmit={submitHanlder}>


        <h2 className="pg-heading">Approve or reject  pg</h2>
{/* 
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
        </div> */}


     

                <label htmlFor="reason">accept or reject </label>

                <select name="reason" id="reason"  value={action} onChange={(e)=>setAction(e.target.value)}>
                  <option value="approve">approve</option>
                  <option value="reject">reject</option>
             
                </select>

                <label htmlFor="reason">Choose a reason </label>

                <select name="reason" id="reason" value={reason} onChange={(e)=>setReason(e.target.value)}>
                  <option value="bad room conditions">bad room conditions</option>
                  <option value="image not good">image not good</option>
                  <option value="cost not afforable">cost not afforable</option>
                </select>
       
         
        

       

        <button id="createProductBtn" type="submit" >submit</button>
       {/* <button id="createProductBtn" type="submit" onClick={approveHandler} >approve</button> */}
        </form>
    </div>
  );
};

export default ApproveReject;
