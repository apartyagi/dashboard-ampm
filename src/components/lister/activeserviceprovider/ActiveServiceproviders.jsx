import { useState, useEffect } from "react";
import "./activeserviceproviders.scss";
import { DataGrid } from "@mui/x-data-grid";
import Widget from "../../widget/Widget";
import {
  activeserviceproviderColumns,
  activeserviceProviderRow,
} from "../../../temp/ListofAllActiveServiceProvider";
import { Link } from "react-router-dom";
import ServiceProvider from "../../../service/ServiceProvider";
import Admin from "../../../service/Admin";

const ActiveServiceproviders = () => {
  const [activeServiceProviderState, setactiveServiceProviderState] = useState(
    []
  );
  const [loading, setloading] = useState(true);
  const [all, setall] = useState(0);
  const [acc, setacc] = useState(0);
  const [inn, setinn] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await ServiceProvider.fetchAllActiveServiceproviders();
        setactiveServiceProviderState(response.data);
        const data = await Admin.fetchAllCountForServiceProviders();
        setall(data.data.totalServiceProvider);
        setacc(data.data.activeServiceProvider);
        setinn(data.data.inactiveServiceProvider);
        console.log(response.data);
        setloading(false);
      } catch (err) {
        setloading(true);
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  const enableUserhanler = (id) => {
    console.log(id - 1);
    data.forEach((da, ind) => {
      if (id - 1 == ind) {
        da.status = "inactive";
      }
    });
  };
  const disableuserhandler = (id) => {
    console.log(id - 1);
    data.forEach((da, ind) => {
      if (id - 1 == ind) {
        da.status = "active";
      }
    });
  };
  const [data, setData] = useState(activeserviceProviderRow);

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
          rows={activeServiceProviderState}
          columns={activeserviceproviderColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
    </div>
  );
};

export default ActiveServiceproviders;
