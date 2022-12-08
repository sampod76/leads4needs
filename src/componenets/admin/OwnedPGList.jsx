import React,{Fragment,useEffect} from 'react'
import { Link,useParams} from 'react-router-dom';
import "./AllPGList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Button } from '@material-ui/core'
import {useSelector,useDispatch} from "react-redux";
import {delteOwnedPg} from "../../redux/pgActions"
import {getUser} from "../../redux/userActions"



const OwnedPGList = ({user}) => {

  const dispatch=useDispatch();
  const {id} =useParams();

  const {specialUser} =useSelector(state=>state.user);

  

  const deleteHandler =async(pgId)=>{

     await dispatch(delteOwnedPg(pgId,id));
      dispatch(getUser(id));
  }

  const rows=[];

  specialUser &&
  specialUser.ownedPGS.forEach((item) => {
     rows.push({
       id:item._id,
       name:specialUser.name,
       status:item.status
     });
   });

 
  const columns=[

    {
      field: "id",
      headerName: "OwnedPgs",
      minWidth: 150,
      flex: 0.3,
     
    },
    {
      field: "name",
      headerName: "PGOwnerName",
      minWidth: 350,
      flex: 0.5,
    },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.3,
 
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
            <Link to={`/admin/view-profile/${params.getValue(params.id, "id")}/${specialUser._id}`}>
              <EditIcon />
            </Link>

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






    useEffect(()=>{
      dispatch(getUser(id));
    },[dispatch]);




  return (
      <div className="course-list-grid">
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      disableSelectionOnClick
      autoHeight
       getRowId={(row)=>row.name+row.status+row.id}
    />
  </div>
  )
}

export default OwnedPGList