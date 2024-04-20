import React, { useEffect, useState } from "react";
import "./GetSingleGroup.css";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserHerders from "../../UserHerders";
import Footer from "../../Components/Footer/Footer";
import { MdOutlineAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";

const GetSingleGroup = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [allProduct, setAllProduct] = useState("");
  const [productItemsCount, setProductItemsCount] = useState(1);

  const handleProductAdd = () => {
    setProductItemsCount(productItemsCount + 1);
  };
  const handleProductSub = () => {
    if (productItemsCount > 1) {
      setProductItemsCount(productItemsCount - 1);
    }
  };

  const handleGetSingleGroup = () => {
    axios
      .get(`${window.location.origin}/get-single-group/${params?.id}`)
      .then((res) => {
        setAllProduct(res.data);
        console.log(res.data, "sucessfull resp");
      })
      .catch((err) => {
        console.log(err, "Error Responce!");
      });
  };

  useEffect(() => {
    handleGetSingleGroup();
  }, []);
  console.log(allProduct, "allProduct");
  return (
    <>
      <div>
        <Navbar />
        <>
          <div className="row Get-singel-product-main">
            <h2 style={{ textAlign: "center" }}>Product Details</h2>

            <div className="col-6">
              <div className="input-wrapper Product-Name-class">
                <input
                  style={{ textAlign: "center" }}
                  type="text"
                  name="ProductName"
                  placeholder="Product Name"
                  required
                  value={allProduct?.name}
                />
              </div>
              <div className="input-wrapper" style={{ border: "none" }}>
                <p> {allProduct?.description}</p>
              </div>
              <div className="input-wrapper">
                <div>
                  <label>Price</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="Price"
                    placeholder="Price"
                    required
                    value={`$ ${allProduct?.price}`}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div>
                  <label>Catogary</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="catogary"
                    placeholder="catogary"
                    required
                    value={allProduct?.catogary}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div>
                  <label>Company Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="company"
                    required
                    value={allProduct?.company}
                  />
                </div>
              </div>

              <div className="input-wrapper">
                <div>
                  <label>Gender</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="Gender"
                    placeholder="company"
                    required
                    value={allProduct?.gender}
                  />
                </div>
              </div>

              <div className="input-wrapper">
                <div>
                  <label>Quality</label>
                </div>
                <div className="Product-add-sub-button">
                  <MdOutlineAdd onClick={handleProductAdd} />{" "}
                  {productItemsCount}
                  <GrFormSubtract onClick={handleProductSub} />
                </div>
              </div>

              <div>
                <button className="Update-button-class" type="submit">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="col-6">
              <div>
                <img
                  style={{
                    width: "100%",
                    maxHeight: "85vh",
                    backgroundSize: "cover",
                    boxShadow: "0 0 0 1px #F4F4F4",
                    borderRadius: "5px",
                  }}
                  src={`${window.location.origin}/${allProduct?.imageUrl}`}
                  alt="Product-image"
                />
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default GetSingleGroup;
