import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singup from "./Pages/SingUP/Singup";
import Login from "./Pages/SingUP/Login/Login";
import Home from "./Pages/Home/Home";
import PrivateComponent from "./PrivateComponent/PrivateComponent";
import AddProduct from "./Pages/AddProducts/AddProduct";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import GetSingleGroup from "./Pages/GetSingleGroup/GetSingleGroup";
import { MyContextProvider } from "../src/store/UseContext";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct";
import Offers from "./Pages/Offers/Offers";

function App() {
  return (
    <>
      <MyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/GetSingleGroup/:id" element={<GetSingleGroup />} />
              <Route path="/updateproduct/:id" element={<UpdateProduct />} />
              <Route path="/About" element={<About />} />
              <Route path="/Offers" element={<Offers />} />
              <Route path="/Products" element={<Products />} />
            </Route>
            <Route path="/singup" element={<Singup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </>
  );
}

export default App;
