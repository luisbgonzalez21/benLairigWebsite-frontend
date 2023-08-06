import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.png";
import Homepage from "../../pages/Homepage";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      {(menuOpened===false && mobile===true)? (
        <div
          style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to='/'
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/committee"
              spy={true}
              smooth={true}
            >
              Meet The Team
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/trips"
              spy={true}
              smooth={true}
            >
              Trips
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/gears"
              spy={true}
              smooth={true}
            >
              Gear
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
