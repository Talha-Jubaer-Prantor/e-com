import React, { useState } from "react";
import "./Cart.css"
import OtherNavbar from "../Navbar/OtherNavbar";

const Cart = () => {


    const products=[
        {
            "name":"product-1",
            "price":20,
            "vendor":"vendor-1",
            "img":"https://fabrilife.com/image-gallery/61a794e179a32-square.jpg"
        },{
            "name":"product-2",
            "price":20,
            "vendor":"vendor-2",
            "img":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },{
            "name":"product-3",
            "price":20,
            "vendor":"vendor-3",
            "img":"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]


   
  return (
    <div>
      <OtherNavbar></OtherNavbar>
    <div className="cart-container ">
        <div className="cart-items container">   
        {
            products.map(product=>
                <div className="item" key={product.name}>
                   <span> 
                        <img style={{height:"100px",width:"100px"}} src={product.img} alt="" />
                    </span>
                    <span style={{color:"white"}} > 
                        {product.name} <br />
                        {product.price} BDT <br />
                        <label style={{color:"white"}} for="quantity">Quantity: </label>
                        <input style={{width:"45px",borderRadius:"5px",border:"none",marginLeft:"5px"}} type="number" name="quantity" required/>
                    </span>
                    <span>
                        <button type="button" class="btn btn-danger">Delete Item</button>
                    </span>

                </div>
                )
        }
        </div>



        <div className="cart-expenses">
            <h3>Expense</h3><br />
            <h5>Total Amount : {}</h5>
            
        </div>

    </div>

    </div>
  );
};

export default Cart;
