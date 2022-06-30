import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/singleshower/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { subCatInputs,catInputs } from "./temp/formSource";
import "./style/dark.scss";
import { useContext,useState } from "react";
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
  const [loginStatus, setloginStatus] = useState(true)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
            {/* Home Route */}
              
            {loginStatus?(

                <Route path="/">
                <Route index element={<Home />} />
     
                 
                <Route path="users" element={<List/>}>
                   <Route index element={<Allusers/>} /> 
                 
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
     
                 
     
     
                 <Route path="add-cat" element={<List/>}>
                  <Route index element={<Addcategory inputs={catInputs} title="Add New Category" />}/>
                 </Route>
                 <Route path="add-sub-cat" element={<List/>}>
                  <Route index element={<AddSubcategory inputs={subCatInputs} title="Add New SubCategory"/>}/>
                 </Route>
                    
       
                 <Route path="*" element={<h1>Not Found</h1>}/>
               </Route>
              
            ):(
              <Route>
              <Route path="/" element={<h1>Please Login First</h1>} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<h1>Not Found</h1>}/>
              </Route>
            )}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
