import React,{useState,useEffect} from 'react'
import { getAllUsers } from '../../redux/userActions';
import "./searchUser.css"
import {useSelector,useDispatch} from "react-redux";

const SearchUser = () => {

    const dispatch =useDispatch();




    const [keyword,setKeyword]=useState('');
    const [city,setCity]=useState('');

    

    


    useEffect(()=>{
        
        dispatch(getAllUsers(keyword,city));
      },[dispatch,keyword,city])


  return (
    <div className="all-courses-container">
          <h3>Search User</h3>
        
            <input
            type="text"
            placeholder="Search a Product ..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            /> 

    </div>
  )
}

export default SearchUser