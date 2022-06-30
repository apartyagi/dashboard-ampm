import "./allusers.scss";
import { DataGrid } from "@mui/x-data-grid";
import React,{useEffect} from "react";
import {userRows,userColumns} from "../../../temp/ListofAllUsers"
import { Link } from "react-router-dom";
import { useState } from "react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";

const Allusers = () => {

  useEffect(() => {
      
  }, [])
  

  const [data, setData] = useState(userRows);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <div className="cellAction">
            <Link to="/users/use" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div>
            {console.log(setData)}
        <FormControlLabel
          value="bottom"
          control={<Switch color="success" />}
          checked={checked}
          onChange={handleChange}
          labelPlacement="bottom"
        />
            </div>
          </div>  
          </div>
        );
      },
    },``
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Allusers;
