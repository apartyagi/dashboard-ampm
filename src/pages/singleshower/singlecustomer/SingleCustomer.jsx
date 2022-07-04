import "./SingleCustomer.scss";
import Chart from "../../../components/chart/Chart";
import TList from "../../../components/table/Table";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { TextField } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import Container from '@mui/material/Container';

const SingleCustomer = () => {
  const [checked, setChecked] = React.useState(["wifi"]);
  const [userDetailsSingle, setuserDetailsSingle] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchAllAddressWithCustomerDetails();
  }, []);

  const fetchAllAddressWithCustomerDetails = async () => {
    const fetcher = await axios.get(
      `http://localhost:8080/customer/address/fetch/all/cus/1`
    );
    console.log(fetcher.data[0]);
    const AllUserDetails = fetcher.data;
    setuserDetailsSingle(AllUserDetails);
  };

  const customerAddress = [
    {
      id: 1,
      name: "Apar Tyagi",
      phone: "9852155",
      pincode: "201001",
      city: "Ghaziabad",
      state: "UP",
      message: null,
      status: false,
      locality: "raj nagar",
      buildingNo: "26",
      type: "Other",
    },
    {
      id: 2,
      name: "Apar Tyagi",
      phone: "9852155",
      pincode: "201001",
      city: "Rajnagar",
      state: "UP",
      message: null,
      status: false,
      locality: "raj nagar",
      buildingNo: "255",
      type: "Home",
    },
  ];
  const userDetails={
    Name:"Denver",
    Address:"Helsinki",
    City:"USA",
    DateofBirth:"23-08-2002",
    EmailId:"denver@cooldude.com",
    Verified:"true",
    Status:"enable"
  }

  return (
    <div className="single">
      {/* <Sidebar /> */}
      {/* {console.log(userDetailsSingle[0].id)} */}
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
                  <span className="itemValue">email@gmail.com</span>
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
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
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
                  <Tab label="Basic Information" value="1" wrapped />
                  <Tab label="Details" value="2" wrapped />
                  <Tab label="Address" value="3" wrapped />
                  <Tab label="Orders" value="4" wrapped />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid item xs={8}>
                  <Item>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >

                      {
                        Object.keys(userDetails).map((key, i) => (
                        
                          <TextField
                          required
                          id="outlined-required"
                          label={key}
                          multiline
                          InputProps={{
                            readOnly: true,
                          }}
                          defaultValue={userDetails[key]}
                        />
          
                        ))
                    }

  
                    </Box>
                  </Item>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  subheader={<ListSubheader>Settings</ListSubheader>}
                >
                  <ListItem>
                    <ListItemIcon>
                      <VerifiedOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      id="switch-list-label-wifi"
                      primary="Enable"
                    />
                    <Switch
                      edge="end"
                      onChange={handleToggle("wifi")}
                      checked={checked.indexOf("wifi") !== -1}
                      inputProps={{
                        "aria-labelledby": "switch-list-label-wifi",
                      }}
                    />
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel value="3">
               
                {customerAddress.map((data, index) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id={data.buildingNo}
                    >
                      <Typography>{data.type}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Field</th>
                              <th scope="col">Answer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Id</th>
                              <td>{data.id}</td>
                            </tr>
                            <tr>
                              <th scope="row">Name</th>
                              <td>{data.name}</td>
                            </tr>
                            <tr>
                              <th scope="row">Phone</th>
                              <td>{data.phone}</td>
                            </tr>
                            <tr>
                              <th scope="row">Pin Code</th>
                              <td>{data.pincode}</td>
                            </tr>
                            <tr>
                              <th scope="row">City</th>
                              <td>{data.city}</td>
                            </tr>
                            <tr>
                              <th scope="row">State</th>
                              <td>{data.state}</td>
                            </tr>
                            <tr>
                              <th scope="row">Locality</th>
                              <td>{data.locality}</td>
                            </tr>
                            <tr>
                              <th scope="row">Building No</th>
                              <td>{data.buildingNo}</td>
                            </tr>

                            <tr>
                              <th scope="row">Type of Address</th>
                              <td>{data.type}</td>
                            </tr>

                          </tbody>
                        </table>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </TabPanel>
              <TabPanel value="4">Here is list of all orders</TabPanel>
              <br /> <br />
              <br />
              <br />
            </TabContext>
          </Box>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TList />
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;
