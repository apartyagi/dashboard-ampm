import "./customer.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns, customersRow } from "../../../temp/ListofAllCustomer";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Allusers = () => {
  const [data, setData] = useState(customersRow);
  const [customertype, setcustomertype] = React.useState("mixer");

  const handleChange = (event) => {
   setcustomertype(event.target.value);
    showUserData();
    }

  const enableUserhanler=(id)=>{
    console.log(id-1);
    data.forEach((da,ind)=>{
      if (id-1==ind) {
        da.status="inactive";
      }
    })
  }
  const disableuserhandler=(id)=>{
    console.log(id-1);  
    data.forEach((da,ind)=>{
        if (id-1==ind) {
          da.status="active";
        }
      })
    }
    
 const showUserData=()=>{
  console.log(customertype)
  if(customertype=="activator"){
    setData(data.filter((data) => data.status !== "inactivator"));  
  }
  else if(customertype=="inactivater"){
    setData(data.filter((data) => data.status !== "activator"));  
  }
  else{
    setData(data);
  }
 }



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/customer/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="cellAction">
              <div>
               {(params.row.status=="active")?<span onClick={()=>enableUserhanler(params.row.id)} className="deleteButton">inactive</span>:<span onClick={()=>disableuserhandler(params.row.id)} className="actioButton">active</span>}
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={customertype}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={`activator`}>List of All Active Customer</MenuItem>
          <MenuItem value={`inactivater`}>List of All InActive Customer</MenuItem>
          <MenuItem value={`mixer`}>List of All  Customer</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
     <br/>
      <DataGrid
        className="dat
        agrid"
        rows={data}
        columns={customerColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Allusers;
