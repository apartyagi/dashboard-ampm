import "./addsubcategory.scss";
import React from "react";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


const AddSubcategory = ({ inputs, title }) => {
  const [createsubCategory, setcreatesubCategory] = useState({
    subcategory:"",
    description:"",
    categoryid:""
  });
  
  const formhandler=(e)=>{
    const value=e.target.value;
    setcreatesubCategory({...createsubCategory,[e.target.name]:value});
  }
  

  const [desc, setdesc] = React.useState("");
  const [catgeory, setcatgeory] = useState([]);
  const ariaLabel = { 'aria-label': 'description' };


  const handleChange = (event) => {
    setdesc(event.target.value);
  };

  const saveSubCat=(e)=>{
    e.preventDefault();
    console.log(createsubCategory);
  }

  const finalSubCategoryPostData = {
    SubcategoryName: "",
    subcategoryDesc: "",
    catgeory: {
      id: "",
    },
  };

  const getAllCategory = [
    {
      name: "plumber",
    },
    {
      name: "electrical",
    },
    {
      name: "HVAC",
    },
    {
      name: "Lock Smith",
    },
  ];

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
                  <label>Category</label>
                  <input type="text" name="subcategory" onChange={(e)=>formhandler(e)} value={createsubCategory.subcategory}  placeholder={`Enter Category Name`} />
                </div>
                <div className="formInput">
                  <label>Category</label>
                  <input type="text" name="description" onChange={(e)=>formhandler(e)} value={createsubCategory.description}  placeholder={`Enter Category Name`} />
                </div>
                <Select
                     size="small"
                     value={createsubCategory.categoryid}
                     onChange={handleChange}
                     name="categoryid"
                     displayEmpty
                     inputProps={{ 'aria-label': 'Without label' }}
                     >
                     <MenuItem size="small" value="">
                       <em>Select your category first</em>
                     </MenuItem>
                    {
                      getAllCategory.map((dat,ind)=>(
                        <MenuItem value={0+ind} key={ind}>
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
