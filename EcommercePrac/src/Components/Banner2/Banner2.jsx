import React, { useEffect, useState } from "react";
import "./Banner.css";
import shoes1 from "../../images/pants1-removebg-preview.png";
import shoes2 from "../../images/pants2-removebg-preview.png";
import shoes3 from "../../images/pants3-removebg-preview.png";
import axios from "axios";

const Banner2 = () => {
  const [setAllProducts, setGetAllProducts] = useState("");

  useEffect(() => {
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
    handleGetAllProducts();
  }, []);
  console.log(setAllProducts, "setGetAllProducts");
  return (
    <>
      <div className="row banner2-main">
        <div className="col-12">
          <div className="banner2-main-first">
            <h1>Featured Products</h1>
          </div>

          <div className="col-12 banner2-main-second">
            {/* FIRST LINE OF ALL SHOW CONTAINCER  */}
            {Array.isArray(setAllProducts) && (
              <div className="banner2-shoes-main">
                {setAllProducts
                  .filter((item) => item.gender === "male")
                  .slice(0, 5)
                  .map((item) => (
                    <div className="single-shoes" key={item._id}>
                      <div className="single-shoes-second">
                        <img
                          style={{ backgroundSize: "cover" }}
                          src={`${window.location.origin}/${item.imageUrl}`}
                          alt="Product-image"
                        />
                      </div>
                      <div className="shoes-contect">
                        <span style={{ fontWeight: "bold" }}>
                          {item.name}
                          {console.log(item, "item")}
                        </span>
                        <span>{item.gender}</span>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* SECOND LINE OF ALL SHOW CONTAINCER  */}
            {Array.isArray(setAllProducts) && (
              <div className="banner2-shoes-main">
                {setAllProducts
                  .filter((item) => item.gender === "female")
                  .slice(0, 5)
                  .map((item) => (
                    <div className="single-shoes" key={item._id}>
                      <div className="single-shoes-second">
                        <img
                          style={{ backgroundSize: "cover" }}
                          src={`${window.location.origin}/${item.imageUrl}`}
                          alt="Product-image"
                        />
                      </div>
                      <div className="shoes-contect">
                        <span style={{ fontWeight: "bold" }}>{item.name}</span>
                        <span>{item.gender}</span>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
