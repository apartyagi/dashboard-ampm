import "./category.scss";
import { DataGrid } from "@mui/x-data-grid";
import {categoryColumns,categoryRow} from "../../../temp/ListofAllCategory"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryS from "../../../service/CategoryS";

const AllCategory = () => {
  const [allCategoryState, setallCategoryState] = useState([]);
  
  useEffect(() => {
    const fetchApi=async()=>{
      try{
        const response=await CategoryS.fetchAllCategory();
        console.log(response.data[0]);
        setallCategoryState(response.data[0]);
      }catch(e){
        console.log(e);
      }
    }
    fetchApi();
  }, [])
  let subs="";
  const [data, setData] = useState(categoryRow);
  const [getcategory, setgetcategory] = useState([]);
  
  const handledit = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  let dattt="";
  return (
    // <div className="datatable">
    //   <DataGrid
    //     className="dat
    //     agrid"
    //     rows={allCategoryState}
    //     columns={categoryColumns.concat(actionColumn)}
    //     pageSize={9}
    //     rowsPerPageOptions={[9]}
    //   />
    // </div>
    <>
    <div  style={{margin:20}}>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>S.no</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">SubCategory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {

          allCategoryState?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
              <TableCell align="left">{row.description}</TableCell>
             {
               row.subCategory?.forEach(element => {
                    dattt=dattt+element.name+", "
              })
            }
             <TableCell align="left">{dattt}</TableCell>
              {
               dattt=""
              }
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default AllCategory;
