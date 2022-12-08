import React,{useEffect}from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getnewUser } from '../redux/approveaction';

function RetryingUser() {

    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(getnewUser("636a23f9806a1f1b879eebcd"));
    },[dispatch])
    
  return (
    <div>retryingUser</div>
  )
}

export default RetryingUser