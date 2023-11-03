import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
          </div>
          <div className="item">
            <h2>About Us</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
          </div>
          {/*<div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
  </div> */}
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            
          
        
          </div>
         {/* <div className="item">
            <h2>More Abous us</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Logo Maker</span>
            <span>Fiverr Guides</span>
            <span>Get Inspired</span>
            <span>Fiverr Select</span>
            <span>ClearVoice</span>
            <span>Fiverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
</div> */}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Skilldrift</h2>
            <span>© Made in India</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              {/*<img src="" alt="" /> */}
              <span>&#x20A8;</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
