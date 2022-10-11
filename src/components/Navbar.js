import React from "react";
import { Outlet } from "react-router-dom";
// style
import "../styles/Navbar.css";
// icons
import {
  SearchOutlined,
  ShoppingBagOutlined,
  MenuRounded,
} from "@mui/icons-material";
// component imports
import Footer from "./Footer";

function Navbar() {
  return (
    <div>
      <div className="My-Navbar">
        <div className="My-Navbar-Links">
          {/* Responsive Menu */}
          <input type={"checkbox"} id="chkbx" />
          <label for="chkbx" className="chkboxIcon">
            <MenuRounded />
          </label>
          {/* Responsive Menu */}
          {/* Apple Icon */}
          <a
            href=""
            style={{
              fontFamily: "Baskerville Old Face",
              fontSize: 22,
              fontWeight: "500",
            }}
            className="My-Navbar-Brand"
          >
            
          </a>
          <div className="My-Navbar-Links-A">
            <a href="">Store</a>
            <a href="">Mac</a>
            <a href="">iPad</a>
            <a href="">iPhone</a>
            <a href="">Watch</a>
            <a href="">AirPods</a>
            <a href="">TV & Home</a>
            <a href="">Only on Apple</a>
            <a href="">Accessories</a>
            <a href="">Support</a>
          </div>
          <div className="My-Navbar-Links">
            <a href="" className="SearchIcon">
              <SearchOutlined />
            </a>
            <a href="">
              <ShoppingBagOutlined />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navbar;
