import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink activeClassName="active_class" to="/">
            Home
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="active_class" to="/services">
            Services
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="active_class" to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="active_class" to="/about">
            About
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="active_class" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="app__navbar-login"></div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <NavLink
                  activeClassName="active_class"
                  to="/"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="active_class"
                  to="/services"
                  onClick={() => setToggleMenu(false)}
                >
                  Services
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="active_class"
                  to="/gallery"
                  onClick={() => setToggleMenu(false)}
                >
                  Gallery
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="active_class"
                  to="/about"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="active_class"
                  to="/contact"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
