import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Avatar from "react-avatar-edit";
import { useSelector, useDispatch } from "react-redux";
import { getMyProfileImpressionCount, logoutUser, updateUserProfile } from "../redux/userActions";
import { getLikedPg, getPgs } from "../redux/pgActions";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import {Helmet} from "react-helmet";


export default function UserProfile({ user }) {
  const navigate = useNavigate();
  const [src, setSrc] = useState("");
  const [preview, setPreview] = useState("");


  const { pgs} = useSelector((state) => state.pg);
  const { impression,loading} = useSelector((state) => state.user);

  console.log(pgs);

  

  const approvedPg =
    pgs &&
    pgs.filter((item) => {
        console.log(item)
      if (item.userId === user && user._id  && item.status==='approve') {
        return item;
      }
    });






  const dispatch = useDispatch();

  const onClose = (view) => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const changePhoto = () => {
    setSrc(preview);
  };
  const uploadPhoto = () => {
    dispatch(updateUserProfile(src));
  };

  const handleEdit = () => {
    navigate("/edit");
  };

const logoutHandler=async()=>{
 await dispatch(logoutUser());
  alert('logouthogeya')
}

  useEffect(() => {
    dispatch(getPgs());
    dispatch(getLikedPg());
    dispatch(getMyProfileImpressionCount());
  }, [dispatch]);

  if (!user) {
    return <div>Login First</div>;
  } else {
    return loading? <Loader/> : (
      <div>

             <Helmet>
                <meta charSet="utf-8" />
                <title>Profile :-{user && user.name}</title>

                <meta
                  property="og:url"
                  content={`http://localhost:3000/app`}
                />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content={`profile-${user && user.name} `}
                />
                <meta
                  property="og:description"
                  content="How much does culture influence creative thinking?"
                />
                <meta
                  property="og:image"
                  content="https://asset.vg247.com/albert-wesker-dead-by-daylight.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/albert-wesker-dead-by-daylight.jpg"
                />
                <link rel="icon" href="https://asset.vg247.com/albert-wesker-dead-by-daylight.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/albert-wesker-dead-by-daylight.jpg" />
            </Helmet>




        <h1>name : {user.name}</h1>
        <h2>city : {user.city}</h2>
        <h3>job : {user.job} </h3>

        <Typography gutterBottom variant="h5" component="div">
                impression:{impression}
         </Typography>

        <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
          src={src}
        />
        {preview && <img src={preview} alt="Preview" />}
        {src && <img src={src} alt="Preview" />}
        <Button onClick={changePhoto}>save</Button>
        <Button onClick={uploadPhoto}>uploadPhoto</Button>

        <Button onClick={handleEdit}>
          Edit Profile
          <EditIcon />
        </Button>
        <br></br>
        <Button color="warning" onClick={logoutHandler}>
          Logout
        </Button>

        <div className="display-pg">
          <h4> Your registerd pg</h4>
          
          <div style={{
            display:'flex',
            width:'50%',
            justifyContent:'space-around'
          }}>

          
           { user.ownedPGSList && user.ownedPGSList.map((myPg, i) => (
            <Card sx={{ maxWidth: 345 }} >
              <Link to={`/view/${myPg._id}`}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {myPg.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {myPg.city}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {myPg.phoneNumber}
                  </Typography>


                  <Typography variant="body2" color="text.secondary">
                    {myPg.impression}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
 
        <div className="display-pg">
          <h4> Your liked pg</h4>
          
          <div style={{
            display:'flex',
            width:'50%',
            justifyContent:'space-around'
          }}>

          
           { pgs  && pgs.map((myPg, i) => (
            <Card sx={{ maxWidth: 345 }} >
              <Link to={`/view/${myPg._id}`}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {myPg.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {myPg.city}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {myPg.phoneNumber}
                  </Typography>


                  <Typography variant="body2" color="text.secondary">
                    {myPg.impression}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

      </div>
 


        </div>
      </div>
    );
  }
}
