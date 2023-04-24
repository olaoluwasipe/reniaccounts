import React from 'react';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="container">
        <div className="links">
          <ul className="linker">
            <h3>Products</h3>
            <li><a href="#">ReniTrust</a></li>
            <li><a href="#">ReniStore</a></li>
            <li><a href="#">ReniPay</a></li>
          </ul>
          <ul className="linker">
            <h3>Company</h3>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FaQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
          <ul className="linker">
            <h3>Discover</h3>
            <li><a href="#">For Store Owners</a></li>
            <li><a href="#">For Freelancers</a></li>
            <li><a href="#">For Entrepreneurs</a></li>
          </ul>
          <ul className="linker">
            <h3>Legal</h3>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Copyright</a></li>
          </ul>
          <ul className="linker">
            <h3>Contact Us</h3>
            <li><a href="tel:2348037837313">Call Us</a></li>
            <li><a href="hello@reniaccounts.com">Email Us</a></li>
            <li><a href="#">Help Desk</a></li>
          </ul>
        </div>

        <div className="copyrightSect">
          <p>Copyright © FireSwitch Technologies Ltd. {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
