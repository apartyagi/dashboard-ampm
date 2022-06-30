import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/singleshower/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { subCatInputs,catInputs } from "./temp/formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Allusers from "./components/lister/users/Allusers";
import AllCustomer from "./components/lister/customer/AllCustomer";
import AllCategory from "./components/lister/category/AllCategory";
import AllServiceprovider from "./components/lister/serviceprovider/AllServiceprovider";
import AllSubcategory from "./components/lister/subcategory/AllSubcategory"
import Addcategory from './components/adder/category/Addcategory'
import AddSubcategory from './components/adder/subcategory/AddSubcategory'
import SingleCustomer from "./pages/singleshower/singlecustomer/SingleCustomer";
import SingleServiceProvider from "./pages/singleshower/sinlgleserviceprovider/SingleServiceProvider";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
            {/* Home Route */}
          <Route path="/">
           <Route index element={<Home />} />

            {/* Lister path Route End */}
           <Route path="users" element={<List/>}>
              <Route index element={<Allusers/>} /> 
              {/* <Route path=":use" element={<Single />} /> */}
            </Route>

          <Route path="customer" element={<List/>}>
            <Route index element={<AllCustomer/>} />
            <Route path=":id" element={<SingleCustomer/>}/>
          </Route>

          <Route path="serviceprovider"  element={<List/>}>
            <Route index element={<AllServiceprovider/>}/>
            <Route path=":id" element={<SingleServiceProvider/>}/>
          </Route>

          <Route path="category"  element={<List/>}>
            <Route index element={<AllCategory/>}/>
            <Route path=":id" element={<Single/>}/>
          </Route>


          <Route path="subcategory"  element={<List/>}>
            <Route index element={<AllSubcategory/>}/>
            <Route path=":id" element={<Single/>}/>
          </Route>

            {/* Lister path Route End */}


            <Route path="add-cat" element={<List/>}>
             <Route index element={<Addcategory inputs={catInputs} title="Add New Category" />}/>
            </Route>
            <Route path="add-sub-cat" element={<List/>}>
             <Route index element={<AddSubcategory inputs={subCatInputs} title="Add New SubCategory"/>}/>
            </Route>
                
  
          </Route>
          {/* Home Route  END*/}
          
          <Route path="login" element={<Login />} />

          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
