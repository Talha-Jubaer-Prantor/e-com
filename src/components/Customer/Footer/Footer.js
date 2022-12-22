import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
<div class="footer">
  <div class="inner-footer">

    <div class="footer-items">
      <h1>Company</h1>
      <p>Description of any product or motto of the company.</p>
    </div>

    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div>
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/"><li>Search</li></a>
          <a href="/"><li>Contact</li></a>
          <a href="/"><li>About</li></a>
        </ul>
    </div>

    <div class="footer-items">
      <h3>Services</h3>
      <div class="border1"></div>  
        <ul>
          <a href="/"><li>Mirpur</li></a>
          <a href="/"><li>Kallyanpur</li></a>
          <a href="/"><li>Mohammadpur</li></a>
        </ul>
    </div>

    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
        </ul> 
      
        <div class="social-media">
          <a href="/"><i class="fab fa-instagram"></i></a>
          <a href="/"><i class="fab fa-facebook"></i></a>
          <a href="/"><i class="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  
  <div class="footer-bottom">
    Copyright &copy; company 2020.
  </div>
</div>
  



        </div>
    );
};

export default Footer;