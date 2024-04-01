import React, { useState } from "react";
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaHandPointLeft } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../Redux/Actions/UserActions";
import toast from "react-hot-toast";

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  // Logout function
  const logoutHandler = () => {
    dispatch(logoutAction());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  const sidebarLinks = userInfo?.isAdmin
    ? [
        {
          title: "Dashboard",
          link: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Meal list",
          link: "/meal-list",
          icon: <GiHotMeal />,
        },
        {
          title: "Add meal",
          link: "/add-meal",
          icon: <GiMeal />,
        },
        {
          title: "Categories",
          link: "/categories",
          icon: <HiViewGridAdd />,
        },
        {
          title: "Users",
          link: "/users",
          icon: <FaUser />,
        },
        {
          title: "Update profile",
          link: "/profile",
          icon: <IoSettings />,
        },
        {
          title: "Favorite meals",
          link: "/favorites",
          icon: <FaHeart />,
        },
        {
          title: "Change password",
          link: "/password",
          icon: <RiLockPasswordFill />,
        },
      ]
    : userInfo
    ? [
        {
          title: "Update profile",
          link: "/profile",
          icon: <IoSettings />,
        },
        {
          title: "Favorite meals",
          link: "/favorites",
          icon: <FaHeart />,
        },
        {
          title: "Change password",
          link: "/password",
          icon: <RiLockPasswordFill />,
        },
      ]
    : [];

  return (
    <div className="sidebar">
      <div className="sidebar_content">
        <div className="sc_sidebar">
          <div className="sc_sidebar_content">
            <div className="sc_sidebar_header">
              <Link to="/" className="sc_header_link">
                <FaHandPointLeft />
                <span>restaurant</span>
              </Link>
              <button className={`sc_toggle`} onClick={toggleMenu}>
                <FaBars className="sc_bars" />
              </button>
            </div>
            <div className={`sc_sidebar_wrap ${toggle ? "show" : "hide"}`}>
              <button className="sc_close" onClick={closeMenu}>
                <IoClose />
              </button>
              {sidebarLinks.map((link, index) => (
                <NavLink className="sc_link" to={link.link} key={index}>
                  {link.icon}
                  <span>{link.title}</span>
                </NavLink>
              ))}
              <button className="sc_logout" onClick={logoutHandler}><TbLogout2 /><span>Logout</span></button>
            </div>
          </div>
        </div>
        <div className="sc_content">
          <div className="sc_content_wrap">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
