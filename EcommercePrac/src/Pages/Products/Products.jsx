import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Product.css";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useMyContext } from "../../store/UseContext";

const Products = () => {
  const [getAllProducts, setGetAllProducts] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [serchFieldStore, setSearchFieldStore] = useState("");

  // GET ALL PRODUCT API HERE START

  const handleGetAllProducts = () => {
    axios
      .get(`${window.location.origin}/get-product`)
      .then((res) => {
        setGetAllProducts(res?.data);
        console.log(res?.data, "succesfull Res!");
      })
      .catch((err) => {
        console.log(err, "Err Responce");
      });
  };

  // GET ALL PRODUCT API HERE END

  //********************************** */

  // DELETE SINGLE PRODUCT API START HERE

  const handleDeleteProduct = (id) => {
    axios
      .delete(`${window.location.origin}/delete-product/${id}`)
      .then((res) => {
        console.log(res, "Sucess Res");
        handleGetAllProducts();
      })
      .catch((err) => {
        console.log(err, "Error Responce!");
      });
  };
  // DELETE SINGLE PRODUCT API END HERE

  //********************************** */

  // SEARCH  PRODUCT API START HERE
  const handleSearchProduct = () => {
    if (searchProduct) {
      axios
        .get(`${window.location.origin}/search-product/${searchProduct}`)
        .then((res) => {
          console.log(res?.data, "succes responce!");
          setSearchFieldStore(res?.data);
          handleGetAllProducts();
        })
        .catch((err) => {
          console.log(err, "Error Message !");
        });
    } else {
      console.log("User Not found");
    }
  };
  // SEARCH  PRODUCT API END HERE

  useEffect(() => {
    handleGetAllProducts();
    handleSearchProduct();
  }, [searchProduct, serchFieldStore]);

  console.log(searchProduct, "searchProduct");

  return (
    <div>
      <Navbar />
      <div className="Product-list-main">
        <div className="Product-list-Second">
          <div className="Product-heading-search">
            <div>
              <h2>All Product Here</h2>
            </div>
            <div className="Product-search-container">
              <input
                type="search"
                id="form1"
                placeholder="Search..."
                className="Product-search"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
              <FiSearch className="search-icon" />
            </div>
          </div>

          <div className="col-12 banner2-main-second">
            {/* FIRST LINE OF ALL SHOW CONTAINCER  */}

            {/* {serchFieldStore.length > 0 ? (
              <div className="banner2-shoes-main">
                {serchFieldStore.map(
                  (item) =>
                    item.gender === "male" && (
                      <div className="single-shoes" key={item._id}>
                        <div className="single-shoes-second">
                          <Link to={`/GetSingleGroup/${item._id}`}>
                            <img
                              style={{ backgroundSize: "cover" }}
                              src={`http://localhost:5000/${item.imageUrl}`}
                              alt="Product-image"
                            />
                          </Link>
                        </div>
                        <div className="picture-content-and-icons-main">
                          <div className="shoes-contect">
                            <span style={{ fontWeight: "bold" }}>
                              {item.name.length > 12
                                ? `${item.name.slice(0, 12)}...`
                                : item.name}
                            </span>
                            <span>{item.gender}</span>
                            <span>${item.price}</span>
                          </div>
                          <div>
                            <span className="Action-icons">
                              <MdDeleteForever
                                onClick={() => handleDeleteProduct(item?._id)}
                              />
                            </span>
                            <Link to={`/updateproduct/${item._id}`}>
                              <span className="Action-icons">
                                <FaEdit />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div className="banner2-shoes-main">
                {Array.isArray(getAllProducts) && (
                  <div className="banner2-shoes-main">
                    {getAllProducts.map(
                      (item) =>
                        item.gender === "male" && (
                          <div className="single-shoes" key={item._id}>
                            <div className="single-shoes-second">
                              <Link to={`/GetSingleGroup/${item._id}`}>
                                <img
                                  style={{ backgroundSize: "cover" }}
                                  src={`http://localhost:5000/${item.imageUrl}`}
                                  alt="Product-image"
                                />
                              </Link>
                            </div>
                            <div className="picture-content-and-icons-main">
                              <div className="shoes-contect">
                                <span style={{ fontWeight: "bold" }}>
                                  {item.name.length > 12
                                    ? `${item.name.slice(0, 12)}...`
                                    : item.name}
                                </span>
                                <span>{item.gender}</span>
                                <span>${item.price}</span>
                              </div>
                              <div>
                                <span className="Action-icons">
                                  <MdDeleteForever
                                    onClick={() =>
                                      handleDeleteProduct(item?._id)
                                    }
                                  />
                                </span>
                                <Link to={`/updateproduct/${item._id}`}>
                                  <span className="Action-icons">
                                    <FaEdit />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>
            )} */}
         <h4 style={{marginBottom : "0px" , textAlign : "center"}}>Men's Collections</h4>
            {Array.isArray(getAllProducts) && (
              <div className="banner2-shoes-main">
                {getAllProducts.map(
                  (item) =>
                    item.gender === "male" && (
                      <div className="single-shoes" key={item._id}>
                        <div className="single-shoes-second">
                          <Link to={`/GetSingleGroup/${item._id}`}>
                            <img
                              style={{ backgroundSize: "cover" }}
                              src={`${window.location.origin}/${item.imageUrl}`}
                              alt="Product-image"
                            />
                          </Link>
                        </div>
                        <div className="picture-content-and-icons-main">
                          <div className="shoes-contect">
                            <span style={{ fontWeight: "bold" }}>
                              {item.name.length > 12
                                ? `${item.name.slice(0, 12)}...`
                                : item.name}
                            </span>
                            <span>{item.gender}</span>
                            <span>${item.price}</span>
                          </div>
                          <div>
                            <span className="Action-icons">
                              <MdDeleteForever
                                onClick={() => handleDeleteProduct(item?._id)}
                              />
                            </span>
                            <Link to={`/updateproduct/${item._id}`}>
                              <span className="Action-icons">
                                <FaEdit />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            )}

            {/* SECOND LINE OF ALL SHOW CONTAINCER  */}
            <h4 style={{marginBottom : "0px" , textAlign : "center"}}>Women's Collections</h4>
            {Array.isArray(getAllProducts) && (
              <div className="banner2-shoes-main">
                {getAllProducts.map(
                  (item) =>
                    item.gender === "female" && (
                      <div className="single-shoes" key={item._id}>
                        <div className="single-shoes-second">
                          <Link to={`/GetSingleGroup/${item._id}`}>
                            <img
                              style={{ backgroundSize: "cover" }}
                              src={`${window.location.origin}/${item.imageUrl}`}
                              alt="Product-image"
                            />
                          </Link>
                        </div>
                        <div className="picture-content-and-icons-main">
                          <div className="shoes-contect">
                            <span style={{ fontWeight: "bold" }}>
                              {item.name.length > 10
                                ? `${item.name.slice(0, 12)}...`
                                : item.name}
                            </span>
                            <span>{item.gender}</span>
                            <span>${item.price}</span>
                          </div>
                          <div>
                            <span className="Action-icons">
                              <MdDeleteForever
                                onClick={() => handleDeleteProduct(item?._id)}
                              />
                            </span>
                            <Link to={`/updateproduct/${item._id}`}>
                              <span className="Action-icons">
                                <FaEdit />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
