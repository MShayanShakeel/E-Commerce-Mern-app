import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./AddProduct.css";
import axios from "axios";
import UserHerders from "../../UserHerders";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const AddProduct = () => {
  const validUser = JSON.parse(localStorage.getItem("user"))?._id;
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [catogary, setCatogary] = useState("");
  const [company, setCompany] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [errorMsg, setErrrorMsg] = useState(false);
  console.log(company, productName, price, catogary);


  

  const handleAddProduct = () => {
    if (!productName || !price || !catogary || !company) {
      setErrrorMsg(true);
      return;
    }
    const formdata = new FormData();
    formdata.append("name", productName);
    formdata.append("images", productImage);
    formdata.append("description", description);
    formdata.append("gender", gender);
    formdata.append("price", price);
    formdata.append("catogary", catogary);
    formdata.append("compony", company);
    formdata.append("usertId", validUser);
    console.log(formdata, "formdata");
    axios
      .post(
        `${window.location.origin}/add-product`,
        // {
        //   headers: {
        //     authorization: `Bearer ${JSON.parse(
        //       localStorage.getItem("token")
        //     )}`,
        //   },
        // },
        formdata
      )
      .then((res) => {
        console.log(res, "Succes Responce!");
        alert("add product Succesfull");
        // toast.success("add product Succesfull");
      })
      .catch((err) => {
        console.log(err, "Err Responce");
        alert("NOt add product ");
        toast.error("not add ")
      });
  };

  console.log(productImage, gender, "productImage");
  return (
    <div>
      <Navbar />
      <>
        <div className="Add-product-main">
          <div className="signup-form">
            <h2>Add Product</h2>
            <form action="#">
              <input
                type="text"
                name="ProductName"
                placeholder="Product Name"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              {errorMsg && !productName && (
                <span className="error-message">Enter you Product Name</span>
              )}
              <input
                type="text"
                name="Price"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <select
                className="product-add-gender-dropdown-box"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" style={{ color: "#CCCCCC" }}>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <input
                type="text"
                name="company"
                placeholder="Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {errorMsg && !price && (
                <span className="error-message">Enter you Product Price</span>
              )}
              <input
                type="text"
                name="catogary"
                placeholder="catogary"
                required
                value={catogary}
                onChange={(e) => setCatogary(e.target.value)}
              />
              {errorMsg && !catogary && (
                <span className="error-message">
                  Enter you Product Catogary
                </span>
              )}
              <input
                type="text"
                name="company"
                placeholder="company"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

              <input
                style={{ marginBottom: "10px" }}
                type="file"
                name="company"
                placeholder="File"
                required
                onChange={(e) => setProductImage(e.target.files[0])}
              />

              {errorMsg && !company && (
                <span className="error-message">
                  {" "}
                  Enter you Product Company
                </span>
              )}
              <button type="submit" onClick={() => handleAddProduct()}>
                Save
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddProduct;
