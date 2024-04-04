import React from "react";
import "./subscribe_section.css";
import { FaStar } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const SubscribeSection = () => {

  return (
    <div className="subscribe_section">
      <div className="ss_content">
        <div className="ss_content_img parallax" data-speedy="0.03">
          <img src="/Assets/Home/HSImg2.jpg" className="ss_img_1" alt="" />
          <div className="ss_content_img_overlay"></div>
        </div>
        <div className="ss_box">
          <img
            src="/Assets/Home/HSImg.jpg"
            data-speedy="-0.02"
            className="ss_img_2 parallax"
            alt=""
          />
        </div>
        <div className="ss_wrap parallax" data-speedy="-0.013">
          <span className="ss_star_1">
            <FaStar />
          </span>
          <span className="ss_fork">
            <GiKnifeFork />
          </span>
          <span className="ss_star_2">
            <FaStar />
          </span>
          <div className="ss_wrap_content">
            <h2 className="ss_wrap_title_1">
              <span>Denivito Delights:</span> Register for Exclusive Access
            </h2>
            <p className="ss_wrap_par">
              Join our inner circle and gain access to a world of culinary
              delights, VIP events, and secret recipes. Register today and
              elevate your dining experience.
            </p>
            <div className="ss_wrap_btns">
              <Link to={"/register"} className="ss_wrap_register ss_wrap_btn">
                <span>register</span>
              </Link>
              <Link to={"/login"} className="ss_wrap_login ss_wrap_btn">
                <span>login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
