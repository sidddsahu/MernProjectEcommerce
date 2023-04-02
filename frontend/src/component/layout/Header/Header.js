import React from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/new.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
  

<nav style={{height:"10vh"}} className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img  src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" ata-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent ">
      <ul className="navbar-nav me-auto mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex align-items-centre mt-3 " role="search">
      <p className="nav-item list-style-none">
          <Link className="nav-link " to="/search"><i  class="ri-search-eye-line"></i></Link>
        </p>

        <p className="nav-item list-style-none">
          <Link className="nav-link " to="/cart"><i class="ri-shopping-cart-2-fill"></i></Link>
        </p>
        <p className="nav-item list-style-none">
          <Link className="nav-link " to="/account"><i class="ri-user-2-fill"></i></Link>
        </p>
      </form>
    </div>
  </div>
</nav>

)

};


export default Header;
