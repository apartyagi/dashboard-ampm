import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo" >winklix</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>
        <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
            </Link>
          <p className="title"> ACTIVE LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              {/* <span>Users</span> */}
            </li>
          </Link>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Customer</span>
            </li>
          </Link>
          <Link to="/serviceprovider" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Service Provider</span>
          </li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Category</span>
          </li>
          </Link>
          <Link to="/subcategory" style={{ textDecoration: "none" }}>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Sub Category</span>
          </li> */}
          </Link>
          <p className="title">ADD</p>
          <Link to="/add-cat" style={{textDecoration:"none"}}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Add Category</span>
          </li>
          </Link>
          <Link to="/add-sub-cat" style={{textDecoration:"none"}}> 
          <li>
            <NotificationsNoneIcon className="icon" />
            <span> Add Sub Category</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to={`/activeserv`} style={{
            textDecoration:"none"
          }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Active Service Providers</span>
          </li>
          </Link>
          <Link to={`/inactiveserv`} style={{
            textDecoration:"none"
          }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>InActive Service Provider</span>
          </li>
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Demo</span>
          </li>
          <p className="title">PAYMENTS</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Demo</span>
          </li>
          <Link to={`/contact`} style={{textDecoration:"none"}}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Contact us</span>
          </li>
          </Link>
          <Link to={`/about`} style={{textDecoration:"none"}}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>About us</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
