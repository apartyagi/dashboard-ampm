import React from 'react'
import { useState } from "react";
const AddTime = ({title}) => {
    const [addTime, setAddTime] = useState({
        start:"",
        end:""
      })
    
      const formhandler=(e)=>{
        const value=e.target.value;
        setAddTime({...addTime,[e.target.name]:value});
      }
      const savetime=(e)=>{
        e.preventDefault();
    
        console.log(addTime);
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
                  <label>Start Time</label>
                  <input type="time" name="start" onChange={(e)=>formhandler(e)} value={addTime.start}  placeholder={`Enter Start Time`} />
                </div>
                <div className="formInput">
                  <label>End Time</label>
                  <input type="time" name="end" onChange={(e)=>formhandler(e)} value={addTime.end} placeholder={`Enter End Time`} />
                </div>
              <button onClick={savetime}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTime