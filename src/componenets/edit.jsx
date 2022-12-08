import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit(){
    const navigate = useNavigate();
    const [formData, setForm] = useState({
        name:"",
        job:"",
        city:""
    })
    const setData = (e) =>{
        const {name, value} = e.target;
        setForm({...formData, [name]:value});
    }

    const getData = async() =>{
        //console.log('sending request');
        const resp = await axios({
            method : 'GET',
            url : '/help'
        });
        //console.log(resp.data);
        //console.log(resp.data.user);
        setForm(resp.data.user);
    }

    const updateData = async(e)=>{
        e.preventDefault();
        console.log("formData for updating" , formData);
        const response = await axios.patch('/update', {'job': formData.job, 'city' : formData.city})
        if(response.data !== null){
            alert('Updated Successfully');
            navigate('/app');
        }
        else{
            alert("Couldn't update data");
        }
        
    }
   

    

    useEffect(()=>{
        getData();
    }, []);

    
    return(
        <form>
            <h1 style={{textAlign : 'center'}}>Edit Profile</h1>
            <br/>
            <div class="row">
                <div class="col">
                    <input type="text" value = {formData.name} onChange={setData} name="name" class="form-control" placeholder="name"></input>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col">
                    <input type="text" value = {formData.city}onChange={setData} name="city" class="form-control" placeholder="city"></input>
                </div>
                <div class="col">
                    <input type="text" value = {formData.job}onChange={setData} name="job" class="form-control" placeholder="job"></input>
                </div>
            </div>
            <br></br>
            <button type="submit" onClick={updateData} class="btn btn-primary">Submit</button>
        </form>
    )
}
