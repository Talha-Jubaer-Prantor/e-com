import React from "react";
import { Link } from "react-router-dom";
import OtherNavbar from "../Navbar/OtherNavbar";
import "./Vendor.css";

const Vendor = () => {
  const products = [
    {
      name: "product-1",
      price: 20,
      vendor: "vendor-1",
      img: "https://fabrilife.com/image-gallery/61a794e179a32-square.jpg",
    },
    {
      name: "product-2",
      price: 20,
      vendor: "vendor-2",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "product-3",
      price: 20,
      vendor: "vendor-3",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "product-4",
      price: 20,
      vendor: "vendor-4",
      img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="vendor">
      <OtherNavbar></OtherNavbar>
      
      <div style={{ color: "white", marginLeft: "2%" }}>
        <h1>Vendor Name</h1>

        <div className="vendor-health container">
          <div className="vendor-health-content"> Vendor Ratings : 10/10 </div>
          <div className="vendor-health-content">
            {" "}
            Customar Satisfiction: 10/10{" "}
          </div>
          <div className="vendor-health-content">
            {" "}
            Product Condition : Very Good{" "}
          </div>
          <div className="vendor-health-content">
            {" "}
            Authenticty Rating: Very Good{" "}
          </div>
        </div>

        <div className="product-container container">
          {products.map((product) => (
            <Link
              to="/productdetails"
              className="product-box"
              state={product}
              key={product.img}
            >
              <div style={{ padding: "8px" }}>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "15px",
                  }}
                  src={product.img}
                  alt=""
                />
              </div>
              <div style={{ padding: "12px" }}>
                {product.name} <br />
                Price: {product.price} BDT
                <br />
                Supplier: {product.vendor}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendor;
