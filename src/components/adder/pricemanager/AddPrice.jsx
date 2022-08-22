import React from 'react'
import { useState,useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import CategoryS from "../../../service/CategoryS";
import Select from "@mui/material/Select";
const AddPrice = ({title}) => {

    const [allcategory,setallcategory]=useState([]);
    const timeslot=[
      {
        id:1,
        name:'A'
      },
      {
        id:2,
        name:'B'
      },
      {
        id:3,
        name:'C'
      }
    ]
    const subcat=[
      {
        id:1,
        name:'residential'
      },
      {
        id:2,
        name:'commercial'
      }
    ]
    const [manager, setmanager] = useState({
       category:"" ,
       subcategory:"",
       timeslot:"",
       price:"",
      });
  
  const formhandler=(e)=>{
    const value=e.target.value;
    setmanager({...manager,[e.target.name]:value});
  }
  
  const saveSubCat=(e)=>{
    e.preventDefault();
    console.log(manager);
  }
  useEffect(() => {
    const fetchAllcategoryForoptions=async()=>{
      const work =await CategoryS.fetchAllCategoryOnly();
      setallcategory(work.data);
    }
    fetchAllcategoryForoptions();
}, [])
  return (
    <div className="new">
    {/* <Sidebar /> */}
    <div className="newContainer">
      {/* <Navbar /> */}
      <div className="top">
        <h1>{title}</h1>
      </div>

      <div className="bottom">
       
        <div className="right">
          <form>
          <div className="formInput">
              <Select
                   size="small"
                   value={manager.category}
                   onChange={(e)=>formhandler(e)}
                   name="category"
                   displayEmpty
                   inputProps={{ 'aria-label': 'Without label' }}
                   >
                   <MenuItem size="small" value="">
                     <em>Select category</em>
                   </MenuItem>
                  {
                    allcategory.map((dat,ind)=>(
                      <MenuItem value={dat.id} key={ind}>
                        {dat.name}
                      </MenuItem>
                    ))
                  }
                 </Select>
                 </div>
                 <div className="formInput">
                 <Select
                   size="small"
                   value={manager.subcategory}
                   onChange={(e)=>formhandler(e)}
                   name="subcategory"
                   displayEmpty
                   inputProps={{ 'aria-label': 'Without label' }}
                   >
                   <MenuItem size="small" value="">
                     <em>Select SubCategory</em>
                   </MenuItem>
                  {
                    subcat.map((dat,ind)=>(
                      <MenuItem value={dat.id} key={ind}>
                        {dat.name}
                      </MenuItem>
                    ))
                  }
                 </Select>
                 </div>

                 <div className="form">
                 <Select
                   size="small"
                   value={manager.timeslot}
                   onChange={(e)=>formhandler(e)}
                   name="timeslot"
                   displayEmpty
                   inputProps={{ 'aria-label': 'Without label' }}
                   >
                   <MenuItem size="small" value="">
                     <em>Select Timeslot</em>
                   </MenuItem>
                  {
                    timeslot.map((dat,ind)=>(
                      <MenuItem value={dat.id} key={ind}>
                        {dat.name}
                      </MenuItem>
                    ))
                  }
                 </Select>
                 </div>
                 
              <div className="formInput">
                <label>Price For this version</label>
                <input type="number" name="price" onChange={(e)=>formhandler(e)} value={manager.price}  placeholder={`Enter Price`} />
              </div>
            <button onClick={saveSubCat}>Send</button>
          </form>
        </div>
      </div> 

     
  
    </div>
  </div>
  );
}

export default AddPrice