import axios from 'axios';

export const getPgs=(keyword='',city='',phoneNumber='')=>async(dispatch)=>{
   try {
    dispatch({
        type:"GetPGRequest"
    });

    const {data} = await axios.get(`/getpgs?keyword=${keyword}&city=${city}&phoneNumber=${phoneNumber}`);

 
  console.log(city)

    dispatch({
        type:"GetPGSuccesss",
       payload:data.pgs
    });
    
   } catch (error) {
    dispatch({
        type:"GetPGFail",
        payload:error.response.data
    });
   }
}

export const deltePgs=(id)=>async(dispatch)=>{
   try {
    dispatch({
        type:"deletePgRequest"
    });

    const {data} = await axios.delete(`/delete-pg/${id}`);

  

    dispatch({
        type:"deletePgSuccesss",
        payload:data.message
    });
    
   } catch (error) {
    dispatch({
        type:"deletePgFail",
        payload:error.response.data
    });
   }
}

export const delteOwnedPg=(pgId)=>async(dispatch)=>{
   try {
    dispatch({
        type:"deleteOwnedPgRequest"
    });

   

    console.log(pgId);


    const {data} = await axios.delete(`/delete-ownedpg?pgId=${pgId}`);

  

    dispatch({
        type:"deleteOwnedPgSuccesss",
        payload:data.message
    });
    
   } catch (error) {
    dispatch({
        type:"deleteOwnedPgFail",
        payload:error.response.data
    });
   }
}

export const createPg=(name,city,phoneNumber,images)=>async(dispatch)=>{
   try {
    dispatch({
        type:"createPgRequest"
    });

    const config = {header:{"Content-Type":"application/json"}}; 

    const {data} = await axios.post('/create-pg',{name,city,phoneNumber,images},config);


    dispatch({
        type:"createPgSuccesss",
        payload:data
    });

   } catch (error) {
    dispatch({
        type:"createPgFail",
        payload:error.response.data
    });
   }
}

export const updatePg=(name,city,phoneNumber,id,images,reason,status)=>async(dispatch)=>{
   try {
    dispatch({
        type:"UpdatePgRequest"
    });

    const config = {header:{"Content-Type":"application/json"}}; 

    const {data} = await axios.put(`/update-pg/${id}`,{name,city,phoneNumber,images,reason,status},config);


    dispatch({
        type:"UpdatePgSuccesss",
        payload:data
    });

   } catch (error) {
    dispatch({
        type:"UpdatePgFail",
        payload:error.response.data
    });
   }
}


export const approvePg=(pgId,userId,status,message)=>async(dispatch)=>{
    try {
     dispatch({
         type:"approvePgRequest"
     });
 
     const config = {header:{"Content-Type":"application/json"}}; 
 
     console.log(pgId,userId);
 
 
     const {data} = await axios.put(`/approve-reject/pg/${userId}`,{pgId,status,message},config);
 
   
 
     dispatch({
         type:"approvePgSuccesss",
         payload:data.message
     });
     
    } catch (error) {
     dispatch({
         type:"approvePgFail",
         payload:error.response.data
     });
    }
 }


export const impressionPg=(id)=>async(dispatch)=>{
    try {
     dispatch({
         type:"impressionPgRequest"
     });
 
    
     const {data} = await axios.get(`/impression/pg/${id}`);
 
   
 
     dispatch({
         type:"impressionPgSuccesss",
         payload:data
     });
     
    } catch (error) {
     dispatch({
         type:"impressionPgFail",
         payload:error.response.data
     });
    }
 }

 export const likePg=(id)=>async(dispatch)=>{
    try {
     dispatch({
         type:"likePgRequest"
     });
 
   
 
     const {data} = await axios.put(`/pg/like/${id}`);
 
 
     dispatch({
         type:"likePgSuccesss",
         payload:data
     });
 
    } catch (error) {
     dispatch({
         type:"likePgFail",
         payload:error.response.data
     });
    }
 }


 export const getSinglePg=(id)=>async(dispatch)=>{
    try {
     dispatch({
         type:"getSinglePgRequest"
     });

     const {data} = await axios.get(`/pg/${id}`);

     dispatch({
         type:"getSinglePgSuccesss",
         payload:data.pg
     });
 
    } catch (error) {
     dispatch({
         type:"getSinglePgFail",
         payload:error
     });
    }
 }


 export const getLikedPg=()=>async(dispatch)=>{
    try {
     dispatch({
         type:"getLikedPgRequest"
     });
 

 
     const {data} = await axios.get('/liked/pg');
 
 
     dispatch({
         type:"getLikedPgSuccesss",
         payload:data.likedpg
     });
 
    } catch (error) {
     dispatch({
         type:"getLikedPgFail",
         payload:error.response.data
     });
    }
 }


 export const addRatingPg=(id,rating)=>async(dispatch)=>{
    try {
     dispatch({
         type:"addRatingRequest"
     });
 
     const config = {header:{"Content-Type":"application/json"}}; 
 
     const {data} = await axios.post(`/pg/rating/${id}`,{rating},config);
 
 
     dispatch({
         type:"addRatingSuccesss",
         payload:data.message
     });
 
    } catch (error) {
     dispatch({
         type:"addRatingFail",
         payload:error.response.data
     });
    }
 }


 export const UpdateIndividualPg=(name,city,phoneNumber,id,images)=>async(dispatch)=>{
    try {
     dispatch({
         type:"UpdateIndividualPgRequest"
     });
 
     const config = {header:{"Content-Type":"application/json"}}; 
 
     const {data} = await axios.put(`/update/pg/${id}`,{name,city,phoneNumber,images},config);
 
 
     dispatch({
         type:"UpdateIndividualPgSuccesss",
         payload:data
     });
 
    } catch (error) {
     dispatch({
         type:"UpdateIndividualPgFail",
         payload:error.response.data
     });
    }
 }