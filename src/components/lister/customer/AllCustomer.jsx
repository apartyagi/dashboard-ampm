import "./customer.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns, customersRow } from "../../../temp/ListofAllCustomer";
import { Link } from "react-router-dom";
import React,{ useState,useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Customer from '../../../service/CustomerList'
import Admin from '../../../service/Admin'
import Widget from "../../widget/Widget";


const Allusers = () => {
  const [allCustomerState, setallCustomerState] = useState([]);
  const [tot, setto]  = useState(0);
  const [ina, setina] = useState(0);
  const [act, setact] = useState(0);

  useEffect(() => {
     const fetchApi=async()=>{
       try{
         const response =await Customer.fetchAllCustomerFromApi();
         const coun =await Admin.fetchAllCountForCustomers();
         setallCustomerState(response.data);
         setto(coun.data.asTotalCustomer);
         setina(coun.data.inActiveCustomer);
         setact(coun.data.activeCustomer);
         console.log(response.data);
         console.log(coun.data);

       }catch(e){
         console.log(e);
       }
     }
     fetchApi();
  }, [])
  

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
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="al-cus" amount={tot} />
          <Widget type="ac-cus" amount={act} />
          <Widget type="in-cus" amount={ina} />
        </div>
        
      </div>
    </div>
    <div className="datatable">
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
     <br/>
      <DataGrid
        className="dat
        agrid"
        rows={allCustomerState}
        columns={customerColumns.concat(actionColumn)}
        pageSize={50}
        rowsPerPageOptions={[50]}
      />
    </div>
    </div>
  );
};

export default Allusers;
