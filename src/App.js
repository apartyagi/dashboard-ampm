import { useContext, useState,useEffect } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { subCatInputs, catInputs } from "./temp/formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import AllCustomer from "./components/lister/customer/AllCustomer";
import AllCategory from "./components/lister/category/AllCategory";
import AllServiceprovider from "./components/lister/serviceprovider/AllServiceprovider";
import Addcategory from "./components/adder/category/Addcategory";
import AddSubcategory from "./components/adder/subcategory/AddSubcategory";
import SingleCustomer from "./components/singleshower/singlecustomer/SingleCustomer";
import SingleServiceProvider from "./components/singleshower/sinlgleserviceprovider/SingleServiceProvider";
import Orders from "./components/orders/Orders";
import AboutUS from "./components/aboutus/AboutUS";
import { ContactUs } from "./components/contactus/ContactUs";
import ActiveServiceproviders from "./components/lister/activeserviceprovider/ActiveServiceproviders";
import InActiveServiceproviders from "./components/lister/inactiveserviceprovider/InActivelServiceproviders";
import RecentBooking from "./components/recentbooking/RecentBooking";
import AllOrders from "./components/allorders/AllOrders";
import AddTime from "./components/adder/timing/AddTime";
import AddPrice from "./components/adder/pricemanager/AddPrice";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [loginStatus, setloginStatus] = useState(false);

  useEffect(() => {
    const res=localStorage.getItem('token');
    setloginStatus(res)
  }, [])
  

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}

          {loginStatus ? (
            <Route path="/">
              <Route index element={<Home />} />

              <Route path="customer" element={<List />}>
                <Route index element={<AllCustomer />} />
                <Route path=":id" element={<SingleCustomer />} />
              </Route>

              <Route path="serviceprovider" element={<List />}>
                <Route index element={<AllServiceprovider />} />
                <Route path=":id" element={<SingleServiceProvider />} />
              </Route>

              <Route path="category" element={<List />}>
                <Route index element={<AllCategory />} />
              </Route>

              <Route path="activeserv" element={<List />}>
                <Route index element={<ActiveServiceproviders />} />
                <Route path=":id" element={<SingleServiceProvider />} />
              </Route>

              <Route path="inactiveserv" element={<List />}>
                <Route index element={<InActiveServiceproviders />} />

                <Route path=":id" element={<SingleServiceProvider />} />
              </Route>

              <Route path="orders" element={<List />}>
                <Route index element={<Orders />} />
              </Route>

              <Route path="rb" element={<List />}>
                <Route index element={<RecentBooking />} />
              </Route>

              <Route path="alor" element={<List />}>
                <Route index element={<AllOrders />} />
              </Route>

              <Route path="about" element={<List />}>
                <Route index element={<AboutUS />} />
              </Route>

              <Route path="contact" element={<List />}>
                <Route index element={<ContactUs />} />
              </Route>

              <Route path="add-cat" element={<List />}>
                <Route
                  index
                  element={
                    <Addcategory inputs={catInputs} title="Add New Category" />
                  }
                />
              </Route>
              <Route path="add-sub-cat" element={<List />}>
                <Route
                  index
                  element={
                    <AddSubcategory
                      inputs={subCatInputs}
                      title="Add New SubCategory"
                    />
                  }
                />
              </Route>
              <Route path="add-time" element={<List />}>
                <Route
                  index
                  element={
                    <AddTime
                      title="Add Timing"
                    />
                  }
                />
              </Route>

              <Route path="man-price" element={<List />}>
                <Route
                  index
                  element={
                    <AddPrice
                      title="Manage Price"
                    />
                  }
                />
              </Route>

              

              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
          ) : (
            <Route>
              <Route path="/" element={<Login/>}>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Login />}>
                </Route>
              </Route>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
