import "./addsubcategory.scss";
import React from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddSubcategory = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
                     value={age}
                     onChange={handleChange}
                     displayEmpty
                     inputProps={{ 'aria-label': 'Without label' }}
                   >
                     <MenuItem value="">
                       <em>None</em>
                     </MenuItem>
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                   </Select>

                  ):(
                    <input type={input.type} placeholder={input.placeholder} />
                  )}
                  
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubcategory