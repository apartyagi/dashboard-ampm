import "./customer.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns, customersRow } from "../../../temp/ListofAllCustomer";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";

const Allusers = () => {
  const [data, setData] = useState(customersRow);


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/customer/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="cellAction">
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
        columns={customerColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Allusers;
