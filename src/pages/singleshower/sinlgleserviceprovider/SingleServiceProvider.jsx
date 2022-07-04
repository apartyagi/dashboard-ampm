import "./SingleServiceProvider.scss";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

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
    // accountNo: serviceproviderdetails.accountNumber,
    // routingno: serviceproviderdetails.accountRoutingNumber,
    // bankaddress: serviceproviderdetails.bankAddress,
    // nameOfTheBankAccount: serviceproviderdetails.nameOfTheBankAccount,
    // bankname: serviceproviderdetails.nameOfTheBank,

    accountNumber: "521265665",
    accountRoutingNumber: "ROUTE854521",
    bankAddress: "Spain",
    nameOfTheBankAccount: "Jonathan sharma",
    nameOfTheBank: "Bank of Spain",
  };
  const TradeAndBusinessInformation = {
    // comapnytradelicence:
    //   serviceproviderdetails.companyTradeLicenseRegistrationNo,
    // comapnytradelicenceNo: serviceproviderdetails.companyTradeLicenseNo,
    // comapnytradelicenceexpiration:
    //   serviceproviderdetails.companyTradeLicenseExpirationDate,
    // comapnytradelicheceurl: serviceproviderdetails.companyTradeLicensePhoto,
    // comapnybusinesslicencereg:
    //   serviceproviderdetails.companyBusinessLicenseRegistrationNo,
    // comapnybusinesslicenceno: serviceproviderdetails.companyBusinessLicenseNo,
    // comapnybusinessexxpiration:
    //   serviceproviderdetails.companyBusinessLicenseExpirationDate,
    // comapnybusinessurl: serviceproviderdetails.companyBusinessLicensePhoto,

    companyTradeLicenseRegistrationNo:
      "20ASSOPSQ",
      companyTradeLicenseNo: "5862212225555",
      companyTradeLicenseExpirationDate:
      "25-11-2025",
      companyTradeLicensePhoto: "aws.s3/bucket/workmen.png",
      companyBusinessLicenseRegistrationNo:
      "2062154QSD",
      companyBusinessLicenseNo: "45565554558",
      companyBusinessLicenseExpirationDate:
      "15-12-2023",
      companyBusinessLicensePhoto: "aws.s3/bucket/workmens.png",
  };
  const CompanyInsuranceInformation = {
    // generlicinscarr: serviceproviderdetails.companyGeneralLiabilityInsCarrier,
    // comglpolicy: serviceproviderdetails.companyGlPolicy,
    // glpolicyexipre: serviceproviderdetails.companyGlPolicyExpirationDate,
    // companyworkman: serviceproviderdetails.companyWorkmanCompInsCarrier,
    // companywcpolicy: serviceproviderdetails.companyWcPolicy,
    // companywcexpire: serviceproviderdetails.companyWcPolicyExpirationDate,

    companyGeneralLiabilityInsCarrier: "NewCarriesx",
    companyGlPolicy: "#5264355",
    glpolicyexipre: "09-04-20236",
    companyGlPolicyExpirationDate: "20-4-2023",
    companyWorkmanCompInsCarrier: "Avon Carrier",
    companyWcPolicyExpirationDate: "10-5-2022",
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
      vehiclemake: "metal",
      vehiclemodel: "2008",
      vehiclevin: "VIN9856ER",
      vehicleplate: "UK98 BN 85214",
      vehicleinsurancecarr: "Bajaj Insurance",
      vehicleinsurpolicy: "#521RTG8515AS",
      vehicleinsuexpire:
        "12-06-2025",
    },
    {
      vehiclemake: "metal",
      vehiclemodel: "2010",
      vehiclevin: "VIN7583656",
      vehicleplate: "UK74 MN 64214",
      vehicleinsurancecarr: "Hero Insurance",
      vehicleinsurpolicy: "#98558AGGH41",
      vehicleinsuexpire:
        "25-10-2036",
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
          {/* <div className="left">
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
          </div> */}
          {/* <div className="right">
            ``{" "}
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          {/* </div>  */}
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

<table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Field</th>
                      <th scope="col">Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.keys(userDetails).map(
                    (key, i) => (
                        <tr key={i}>
                          <th scope="row">{key}</th>
                          <td>{userDetails[key]}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="2">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Field</th>
                      <th scope="col">Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(CompanyInsuranceInformation).map(
                      (key, index) => (
                        <tr key={index}>
                          <th scope="row">{key}</th>
                          <td>{CompanyInsuranceInformation[key]}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="3">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Field</th>
                      <th scope="col">Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(TradeAndBusinessInformation).map(
                      (key, index) => (
                        <tr key={index}>
                          <th scope="row">{key}</th>
                          <td>{TradeAndBusinessInformation[key]}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </TabPanel>

              <TabPanel value="4">
                <div className="row row-cols-1 row-cols-md g-4  ">
                  {CompanyVehicalInformation.map((data, index) => (
                    <div className="shadow-sm p-3 mb-5 bg-body rounded">
                      <div className="col">
                        <div className="card h-100">
                          <div className="card-body">
                            <h5 className="card-title">Vehicle {index + 1}</h5>
                            <table className="table ">
                              <thead>
                                <tr>
                                  <th scope="col">Field</th>
                                  <th scope="col">Answer</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">Number Plate</th>
                                  <td>{data.vehicleplate}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Vin NUMBER</th>
                                  <td>{data.vehiclevin}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Vehicle Model</th>
                                  <td>{data.vehiclemodel}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Vehicle Make</th>
                                  <td>{data.vehiclemake}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Insurance Policy</th>
                                  <td>{data.vehicleinsurpolicy}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Insurance Carrier</th>
                                  <td>{data.vehicleinsurancecarr}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Insurance Expire </th>
                                  <td>{data.vehicleinsuexpire}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="5">
                <div className="container">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Matthu</h5>
                          <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                              <tr>
                                <th scope="row">Phone No</th>
                                <td>9854123656</td>
                              </tr>
                              <tr>
                                <th scope="row">Email Id</th>
                                <td>newuser@gmail.com</td>
                              </tr>
                              <tr>
                                <th scope="row">Dl</th>
                                <td>DL45 2000 14 58</td>
                              </tr>
                              <tr>
                                <th scope="row"> Year of Experience</th>
                                <td>2</td>
                              </tr>
                              <tr>
                                <th scope="row"> Twitter Handle</th>
                                <td>twitter</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    </div>

                    {/*  */}
                    <div className="shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="col">
                      <div className="card h-60">
                        <img
                          src="https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Name</h5>
                          <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                              <tr>
                                <th scope="row">Phone No</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row">Email Id</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row">Dl</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row"> Year of Experience</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row"> Twitter Handle</th>
                                <td>sssss</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    </div>
                    {/*  */}
                    <div className="shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src="https://media.istockphoto.com/photos/think-i-see-your-problem-picture-id514104433?s=612x612"
                          className="card-img-top img-fluid mx-auto"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Name</h5>
                          <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                              <tr>
                                <th scope="row">Phone No</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row">Email Id</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row">Dl</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row"> Year of Experience</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row"> Twitter Handle</th>
                                <td>sssss</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    </div>
                    {/*  */}
                    <div className="shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src="https://images.pexels.com/photos/4393523/pexels-photo-4393523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="card-img-top img-fluid mx-auto"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Name</h5>
                          <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                              <tr>
                                <th scope="row">Phone No</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row">Email Id</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row">Dl</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row"> Year of Experience</th>
                                <td>sssss</td>
                              </tr>
                              <tr>
                                <th scope="row"> Twitter Handle</th>
                                <td>sssss</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    </div>
                    {/*  */}
                    
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="6">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Field</th>
                      <th scope="col">Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(bank).map((key, index) => (
                      <tr key={index}>
                        <th scope="row">{key}</th>
                        <td>{bank[key]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
            </TabContext>
          </Box>
        </div>

        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          {/* <List /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SingleServiceProvider;
