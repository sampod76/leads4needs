import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import "./AllPGList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteUser, getAllUsers, updateUser } from "../../redux/userActions";

const AllUsersList = ({}) => {

  const [keyword,setKeyword]=useState('');
  const [pgLength,setPgLength]=useState();
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const {users} =useSelector(state=>state.user);

  const deleteHandler = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getAllUsers());
  };

  const rolechangeHandler = async (id, valuedRole) => {
    dispatch(updateUser(id, valuedRole));
    await dispatch(getAllUsers());
  };


  const columns = [
    { field: "id", headerName: "userId", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 0.5,
    },
    {
      field: "ownedpgs",
      headerName: "OwnedPgs",
      type: Number,
      minWidth: 150,
      flex: 0.3,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link
              to={`/admin/user/ownedpg/${params.getValue(params.id, "id")}`}
            >
              {params.value}
            </Link>
          </Fragment>
        );
      },
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "role") === "admin"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },

    {
      field: "Editrole",
      flex: 0.3,
      headerName: "EditRole",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        // params.getValue(setUserId(params.id,'id'))
        return (
          <Fragment>
        
            <input
              type="radio"
              id="html"
              name="fav_language"
              value={"admin"}
              onChange={(e) =>
                rolechangeHandler(
                  params.getValue(params.id, "id"),
                  e.target.value
                )
              }
            />
            <label htmlFor="html">Admin</label>
            <br></br>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value={"moderate"}
              onChange={(e) =>
                rolechangeHandler(params.getValue(params.id, "id"), "Moderate")
              }
            />
            <label htmlFor="html">Moderate</label>
            <br></br>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value={"user"}
              onChange={(e) =>
                rolechangeHandler(params.getValue(params.id, "id"), "User")
              }
            />
            <label htmlFor="html">User</label>
            <br></br>
            {/* <button onClick={()=>rolechangeHandler(params.getValue(params.id,'id'))} >updaterole</button> */}
          </Fragment>
        );
      },
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
            <Link to={`/admin/update/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() => deleteHandler(params.getValue(params.id, "id"))}
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

    users &&
    users.forEach((item) => {

      let approvedPg=0;

      item.ownedPGS.forEach((item)=>{
          if(item.status==='approve'){
            approvedPg++;
          }
      })


      rows.push({
        id: item._id,
        name: item.name,
        role: item.role,
        ownedpgs:approvedPg,
      });
    });


    useEffect(()=>{
        
      dispatch(getAllUsers(keyword,pgLength));
    },[dispatch,keyword,pgLength])

  return (

    <>

    <div className="all-courses-container">
          <h3>Search User</h3>
        
            <input
            type="text"
            placeholder="Search a user by name ..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            /> 

            <input
            type="text"
            placeholder="Search a user by pg number..."
            value={pgLength}
            onChange={(e) => setPgLength(e.target.value)}
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

export default AllUsersList