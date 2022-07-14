import "./SingleCustomer.scss";
import TList from "../../../components/table/Table";
import React,{ useEffect, useState } from "react";
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
import Button from "@mui/material/Button";
import CustomerS from "../../../service/CustomerList";
import {useParams} from "react-router-dom";
const SingleCustomer = () => {
  
  const [loading, setloading] = useState(true);
  const [singleCustomerState, setsingleCustomerState] = useState({ })
  const [isblocked, setisblocked] = useState(true);

  let {id}=useParams();    

  useEffect(() => {
    const fetchApi=async()=>{
      try{
        const response=await CustomerS.fetchSingleCustomerfromApi(id);
        console.log(response.data);
        setsingleCustomerState(response.data);
          setloading(false);  
        
      }catch(err){
        setloading(true);
        console.log(err);
    }
    
  }
  fetchApi();
  }, []);




  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));



  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const userDetails = {
    Name: singleCustomerState.name,
    Address: singleCustomerState.address,
    City: singleCustomerState.city,
    contact_no:singleCustomerState.contact_no,
    DateofBirth: singleCustomerState.dateofbirth,
    EmailId: singleCustomerState.email,
    Verified: "true",
    Status: "enable",
  };

  return (
    <div>
    {
      loading?(<>loading...</>):(
        <>  
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
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h2 className="itemTitle">{singleCustomerState.name}</h2>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{singleCustomerState.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{singleCustomerState.contact_no}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                   {singleCustomerState.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rights">
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
                  <Tab label="Setting" value="2" wrapped />
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
                      {Object.keys(userDetails).map((key, i) => (
                        <TextField
                          required
                          key={i}
                          id="outlined-required"
                          label={key}
                          multiline
                          InputProps={{
                            readOnly: true,
                          }}
                          defaultValue={userDetails[key]}
                        />
                      ))}
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
                      defaultChecked={true}
                      onChange={(e) => {
                        setisblocked(e.target.checked)}}
                      inputProps={{
                        "aria-labelledby": "switch-list-label-wifi",
                      }}
                    />
                  </ListItem>
                  <div>
                    {!isblocked ? (
                      <>
                        <TextField
                          required
                          id="outlined-required"
                          label="Enter Reason"
                          sx={{ width: "55ch" }}
                          placeholder="Account suspended due to suspisius activity"
                        />
                        <br />
                        <br/>
                        <Button variant="contained">Conform</Button>
                      </>
                    ) : (
                      <></>
                    )}
                    </div>
                </List>
              </TabPanel>
              <TabPanel value="3">
                {singleCustomerState.addressDtos.map((data, index) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id={data.id}
                    >
                      <Typography>{"Home"}</Typography>
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

        </>
        )
      }
      </div>
  );
};

export default SingleCustomer;
