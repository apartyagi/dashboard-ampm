import "./category.scss";
import { DataGrid } from "@mui/x-data-grid";
import {categoryColumns,categoryRow} from "../../../temp/ListofAllCategory"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const Allusers = () => {
  const [data, setData] = useState(categoryRow);
  const [getcategory, setgetcategory] = useState([]);
  
  const handledit = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchAllCategory();
  }, [])
  
  const fetchAllCategory=async ()=>{
      const data=await axios.get(`http://localhost:8080/admin/fetchallcategory`);
      console.log(data.data);
      setgetcategory(data.data);
  }

  const AllCategory=[
    {
      id:"",
      name:"",
      img:"",
      description:"",
    },
    {
      id:"",
      name:"",
      img:"",
      description:"",
    },
    {
      id:"",
      name:"",
      img:"",
      description:"",
    },
    {
      id:"",
      name:"",
      img:"",
      description:"",
    }
  ]

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/category/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="editButton"
              onClick={() =>handledit(params.row.id)}
            >
              Edit
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
        columns={categoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Allusers;
