import axios from "axios";


export const getnewUser=(id)=>async(dispatch)=>{
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