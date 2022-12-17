import React from 'react';
import { useLocation } from 'react-router-dom';
import OtherNavbar from '../Navbar/OtherNavbar';
import "./ProductDet.css"

const ProductDet = () => {
    const location = useLocation()
    const item = location.state
    console.log(item)
    return (
        <div>
            <OtherNavbar></OtherNavbar>

            <div style={{backgroundColor:"blueviolet"}}>

                <div className='container'>
                <h1><a href="/"  style={{color:"white",textDecoration:"none"}}> Vendor </a></h1>
                </div>
                
                <div className='productdet-container container text-white'>
                    <div>
                        <img style={{width:"100%",padding:"15px"}} src={item.img} alt="" />
                    </div>
                    <div className='det'>
                        <h3>{item.name}</h3><br />
                        <h4>{item.price} BDT</h4><br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam est eum, consequatur magnam, alias sit quasi perferendis qui quis veritatis repellendus voluptate nobis repudiandae aspernatur nulla totam nihil esse?
                        </p>
                        <button style={{marginTop:"50px",backgroundColor:"#0ea40e"}} type="button" class="btn">Add to cart</button>
                    </div>



                </div>



            </div>


            
        </div>
    );
};

export default ProductDet;