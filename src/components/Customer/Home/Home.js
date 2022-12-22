import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const products = [
    {
      name: "T-Shirt",
      price: 200,
      vendor: "vendor-1",
      img: "https://fabrilife.com/image-gallery/61a794e179a32-square.jpg",
    },
    {
      name: "Watch",
      price: 1500,
      vendor: "vendor-2",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Camera",
      price: 54000,
      vendor: "vendor-3",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Toy Car",
      price: 2500,
      vendor: "vendor-4",
      img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>

      <div className="home">
        
        <div className="home-category">
            
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
