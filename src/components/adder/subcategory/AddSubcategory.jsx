import "./addsubcategory.scss";
import React from "react";
import { useState,useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import CategoryS from "../../../service/CategoryS";
import Select from "@mui/material/Select";


const AddSubcategory = ({title }) => {

  useEffect(() => {
      const fetchAllcategoryForoptions=async()=>{
        const work =await CategoryS.fetchAllCategoryOnly();
        setcatgeory(work.data);
      }
      fetchAllcategoryForoptions();
  }, [])
  



  const [createsubCategory, setcreatesubCategory] = useState({
    subcategory:"",
    description:"",
    disclamer:"",
    categoryid:""
  });

  const [category,setcatgeory] = useState([]);
  
  const formhandler=(e)=>{
    const value=e.target.value;
    setcreatesubCategory({...createsubCategory,[e.target.name]:value});
  }
  

  const [desc, setdesc] = React.useState("");


  const handleChange = (event) => {
    setdesc(event.target.value);
  };

  const saveSubCat=(e)=>{
    e.preventDefault();
    console.log(createsubCategory);
  }

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
                  <label>Type</label>
                  <input type="text" name="subcategory" onChange={(e)=>formhandler(e)} value={createsubCategory.subcategory}  placeholder={`Enter Category Name`} />
                </div>
                <div className="formInput">
                  <label>Description</label>
                  <input type="text" name="description" onChange={(e)=>formhandler(e)} value={createsubCategory.description}  placeholder={`Enter Category Description`} />
                </div>
                <div className="formInput">
                  <label>Disclamer</label>
                  <input type="text" name="disclamer" onChange={(e)=>formhandler(e)} value={createsubCategory.disclamer}  placeholder={`Enter Discamer`} />
                </div>
                <Select
                     size="small"
                     value={createsubCategory.categoryid}
                     onChange={(e)=>formhandler(e)}
                     name="categoryid"
                     displayEmpty
                     inputProps={{ 'aria-label': 'Without label' }}
                     >
                     <MenuItem size="small" value="">
                       <em>Select category</em>
                     </MenuItem>
                    {
                      category.map((dat,ind)=>(
                        <MenuItem value={dat.id} key={ind}>
                          {dat.name}
                        </MenuItem>
                      ))
                    }
                   </Select>
              <button onClick={saveSubCat}>Send</button>
            </form>
          </div>
        </div> 

       
    
      </div>
    </div>
  );
};

export default AddSubcategory;
