import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../Components/Logo/Logo";
import HeaderLinksData from "../../Data/HeaderLinksData";
import { Link, NavLink } from "react-router-dom";
import { FaSquareInstagram, FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  
  const {userInfo} = useSelector((state) => state.userLogin)

  const [scrolled, setScrolled] = useState(false);

  const scrolledHeader = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolledHeader);

    return () => {
      window.removeEventListener("scroll", scrolledHeader);
    };
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header_wrapper">
        <div className="header_content">
          <div className="header_left">
            <Link to={"/"} className="header_logo">
              <Logo />
            </Link>
            <div className="header_links">
              {HeaderLinksData.map((link, index) => (
                <NavLink to={link.link} className="header_link" key={index}>
                  <span>{link.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="header_media_content">
            <div className="header_medias">
              <Link
                target="_blank"
                to={"#"}
                className="header_media"
              >
                <FaSquareInstagram />
              </Link>
              <Link
                to={ userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login" }
                className="header_media"
              >
                <FaUser />
              </Link>
              <button
                to={"#"}
                className="header_media"
              >
                <FaHeart />
              </button>
            </div>
            <Link className="header_call" to="#">
              <span>0600142498</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
