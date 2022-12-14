import React from "react";
import { useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import "./AdminPost.css";

const AdminPost = () => {
  const [postData, setPostData] = useState({});

  const handlePostData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const file = e.target.file.value;
    const description = e.target.description.value;

    const postDet = {
      name: name,
      price: price,
      img: file,
      des: description,
    };
    setPostData(postDet);
  };

  console.log(postData);
  return (
    <div style={{ backgroundColor: "blueviolet", minHeight: "100vh" }}>
      <AdminNav></AdminNav>
      <div className="post-container container">
        <div>
          <form
            onSubmit={handlePostData}
            className=""
            style={{ color: "white", paddingTop: "40px" }}
          >
            Product Name:
            <br /> <input type="text" name="name" required />
            <br />
            <br />
            Product Price:
            <br /> <input type="number" name="price" required />
            <br />
            <br />
            Image:
            <br /> <input type="text" name="file" id="" alt="" />
            <br />
            <br />
            Description: <br />{" "}
            <textarea name="description" id="" cols="30" rows="5"></textarea>
            <br />
            <br />
            <button type="submit" className="btn btn-success">
              Preview
            </button>
          </form>
        </div>

        <div>
          <div className="preview-post">
            <div style={{ padding: "8px" }}>
              <img
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "15px",
                }}
                src={postData.img? postData.img:""}
                alt=""
              />
            </div>
            <div style={{ padding: "12px" }}>
              {postData.name? postData.name:"Name"} <br />
              Price: {postData.price? postData.price:"Price"} BDT
              <br />
              Supplier: {postData.vendor? postData.vendor:"Vendor"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPost;
