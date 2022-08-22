import "./category.scss";
import {categoryRow} from "../../../temp/ListofAllCategory"
import { useState,useEffect } from "react";
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
        console.log(response.data);
        setallCategoryState(response.data);
      }catch(e){
        console.log(e);
      }
    }
    fetchApi();
  }, [])
  const [data, setData] = useState(categoryRow);
  
  const handledit = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  let dattt="";
  return (
    <>
    <div  style={{margin:20}}>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>S.no</TableCell>
            <TableCell>Category Name</TableCell>
            {/* <TableCell align="left">Description</TableCell> */}
            <TableCell align="left">Sub Category</TableCell>
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
              {/* <TableCell align="left">{row.description}</TableCell> */}
          
             <TableCell align="left">{row.subcategory}</TableCell>
             
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
