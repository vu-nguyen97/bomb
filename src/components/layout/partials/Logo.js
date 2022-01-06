import React from "react";
import { Link } from "react-router-dom";
import bigLogo from "../../../assets/images/logos/big-logo.png";
import logo from "../../../assets/images/logos/logo.png";

const Logo = ({ className, width, isBigLogo = true }) => {
  const imgWidth = width || 110;

  return (
    <Link to="/" className={className}>
      <img src={isBigLogo ? bigLogo : logo} alt="logo" width={imgWidth} />
    </Link>
  );
};

export default Logo;
