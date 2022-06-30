import "./serviceprovider.scss";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import {
  serviceproviderColumns,
  serviceProviderRow,
} from "../../../temp/ListofAllServiceProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const Allusers = () => {
  const [data, setData] = useState(serviceProviderRow);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    console.log("ID clicked....",id);
    
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/serviceprovider/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
      
            <div
              className="cellAction"
              onClick={() => handleDelete(params.row.id)}>
           <div>
               {(params.row.status=="active")?<span className="deleteButton">inactive</span>:<span className="actioButton">active</span>}
          </div>
          
            
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="dat
        agrid"
        rows={data}
        columns={serviceproviderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Allusers;
