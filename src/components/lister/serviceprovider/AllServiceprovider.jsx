import "./serviceprovider.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  serviceproviderColumns,
  serviceProviderRow,
} from "../../../temp/ListofAllServiceProvider";
import { Link } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import Widget from "../../widget/Widget";
import ServiceProvider from "../../../service/ServiceProvider";

const Allusers = () => {
  const [allServiceproviderState, setallServiceproviderState] = useState([]);
  const [all, setall] = useState(0);
  const [acc, setacc] = useState(0);
  const [inn, setinn] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await ServiceProvider.fetchAllServiceProvider();
        const alSer=await ServiceProvider.findCountForAllServiceProviders();
        const acS=await ServiceProvider.findCountForActiveServiceProviders();
        const inS =await ServiceProvider.findCountForInActiveServiceProviders();
        setinn(inS.data.inactive);
        setacc(acS.data.active);
        setall(alSer.data.total);
        setallServiceproviderState(response.data[0]);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      } 
    };
    fetchApi();
  }, []);

  const [data, setData] = useState(serviceProviderRow);

  const dataaaroow = [
    {
      id: allServiceproviderState.id,
      companyAddress: allServiceproviderState.companyAddress,
      email: allServiceproviderState.email,
      companyName: allServiceproviderState.companyName,
    },
  ];

  setTimeout(() => {
    console.log(allServiceproviderState);
  }, 2000);

  const dataColumn = {};

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

            {/* <div className="cellAction">
              <div>
                {params.row.status == "active" ? (
                  <span
                    onClick={() => enableUserhanler(params.row.id)}
                    className="deleteButton"
                  >
                    inactive
                  </span>
                ) : (
                  <span
                    onClick={() => disableuserhandler(params.row.id)}
                    className="actioButton"
                  >
                    active
                  </span>
                )}
              </div> */}
            {/* </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div>
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
      </div>
      <div className="datatable">
        <DataGrid
          className="datagrid"
          rows={allServiceproviderState}
          columns={serviceproviderColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
    </div>
  );
};

export default Allusers;
