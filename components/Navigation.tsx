import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import React from "react";

const Navigation = () => {
  const Logo = "/logo.svg";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* Text Logo - Use this if you don't have a graphic logo */}
        {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Sync</a> */}

        {/* Image Logo */}
        <a className="navbar-brand logo-image" href="/">
          <Image width="100%" height="100%" src={Logo} alt="alternative" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        {/* end of mobile menu toggle button */}

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#description">
                DESCRIPTION <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
                FEATURES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#screens">
                SCREENS
              </a>
            </li>
            <li className="nav-item">
              <Link href="/admin">
                <a
                  className="nav-link page-scroll"
                  // onClick={() => {
                  //   router.push("/admin");
                  // }}
                >
                  admin
                </a>
              </Link>
            </li>

            {/* Dropdown Menu*/}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle page-scroll"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EXTRA
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="article-details.html">
                  <span className="item-text">ARTICLE DETAILS</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="terms-conditions.html">
                  <span className="item-text">TERMS CONDITIONS</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="privacy-policy.html">
                  <span className="item-text">PRIVACY POLICY</span>
                </a>
              </div>
            </li>
            {/* end of dropdown menu */}
          </ul>
          <span className="nav-item">
            <a className="btn-outline-sm page-scroll" href="#download">
              DOWNLOAD
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
