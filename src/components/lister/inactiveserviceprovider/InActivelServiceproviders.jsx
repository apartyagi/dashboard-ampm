import "./inactiveserviceproviders.scss";
import { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Widget from "../../widget/Widget";
import ServiceProvider from "../../../service/ServiceProvider";
import Admin from "../../../service/Admin";
import {
  inactiveserviceproviderColumns,
} from "../../../temp/ListofAllInActiveServiceProvider";
import { Link } from "react-router-dom";

const InActivelServiceproviders = () => {
  const [inactiveServiceProviders, setinactiveServiceProviders] = useState([]);
  const [all, setall] = useState(0);
  const [acc, setacc] = useState(0);
  const [inn, setinn] = useState(0);


useEffect(() => {
    const fetchApi=async()=>{
      try{
        const respone=await ServiceProvider.fetchAllInActiveServiceproviders();
        const data=await Admin.fetchAllCountForServiceProviders();
        setinactiveServiceProviders(respone.data);
        setall(data.data.totalServiceProvider);
        setacc(data.data.activeServiceProvider);
        setinn(data.data.inactiveServiceProvider);
      }catch(err){
        console.warn(err);
      }
    }
    fetchApi();
}, [])



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
          </div>
        );
      },
    },
  ];
  return (
    <div>
       <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="al-serv" amount={all} />
          <Widget type="ac-serv" amount={acc} />
          <Widget type="in-serv" amount={inn} />
        </div>
        
      </div>
    </div>
    <div className="datatable">
      <DataGrid
        className="dat
        agrid"
        rows={inactiveServiceProviders}
        columns={inactiveserviceproviderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
    </div>
  );
};

export default InActivelServiceproviders;
