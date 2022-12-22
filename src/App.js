import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Customer/About/About";
import AdminHome from "./components/Admin/AdminHome/AdminHome";
import AdminPost from "./components/Admin/AdminPost/AdminPost";
import AdminProduct from "./components/Admin/AdminProduct/AdminProduct";
import Cart from "./components/Customer/Cart/Cart";
import Home from "./components/Customer/Home/Home";
import Login from "./components/Customer/Login/Login";
import ProductDet from "./components/Customer/ProductDetails/ProductDet";
import Signup from "./components/Customer/SignUp/Signup";
import Vendor from "./components/Customer/Vendor/Vendor.js";
import Other from "./components/Customer/Other/Other";
import AdminSignup from "./components/Admin/AdminSignUp/AdminSignup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/productdetails"element={<ProductDet></ProductDet>}></Route>
        <Route path="/vendor" element={<Vendor></Vendor>}></Route>
        <Route path="/other" element={<Other></Other>}></Route>

        {/* Admin section below */}

        <Route path="/adminsignup" element={<AdminSignup></AdminSignup>}></Route>
        <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
        <Route path="/admin/product" element={<AdminProduct></AdminProduct>}></Route>
        <Route path="/admin/post" element={<AdminPost></AdminPost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
