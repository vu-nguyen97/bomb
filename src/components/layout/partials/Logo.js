import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/landing-page/logo.png";

const Logo = ({ className, width }) => {
  const imgWidth = width || 110;

  return (
    <Link to="/" className={className}>
      <img src={logo} alt="logo" width={imgWidth} />
    </Link>
  );
};

export default Logo;
