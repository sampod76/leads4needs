import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';
import "./AllPGList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Button } from '@material-ui/core'
import {useSelector,useDispatch} from "react-redux";
import { useState, useEffect } from 'react';
import {getPgs} from "../../redux/pgActions"
import {deltePgs} from "../../redux/pgActions"
import { getUser } from '../../redux/userActions';


const PendingPg = ({users}) => {

  const [keyword,setKeyword]=useState('');
  const [city,setCity]=useState('');







    const deleteHandler =async(id)=>{
     await dispatch(deltePgs(id));
           dispatch(getPgs(id))
    }



    const dispatch=useDispatch();

    const {pgs,loading} =useSelector(state=>state.pg);

    const columns=[

        { field: "id", headerName: "pgId", minWidth: 200, flex: 0.5 },
    
        {
          field: "name",
          headerName: "Name",
          minWidth: 350,
          flex: 0.5,
        },
        {
          field: "city",
          headerName: "City",
          minWidth: 150,
          flex: 0.3,
        },
    
        {
          field: "status",
          headerName: "Status",
          type: "number",
          minWidth: 270,
          flex: 0.5,
        },

  
        {
          field: "actions",
          flex: 0.3,
          headerName: "Actions",
          minWidth: 150,
          sortable: false,
          renderCell: (params) => {
            return (
              <Fragment>
                     <Button
                >

               <Link to={`/admin/update/pg/${params.getValue(params.id, "id")}`}>
                  <EditIcon />
                </Link>
               
                </Button>
         
    
                <Button
                  onClick={() =>
                    deleteHandler(params.getValue(params.id, "id"))
                  }
                >
                  <DeleteIcon />
                </Button>
              </Fragment>
            );
          },
        },
    

    ];
    const rows = [];

      pgs &&
      pgs.forEach((item) => {

        if(item.status==="pending"){
            rows.push({
              id: item._id,
              name: item.name,
              city:item.city,
              status:item.status
    
            });
        }

 
      });

      useEffect(()=>{
        dispatch(getPgs(keyword,city));
    }, [dispatch,keyword,city])

  return (

    <>
      <div className="all-courses-container">
          <h3>Search pg</h3>
        
            <input
            type="text"
            placeholder="Search a pg ..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            /> 

            <input
            type="text"
            placeholder="Search a pg by city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            /> 

    </div>
   
        <div className="course-list-grid">
              <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
    </div>

   </>
  )
}

export default PendingPg;