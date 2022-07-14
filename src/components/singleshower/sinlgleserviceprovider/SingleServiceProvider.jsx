import "./SingleServiceProvider.scss";
import React,{ useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ServiceProvider from "../../../service/ServiceProvider";
import ServiceProvider1 from "../../subcomponents/ServiceProvider1";
import VehiclesComp from "../../subcomponents/VehiclesComp";
import ProSubComponent from "../../subcomponents/ProSubComponent";
import UserEnableOrDisbaleSub from "../../subcomponents/UserEnableOrDisbaleSub";

const SingleServiceProvider = () => {
  let { id } = useParams();
  const [singleServiceProviderDetails, setsingleServiceProviderDetails] =
    useState({});
  const [loading, setloading] = useState(true);
  const [value, setValue] = React.useState("1");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await ServiceProvider.fetchSingleServiceProvider(id);
        setsingleServiceProviderDetails(response.data);
        console.log(response.data);
        setTimeout(() => {
          setloading(false);
        }, 10);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
  }, []);

  const [isblocked, setisblocked] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userDetails = {
    CompanyName: singleServiceProviderDetails.companyName,
    Address: singleServiceProviderDetails.companyAddress,
    City: "USA",
    phone: singleServiceProviderDetails.phone,
    Website: singleServiceProviderDetails.website,
    EmailId: singleServiceProviderDetails.email,
    Verified: singleServiceProviderDetails.verified,
    Status: singleServiceProviderDetails.status,
  };

  const CompanyInsuranceInformation = {
    generlicinscarr:
      singleServiceProviderDetails?.serviceProviderInsuranceInfoDto
        ?.companyGeneralLiabilityInsCarrier,
    companyGlPolicy:
      singleServiceProviderDetails?.serviceProviderInsuranceInfoDto
        ?.companyGlPolicy,
    glpolicyexipre:
      singleServiceProviderDetails?.serviceProviderInsuranceInfoDto
        ?.companyGlPolicyExpirationDate,
    companyworkman:
      singleServiceProviderDetails?.serviceProviderInsuranceInfoDto
        ?.companyWorkmanCompInsCarrier,
    companywcpolicy:
      singleServiceProviderDetails?.serviceProviderInsuranceInfoDto
        ?.companyWcPolicy,
    companywcexpire:
      singleServiceProviderDetails?.serviceProviderInsuranceInfoDto
        ?.companyWcPolicyExpirationDate,
  };

  const bank = {
    accountNumber:
      singleServiceProviderDetails?.serviceProviderBankInfoDto?.accountNumber,
    accountRoutingNumber:
      singleServiceProviderDetails?.serviceProviderBankInfoDto
        ?.accountRoutingNumber,
    bankaddress:
      singleServiceProviderDetails?.serviceProviderBankInfoDto?.bankAddress,
    bankAddress:
      singleServiceProviderDetails?.serviceProviderBankInfoDto
        ?.nameOfTheBankAccount,
    nameOfTheBank:
      singleServiceProviderDetails?.serviceProviderBankInfoDto?.nameOfTheBank,
  };
  const TradeAndBusinessInformation = {
    companyTradeLicenseRegistrationNo:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyTradeLicenseRegistrationNo,
    companyTradeLicenseNo:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyTradeLicenseNo,
    companyTradeLicenseExpirationDate:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyTradeLicenseExpirationDate,
    companyTradeLicensePhoto:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyTradeLicensePhoto,
    companyBusinessLicenseRegistrationNo:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyBusinessLicenseRegistrationNo,
    companyBusinessLicenseNo:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyBusinessLicenseNo,
    companyBusinessLicenseExpirationDate:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyBusinessLicenseExpirationDate,
    companyBusinessLicensePhoto:
      singleServiceProviderDetails?.serviceProviderTradeAndBusinessDto
        ?.companyBusinessLicensePhoto,
  };

  const CompanyVehicalInformation =singleServiceProviderDetails?.serviceProviderVehicleInfosDto?.map(
      (vehicle) => {
        return {
          vehicleModel: vehicle?.vehicleModel,
          vehicleMake: vehicle?.vehicleMake,
          vehicleVin: vehicle?.vehicleVin,
          vehicleLicensePlate: vehicle?.vehicleLicensePlate,
          vehicleInsuranceCarrier: vehicle?.vehicleInsuranceCarrier,
          vehicleInsurancePolicy: vehicle?.vehicleInsurancePolicy,
          vehicleInsuranceExpirationDate:
            vehicle?.vehicleInsuranceExpirationDate,
        };
      }
    );
  const CompanyproTeam =singleServiceProviderDetails?.serviceProviderProTeamsDto?.map(pro=>{
    return{
      dl:pro?.dl,
      email:pro?.email,
      name:pro?.name,
      phone:pro?.phone,
      proTeamMemberPic:pro?.proTeamMemberPic,
      twitterHandle:pro?.twitterHandle,
      yearOfExperience:pro?.twitterHandle

    };
  
  });

  const CompanyServices = [];

  return (
    <div>
      {loading ? (
        <p>loading..</p>
      ) : (
        <>
          <div className="single">
            <div className="singleContainer">
              <div className="top">
                <div className="left">
                  <h1 className="title">Information</h1>
                  <div className="item">
                    <div className="details">
                      <h1 className="itemTitle">{userDetails.CompanyName}</h1>
                      <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">{userDetails.EmailId}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <UserEnableOrDisbaleSub id="enam" />
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
                        <Tab label="All Orders" value="2" wrapped />
                        <Tab label="Services" value="3" wrapped />
                        <Tab
                          label="Company Insurance Information"
                          value="4"
                          wrapped
                        />
                        <Tab
                          label="Trade and Business Licence Information"
                          value="5"
                          wrapped
                        />
                        <Tab
                          label="Company Vehicle Information"
                          value="6"
                          wrapped
                        />
                        <Tab
                          label="Company Pro Team  Information"
                          value="7"
                          wrapped
                        />
                        <Tab label="Bank Details" value="8" wrapped />
                        <Tab label="Setting" value="9" wrapped />
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
                          <ServiceProvider1 objects={userDetails} />
                        </tbody>
                      </table>
                    </TabPanel>

                    <TabPanel value="2">
                      <h1>Here is all Orders Details of sevice providers</h1>
                    </TabPanel>

                    <TabPanel value="3">
                      <div className="container">
                        <div className="text-center">
                          <h2>Avilable Time Slots</h2>
                        </div>
                        <br />
                        <div className="row justify-content-evenly">
                          <div className="col-3 col-offset-2 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <h5>09:00 AM TO 05:00 PM</h5>
                          </div>
                          <div className="col-3 col-offset-2 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <h5>05:00 PM TO 09:00 AM</h5>
                          </div>
                          <div className="col-3 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <h5>09:01 PM TO 08:59 AM </h5>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="text-center">
                        <h2>Service Area Category</h2>
                      </div>
                      <div className="container">
                        <div className="row text-center justify-content-evenly">
                          <div className="col-3 col-offset-2 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <div>
                              <h3>
                                <b>HVAC</b>
                              </h3>
                            </div>
                            <div>
                              <span>
                                <i>Commercial</i>
                              </span>{" "}
                              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                              <span>
                                <i>Residential</i>
                              </span>
                            </div>
                          </div>
                          <div className="col-3 col-offset-2 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <div>
                              <h3>
                                <b>Electrical</b>
                              </h3>
                            </div>
                            <div>
                              <span>
                                <i>Roadside</i>
                              </span>{" "}
                              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                              <span>
                                <i>Residential</i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="4">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Field</th>
                            <th scope="col">Answer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <ServiceProvider1
                            objects={CompanyInsuranceInformation}
                          />
                        </tbody>
                      </table>
                    </TabPanel>

                    <TabPanel value="5">
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
                                {key === "companyTradeLicensePhoto" ||
                                key === "companyBusinessLicensePhoto" ? (
                                  <>
                                    <td className="cellAction">
                                      <span
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#${key}`}
                                        className="viewButton"
                                      >
                                        view
                                      </span>
                                    </td>
                                    <div
                                      className="modal fade"
                                      id={key}
                                      data-bs-backdrop="static"
                                      data-bs-keyboard="false"
                                      tabIndex={-1}
                                      aria-labelledby="staticBackdropLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="staticBackdropLabel"
                                            >
                                              {key}
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            />
                                          </div>
                                          <div className="modal-body">
                                            <img
                                              src={
                                                TradeAndBusinessInformation[key]
                                              }
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="modal-footer"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <td>{TradeAndBusinessInformation[key]}</td>
                                  </>
                                )}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </TabPanel>

                    <TabPanel value="6">
                      <div className="row row-cols-1 row-cols-md g-4  ">
                        {CompanyVehicalInformation.map((data, index) => (
                          <div
                            className="shadow-sm p-3 mb-5 bg-body rounded"
                            key={index}
                          >
                            <div className="col">
                              <div className="card h-100">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    Vehicle {index + 1}
                                  </h5>
                                  <table className="table ">
                                    <thead>
                                      <tr>
                                        <th scope="col">Field</th>
                                        <th scope="col">Answer</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <VehiclesComp data={data} />
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>

                      
               <TabPanel value="7">
                <div className="container">
                  <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                      CompanyproTeam.map((data,ind)=>(
                        <ProSubComponent data={data} />
                  ))};
                  </div>
                </div>
              </TabPanel> 


                    <TabPanel value="8">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Field</th>
                            <th scope="col">Answer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <ServiceProvider1 objects={bank} />
                        </tbody>
                      </table>
                    </TabPanel>
                    
                    <TabPanel value="9">
                      <UserEnableOrDisbaleSub/>
                    </TabPanel>

                  </TabContext>
                </Box>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleServiceProvider;
