import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addRatingPg, getSinglePg, impressionPg, likePg } from "../redux/pgActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ViewPg = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { pg, loading } = useSelector((state) => state.pg);

  const [rating, setRating] = useState(0);

  const likeHandler = async () => {
    await dispatch(likePg(id));
    await dispatch(getSinglePg(id));
    alert("liked pg");
  };

  const submitHanlder =async(e)=>{
     e.preventDefault();
    await dispatch(addRatingPg(id,rating));
    dispatch(getSinglePg(id));
  }


  useEffect(() => {
    dispatch(impressionPg(id));
    dispatch(getSinglePg(id));
  }, [dispatch]);

  return loading === undefined || loading === true ? (
    <Loader />
  ) : (
    <div className="pg-view">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`pg-${pg && pg.name} `}</title>
        <meta
          property="og:url"
          content={`http://localhost:3000/view/${id}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`pg-${pg && pg.name} `}
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content={`${pg && pg.frontImage}`}
        />

        <link
          rel="icon"
          href={`${pg && pg.frontImage}`}
        />
      </Helmet>

      <h1>name : {pg && pg.name}</h1>
      <h2>city : {pg && pg.city}</h2>
      <h3>phoneNumber : {pg && pg.phoneNumber} </h3>

      

      <Typography gutterBottom variant="h5" component="div">
        impression:{pg && pg.impression}
      </Typography>


      <Link to={`/view/edit/${id}`}>
          Edit pg
          <EditIcon />
        </Link>


      <Typography gutterBottom variant="h5" component="div">
        rating:{pg && pg.rating}
      </Typography>

      <Button onClick={likeHandler}>likepg</Button>

      <div className="add-rating">
        <h3>add review</h3>

        <form className="form" onSubmit={submitHanlder}>

        <div>
          <input
            type="text"
            placeholder=""
            className="pg-form-child pg-form-text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>


        <input
          type="submit"
          id="createProductBtn"
          className="send-inquiry-submit"
        />



        </form>
        
         </div>



    </div>
  );
};

export default ViewPg;
