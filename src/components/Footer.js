import "./footer.css";
import React from "react";

const Footer = (props) => {
  const handleUnderConstruction = function () {
    alert("This Section is Currently under construction, will update soon.");
  };

  return (
    <div className="footer" onClick={handleUnderConstruction}>
      <ul className="rows">
        <h3>Orders</h3>
        <li>Shipping</li>
        <li>Returns + Exchanges</li>
        <li>Account</li>
        <li>Gift Cards</li>
        <li>Customer Care</li>
        <li>FAQs</li>
      </ul>
      <ul className="rows">
        <h3>Customer Care</h3>
        <li>Rewards</li>
        <li>Product Care</li>
        <li>FAQs</li>
        <li>Help Guide</li>
        <li>Contact</li>
      </ul>
      <ul className="rows">
        <h3>Company</h3>
        <li>Our Story</li>
        <li>Giving Back Progrm</li>
        <li>Media + Press</li>
        <li>Jobs</li>
      </ul>
      <div className="rows iconsFooter">
        <i className="large facebook icon"></i>
        <br />
        <i className="large instagram icon"></i>
        <br />
        <i className="large pinterest icon"></i>
        <br />
        <i className="large twitter icon"></i>
      </div>
      <div className="rows customerLetter">
        <h3>We want you on our list!</h3>
        <p>
          Did we just become best friends? Drop us your email for updates,
          access to exclusive deals, and more!{" "}
        </p>

        <input
          className="footerInput"
          type="text"
          name="name"
          placeholder="Enter your Email Address here"
        />
      </div>
    </div>
  );
};

export default Footer;
