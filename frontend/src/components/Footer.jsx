import React from "react";
import instaImg1 from "../assets/instagram-1.jpg";
import instaImg2 from "../assets/instagram-2.jpg";
import instaImg3 from "../assets/instagram-3.jpg";
import instaImg4 from "../assets/instagram-4.jpg";
import instaImg5 from "../assets/instagram-5.jpg";
import instaImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>About Us</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            Tokha, Kathmandu
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            9849953672
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@YourStore.com
          </p>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer__col">
          <h4>Follow Us</h4>
          <a href="/">
            <i className="ri-facebook-fill"></i>facebook
          </a>
          <a href="/">
            <i className="ri-instagram-fill"></i>Instagram
          </a>
          <a href="/">
            <i className="ri-twitter-fill"></i>Twitter
          </a>
          <a href="/">
            <i className="ri-pinterest-fill"></i>Pinterest
          </a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={instaImg1} alt="footer image" />
            <img src={instaImg2} alt="footer image" />
            <img src={instaImg3} alt="footer image" />
            <img src={instaImg4} alt="footer image" />
            <img src={instaImg5} alt="footer image" />
            <img src={instaImg6} alt="footer image" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright @2025 YourStore. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
