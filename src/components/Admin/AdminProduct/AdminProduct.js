import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import "./AdminProduct.css"

const AdminHome = () => {
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
        },{
            "name":"product-4",
            "price":20,
            "vendor":"vendor-4",
            "img":"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },{
            "name":"product-4",
            "price":20,
            "vendor":"vendor-4",
            "img":"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
    ]
    return (
        <div style={{backgroundColor:"blueviolet",minHeight:"100vh"}}>
            <AdminNav></AdminNav>
            
            <div style={{paddingTop:"30px"}} className='products'>

            <div className='admin-product-box-container'>
                {
                    products.map(product=>  
                    <div className='admin-product-box'  key={product.img} >
                        <div style={{padding:"8px"}}><img style={{height:"200px",width:"200px",borderRadius:"15px"}} src={product.img} alt=""/></div>
                        <div style={{padding:"12px"}}>
                            {product.name} <br />
                            Price: {product.price} BDT<br />
                            Supplier: {product.vendor}
                        </div>
                        <button type="button" class="btn btn-info">Edit</button>
                        <button type="button" class="btn btn-danger">Stock Out</button>
                    </div>)
                }
            </div>



            </div>




        </div>
    );
};

export default AdminHome;