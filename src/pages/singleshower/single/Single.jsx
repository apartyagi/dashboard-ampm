import "./single.scss";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {useParams} from "react-router-dom";
const Single = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let {id}=useParams();

  return (
    <div className="single">
      {/* <Sidebar /> */}
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  allowScrollButtonsMobile
                  variant="scrollable"
                  scrollButtons={true}
                >
                  <Tab label="Item Details" value="1" wrapped />
                  <Tab
                    label="List Of Servie Providers That Provide Service In this Category"
                    value="2"
                    wrapped
                  />
                  <Tab label="Editor  " value="3" wrapped />
                </TabList>
              </Box>
              <TabPanel value="1">
            
                  <div className="container">
                    <div className="row text-center">
                      <div className="col-sm-12">
                        <h1>Category Name {id}</h1>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                    <div className="col-sm-6 text-center"><p>Roadside</p></div>
                    <div className="col-sm-6 text-center"><p>Commercial</p></div>
                    </div>
                     
                </div>

              </TabPanel>
              <TabPanel value="2">List of All Service Providers....</TabPanel>
              <TabPanel value="3">
                Here You Can Edit This Category And its SubCategory
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
