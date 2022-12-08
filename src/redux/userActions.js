import axios from 'axios';

export const getAllUsers=(keyword='',city='')=>async(dispatch)=>{
   try {
    dispatch({
        type:"getAllUsersRequest"
    });

    const {data} = await axios.get(`/allusers?keyword=${keyword}&city=${city}`);

    dispatch({
        type:"getAllUsersSuccesss",
        payload:data
    });
    
   } catch (error) {
    dispatch({
        type:"getAllUsersFail",
        payload:error.response.data
    });
   }
}


export const getUser=(id)=>async(dispatch)=>{
   try {
    dispatch({
        type:"getUserRequest"
    });

    const {data} = await axios.get(`/getuser/${id}`);

    dispatch({
        type:"getUserSuccesss",
        payload:data
    });
    
   } catch (error) {
    dispatch({
        type:"getUserFail",
        payload:error.response.data
    });
   }
}

export const updateUser=(id,role)=>async(dispatch)=>{
   try {
    dispatch({
        type:"updateUserRequest"
    });

    const config = {header:{"Content-Type":"application/json"}}; 

    const {data} = await axios.put(`/upateuser/${id}`,{role},config);

  
  

    dispatch({
        type:"updateUserSuccesss",
        payload:data
    });
    
   } catch (error) {
    dispatch({
        type:"updateUserFail",
        payload:error.response.data
    });
   }
}


export const getmyprofile=()=>async(dispatch)=>{
   try {
    dispatch({
        type:"getMyProfileRequest"
    });

    const config = {header:{"Content-Type":"application/json"}}; 

    const {data} = await axios.get('/getmyprofile');

  
  

    dispatch({
        type:"getMyProfileSuccesss",
        payload:data
    });
    
   } catch (error) {
    dispatch({
        type:"getMyProfileFail",
        payload:error.response.data
    });
   }
}

export const editUser=(name,city,phoneNumber,id)=>async(dispatch)=>{
    try {
     dispatch({
         type:"EditUserRequest"
     });

     console.log(name,city,phoneNumber)
 
     const config = {header:{"Content-Type":"application/json"}}; 
     
 
     const {data} = await axios.put(`/update/user/${id}`,{name,city,phoneNumber},config);
 
 
     dispatch({
         type:"EditUserSuccesss",
         action:data
     });
 
    } catch (error) {
     dispatch({
         type:"EditUserFail",
         action:error.response.data
     });
    }
 }

 export const deleteUser=(userId)=>async(dispatch)=>{
    try {
     dispatch({
         type:"deleteUserRequest"
     });
 
     const {data} = await axios.delete(`/user/delete?userId=${userId}`);
 
     
   
 
     dispatch({
         type:"deleteUserSuccesss",
         payload:data
     });
     
    } catch (error) {
     dispatch({
         type:"deleteUserFail",
         payload:error.response.data
     });
    }
 }


 export const updateUserProfile=(avatar)=>async(dispatch)=>{
    try {
     dispatch({
         type:"updateUserProfileRequest"
     });

     const config = {header:{"Content-Type":"application/json"}}; 
 
     const {data} = await axios.put(`/update/profile/photo`,{avatar},config);
 
     
   
 
     dispatch({
         type:"updateUserProfileSuccesss",
         payload:data
     });
     
    } catch (error) {
     dispatch({
         type:"updateUserProfileFail",
         payload:error.response.data
     });
    }
 }

 export const getMyProfileImpressionCount=()=>async(dispatch)=>{
    try {
     dispatch({
         type:"getMyProfileImpressionRequest"
     });
 
     const config = {header:{"Content-Type":"application/json"}}; 
 
     const {data} = await axios.get('/impression/count');
 
   
   
 
     dispatch({
         type:"getMyProfileImpressionSuccesss",
         payload:data
     });
     
    } catch (error) {
     dispatch({
         type:"getMyProfileImpressionFail",
         payload:error.response.data
     });
    }
 }


 export const logoutUser=()=>async(dispatch)=>{
    try {
     dispatch({
         type:"logoutRequest"
     });
 

 
     const {data} = await axios.get('/logout');
 
   
   
 
     dispatch({
         type:"logoutSuccesss",
         payload:data
     });
     
    } catch (error) {
     dispatch({
         type:"logoutFail",
         payload:error.response.data
     });
    }
 }