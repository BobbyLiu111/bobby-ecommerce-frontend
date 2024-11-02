import React from "react";
import instagram1 from "../assets/instagram-1.jpg";
import instagram2 from "../assets/instagram-2.jpg";
import instagram3 from "../assets/instagram-3.jpg";
import instagram4 from "../assets/instagram-4.jpg";
import instagram5 from "../assets/instagram-5.jpg";
import instagram6 from "../assets/instagram-6.jpg";

function Footer() {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            17th Ave NE, Seattle, WA
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            liu.guoy@northeastern.edu
          </p>
          <p>
            <span>
              <i className="ri-phone-line"></i>
            </span>
            (+01) 206-499-2411
          </p>
        </div>
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Work With us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Teams & Condition</a>
        </div>
        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <a href="/">Help</a>
          <a href="/">Track your order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={instagram1} alt="" />
            <img src={instagram2} alt="" />
            <img src={instagram3} alt="" />
            <img src={instagram4} alt="" />
            <img src={instagram5} alt="" />
            <img src={instagram6} alt="" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2024 by Bobby. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
