import "./SingleServiceProvider.scss";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const SingleServiceProvider = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [serviceproviderdetails, setserviceproviderdetails] = useState({});

  let { id } = useParams();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    FetchAllServiceproviderInformationHugeData();
  }, []);

  const FetchAllServiceproviderInformationHugeData = async () => {
    const fetcher = await axios.get(
      `http://localhost:8080/serviceProvider/fetchSingleServPro/1`
    );
    const reso = fetcher.data;
    setserviceproviderdetails(reso);
    console.log(reso);
  };
  const bank = {
    accountNo: serviceproviderdetails.accountNumber,
    routingno: serviceproviderdetails.accountRoutingNumber,
    bankaddress: serviceproviderdetails.bankAddress,
    nameOfTheBankAccount: serviceproviderdetails.nameOfTheBankAccount,
    bankname: serviceproviderdetails.nameOfTheBank,
  };
  const TradeAndBusinessInformation = {
    comapnytradelicence:
      serviceproviderdetails.companyTradeLicenseRegistrationNo,
    comapnytradelicenceNo: serviceproviderdetails.companyTradeLicenseNo,
    comapnytradelicenceexpiration:
      serviceproviderdetails.companyTradeLicenseExpirationDate,
    comapnytradelicheceurl: serviceproviderdetails.companyTradeLicensePhoto,
    comapnybusinesslicencereg:
      serviceproviderdetails.companyBusinessLicenseRegistrationNo,
    comapnybusinesslicenceno: serviceproviderdetails.companyBusinessLicenseNo,
    comapnybusinessexxpiration:
      serviceproviderdetails.companyBusinessLicenseExpirationDate,
    comapnybusinessurl: serviceproviderdetails.companyBusinessLicensePhoto,
  };
  const CompanyInsuranceInformation = {
    generlicinscarr: serviceproviderdetails.companyGeneralLiabilityInsCarrier,
    comglpolicy: serviceproviderdetails.companyGlPolicy,
    glpolicyexipre: serviceproviderdetails.companyGlPolicyExpirationDate,
    companyworkman: serviceproviderdetails.companyWorkmanCompInsCarrier,
    companywcpolicy: serviceproviderdetails.companyWcPolicy,
    companywcexpire: serviceproviderdetails.companyWcPolicyExpirationDate,
  };

  const CompanyDetails = {};

  const userDetails = {
    CompanyName: "Iron Fist",
    Address: "Helsinki",
    City: "USA",
    phone: "85215",
    Website: "domain@winklix.com",
    EmailId: "denver@cooldude.com",
    Verified: "true",
    Status: "enable",
  };

  const CompanyVehicalInformation = [
    {
      vehiclemake: serviceproviderdetails.vehicleMake,
      vehiclemodel: serviceproviderdetails.vehicleModel,
      vehiclevin: serviceproviderdetails.vehicleVin,
      vehicleplate: serviceproviderdetails.vehicleLicensePlate,
      vehicleinsurancecarr: serviceproviderdetails.vehicleInsuranceCarrier,
      vehicleinsurpolicy: serviceproviderdetails.vehicleInsurancePolicy,
      vehicleinsuexpire: serviceproviderdetails.vehicleInsuranceExpirationDate,
    },
  ];

  const CompanyproTeam = [
    {
      proname: serviceproviderdetails.Name,
      prophone: serviceproviderdetails.phone,
      proemail: serviceproviderdetails.email,
      prodl: serviceproviderdetails.dl,
      propic: serviceproviderdetails.proTeamMemberPic,
      proexperince: serviceproviderdetails.yearOfExperience,
      protwitter: serviceproviderdetails.twitterHandle,
    },
  ];

  const CompanyServices = [];

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
                  <Tab label="Company Details" value="1" wrapped />
                  <Tab
                    label="Company Insurance Information"
                    value="2"
                    wrapped
                  />
                  <Tab
                    label="Trade and Business Licence Information"
                    value="3"
                    wrapped
                  />
                  <Tab label="Company Vehicle Information" value="4" wrapped />
                  <Tab
                    label="Company Pro Team  Information"
                    value="5"
                    wrapped
                  />
                  <Tab label="Bank Details" value="6" wrapped />
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
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={CompanyInsuranceInformation.generlicinscarr}
                  label={"companyGeneralLiabilityInsCarrier "}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={CompanyInsuranceInformation.comglpolicy}
                  label={"companyGlPolicy"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={CompanyInsuranceInformation.glpolicyexipre}
                  label={"companyGlPolicyExpirationDate"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={CompanyInsuranceInformation.companyworkman}
                  label={"companyWorkmanCompInsCarrier"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={CompanyInsuranceInformation.companywcpolicy}
                  label={"companyWcPolicy"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={CompanyInsuranceInformation.companywcexpire}
                  label={"companyWcPolicyExpirationDate"}
                  id="fullWidth"
                />
              </TabPanel>
              <TabPanel value="3">
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnytradelicence}
                  label={"companyTradeLicenseRegistrationNo"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnytradelicenceNo}
                  label={"companyTradeLicenseNo"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={
                    TradeAndBusinessInformation.comapnytradelicenceexpiration
                  }
                  label={"companyTradeLicenseExpiration"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnytradelicheceurl}
                  label={"companyTradeLicensePhoto"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnybusinesslicencereg}
                  label={"companyBusinessLicenseRegistrationN"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnybusinesslicenceno}
                  label={"companyBusinessLicenseNo"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnybusinessexxpiration}
                  label={"companyBusinessLicenseExpirationDat"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={TradeAndBusinessInformation.comapnybusinessurl}
                  label={"companyBusinessLicensePhoto"}
                  id="fullWidth"
                />
              </TabPanel>

              <TabPanel value="4">
                <Container maxWidth="fixed">
                  <Box sx={{ bgcolor: "#fff1", height: "100vh" }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      <div className="col">
                        <div className="card h-100">
                          <div className="card-body">
                          <h5 class="card-title">Vehicle A</h5>
                          <br/>
                            <div className="list-group">
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                  Vehicle Model ={" "}
                                </li>
                                <li class="list-group-item">Vehicle VIN = </li>
                                <li class="list-group-item">
                                  Vehicle License Plate ={" "}
                                </li>
                                <li class="list-group-item">
                                  Vehicle Insurance Carrier ={" "}
                                </li>
                                <li class="list-group-item">
                                  Vehicle Insurance Policy ={" "}
                                </li>
                                <li class="list-group-item">
                                  Vehicle Insurance Expiration Date =
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Container>
              </TabPanel>
              <TabPanel value="5">
                <Container maxWidth="fixed">
                  <Box sx={{ bgcolor: "#F4F6F7", height: "100vh" }}>
                    <div className="container">
                      <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                          <div className="card">
                            <img
                              src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Name</h5>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">Phone No=</li>
                                <li class="list-group-item">Email Id=</li>
                                <li class="list-group-item">Dl=</li>
                                <li class="list-group-item">
                                  Year of Experience=
                                </li>
                                <li class="list-group-item">Twitter Handle=</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Container>
              </TabPanel>

              <TabPanel value="6">
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={bank.bankname}
                  label={"Bank Name"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={bank.nameOfTheBankAccount}
                  label={"Name of The Bank Account Holder"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={bank.bankaddress}
                  label={"Bank Address"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={bank.routingno}
                  label={"Account Routing Number"}
                  id="fullWidth"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={bank.accountNo}
                  label={"Account Number"}
                  id="fullWidth"
                />
              </TabPanel>
            </TabContext>
          </Box>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleServiceProvider;
