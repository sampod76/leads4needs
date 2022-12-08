import * as React from 'react';
import "./homePage.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ButtonAppBar from './navBar';
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux";
import { useState, useEffect } from 'react';
import {getPgs} from "../redux/pgActions"
import "./homePage.css"
import Loader from './Loader';
import { Link } from 'react-router-dom';

export default function MediaCard() {

  const [keyword,setKeyword]=useState('');
  const [city,setCity]=useState('');
  const [phoneNumber,setPhoneNumber]=useState();

  const dispatch=useDispatch();

  const {pgs,loading} =useSelector(state=>state.pg);
  const {user} =useSelector(state=>state.user);

  const filterdPg=[];

  pgs && pgs.filter((item)=>{

    if(item.status==='approve')
    filterdPg.push(item)
  })

    useEffect(()=>{
        dispatch(getPgs(keyword,city));
    }, [dispatch,keyword,city])

  return  (

<>


<input
            type="text"
            placeholder="Search a pg ...Name"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            /> 

            <input
            type="text"
            placeholder="Search a pg by city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            /> 

            <input
            type="text"
            placeholder="Search a pg by phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            /> 




    <div className='pg-container'>

        <br/>


      


        {filterdPg.map((myPg,i)=>(

                <Card sx={{ maxWidth: 345 }}>

                    <Link to={`/view/${myPg._id}`}>

                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        PgName:   {myPg.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         Pgcity: {myPg.city}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                         PgPhoneNumber: {myPg.phoneNumber}
                        </Typography>



                        {user &&    <Typography variant="body2" color="text.secondary">
                           PgImpression:   {myPg.impression}
                        </Typography> }

                     

                        </CardContent>
    
                      </Link>
                </Card>
        ))}
   
    </div>

    </>
  );
}