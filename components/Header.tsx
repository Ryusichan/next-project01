import Image from "next/image";
import React from "react";

const Header = () => {
  const mainImg = "/header-iphone.jpg";
  const WhiteCircle = "/decorative-white-circle.svg";
  const BlueCircle = "/decorative-blue-circle.svg";
  const YellowCircle = "/decorative-yellow-circle.svg";
  const GreenDiamond = "/decorative-green-diamond.svg";

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <h1>Mobile App Landing Page</h1>
              <p className="p-large p-heading">
                Start focusing on your goals and get more things done with Sync
                mobile application. It's the first app to harness the power of
                social connections to help you stay focused and get organized
              </p>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-apple"></i>DOWNLOAD
              </a>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-google-play"></i>DOWNLOAD
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <img
                // layout="raw"
                className="img-fluid"
                src={mainImg}
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="deco-white-circle-1">
        <img src={WhiteCircle} alt="alternative" />
      </div>
      <div className="deco-white-circle-2">
        <img src={WhiteCircle} alt="alternative" />
      </div>
      <div className="deco-blue-circle">
        <img src={BlueCircle} alt="alternative" />
      </div>
      <div className="deco-yellow-circle">
        <img src={YellowCircle} alt="alternative" />
      </div>
      <div className="deco-green-diamond">
        <img src={GreenDiamond} alt="alternative" />
      </div>
    </header>
  );
};

export default Header;
