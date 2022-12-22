import React from 'react';
import OtherNavbar from '../Navbar/OtherNavbar';
import "./Other.css"

const Other = () => {
    return (
        <div style={{alignItems:"center",backgroundColor:"blueViolet",minHeight:"100vh" }}>
            <OtherNavbar></OtherNavbar>
            <div>
                <button className='btn btn-success'>Become a vendor</button>
            </div>
        </div>
    );
};

export default Other;