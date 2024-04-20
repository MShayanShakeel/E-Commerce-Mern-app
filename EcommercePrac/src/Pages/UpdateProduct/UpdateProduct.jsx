import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { MdOutlineAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";

const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [catogary, setCatogary] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
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
        setProductName(res.data?.name);
        setPrice(res.data?.price);
        setCatogary(res.data?.catogary);
        setCompany(res.data?.compony);
        setDescription(res.data?.description);
        setGender(res.data?.gender);
        setImage(res.data);
        console.log(res.data, "sucessfull resp");
      })
      .catch((err) => {
        console.log(err, "Error Responce!");
      });
  };

  const handleUpdateProduct = () => {
    const data = {
      name: productName,
      price: price,
      catogary: catogary,
      compony: company,
    };
    axios
      .put(`${window.location.origin}/update-Product/${params?.id}`, data)
      .then((res) => {
        console.log(res, "successfull Res");
        navigate("/Products");
      })
      .catch((err) => {
        console.log(err, "Error Res!");
      });
  };

  useEffect(() => {
    handleGetSingleGroup();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <>
          <div className="row Get-singel-product-main">
            <h2 style={{ textAlign: "center" }}>Update Product</h2>

            <div className="col-6">
              <div className="input-wrapper Product-Name-class">
                <input
                  style={{ textAlign: "center" }}
                  type="text"
                  name="ProductName"
                  placeholder="Product Name"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="input-wrapper" style={{ border: "none" }}>
                {/* <input
                  name="company"
                  placeholder="company"
                  required
                 
                /> */}
                <p> {description}</p>
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
                    value={`$ ${price}`}
                    onChange={(e) => setPrice(e.target.value)}
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
                    value={catogary}
                    onChange={(e) => setCatogary(e.target.value)}
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
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
                    value={gender}
                    // onChange={(e) => setDescription(e.target.value)}
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
                <button
                  className="Update-button-class"
                  type="submit"
                  onClick={() => handleUpdateProduct()}
                >
                  Update
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
                  src={`${window.location.origin}/${image.imageUrl}`}
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

export default UpdateProduct;
