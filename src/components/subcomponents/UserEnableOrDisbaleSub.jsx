import React,{useState} from "react";
import "./enablediable.css";
import Switch from "@mui/material/Switch";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
const UserEnableOrDisbaleSub = () => {
  const [isenable,setisenable]=useState(true);
    
  const switchHandle=(e)=>{
      setisenable(e.target.checked);
    }

  return (
    <>  
      <div className="conat conatiner mt-2">
        <div id="left">Status</div>
        <div id="right">
          <Switch checked={isenable} onChange={switchHandle} />
        </div>
      </div>
      {
        isenable?(<>
        
        
        </>):(<>
          <div>

      <div className=" container text-center middle">
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Please upload your document again "
          defaultValue=""
          style={{ width: "90%" }}
          />
      </div>
      <div className="mt-2 mb-2 text-center">
      <Button variant="contained">
        conform
        </Button>
      </div>
      </div>
        </>)
      }

    </>
  );
};

export default UserEnableOrDisbaleSub;
