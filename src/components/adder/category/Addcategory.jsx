import "./addcategory.scss";
import React from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import CategoryS from "../../../service/CategoryS";

const Addcategory = ({ inputs, title }) => {
  const [createCatState, setcreateCatState] = useState({
    category:"",
    description:""
  })

  const formhandler=(e)=>{
    const value=e.target.value;
    setcreateCatState({...createCatState,[e.target.name]:value});
  }
  const saveCategory=(e)=>{
    e.preventDefault();

    console.log(createCatState);
    // CategoryS.saveNewCategory(createCatState).then(
    //   (res)=>{
    //     console.log(res);
    //   }
    // ).catch((err)=>{
    //   console.log(err);
    // });

  }

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
         
          <div className="right">
            <form>
            <div className="formInput">
                  <label>Category</label>
                  <input type="text" name="category" onChange={(e)=>formhandler(e)} value={createCatState.category}  placeholder={`Enter Category Name`} />
                </div>
                <div className="formInput">
                  <label>Description</label>
                  <input type="text" name="description" onChange={(e)=>formhandler(e)} value={createCatState.description} placeholder={`Enter Category Name`} />
                </div>
              <button onClick={saveCategory}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
