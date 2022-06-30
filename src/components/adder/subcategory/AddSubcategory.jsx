import "./addsubcategory.scss";
import React from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Input from '@mui/material/Input';


const AddSubcategory = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [desc, setdesc] = React.useState("");
  const [catgeory, setcatgeory] = useState([]);
  const ariaLabel = { 'aria-label': 'description' };


  const handleChange = (event) => {
    setdesc(event.target.value);
  };

  const finalSubCategoryPostData = {
    SubcategoryName: "",
    subcategoryDesc: "",
    catgeory: {
      id: "",
    },
  };

  useEffect(() => {}, []);

  const getAllCategoryFromAPi = async () => {
    const dat = await axios.get(``);
    console.log(dat.data);
    setcatgeory(dat.data);
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
          <div className="left">
            <img  src="https://images.pexels.com/photos/12238398/pexels-photo-12238398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="right">
            <form>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {(input.type=="select")?(
                    <>

                     <Select
                     size="small"
                     value={desc}
                     onChange={handleChange}
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
                    </>
                  ):(
                    <input type={input.type} placeholder={input.placeholder} />
                  )}
                  
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div> 

       
        {/* <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {(input.type=="select")?(
                     <Select
                     value={desc}
                     onChange={handleChange}
                     displayEmpty
                     inputProps={{ 'aria-label': 'Without label' }}
                   >
                     <MenuItem value="">
                       <em>None</em>
                     </MenuItem>
                    {
                      getAllCategory.map((dat,ind)=>(
                        <MenuItem value={0+ind} key={ind}>
                          {dat.name}
                        </MenuItem>
                      ))
                    }
                   </Select>

                  ):(
                    <input type={input.type} placeholder={input.placeholder} />
                  )}
                  
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AddSubcategory;
