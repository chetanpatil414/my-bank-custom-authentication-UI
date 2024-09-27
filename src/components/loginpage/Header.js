import React from "react";
import "/Users/chetanpatil/ReactJs/live-bank-project/src/styles/Header.css";
import logo from "/Users/chetanpatil/ReactJs/live-bank-project/src/assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img alt="Live Bank of India Logo" src={logo} />
      <h1>Live Bank of India | Online</h1>
    </div>
  );
};

export default Header;
