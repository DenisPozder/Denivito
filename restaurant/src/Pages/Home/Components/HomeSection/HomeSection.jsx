import React from "react";
import "./home_section.css";
import { GiKnifeFork } from "react-icons/gi";
import { GrLocationPin } from "react-icons/gr";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="home_section">
      <div className="hs_content">
        <div className="hs_top">
          <div className="hs_top_img">
            <img className="hs_img_1 parallax" data-speedy="0.06" src="/Assets/Home/HSImg.jpg" alt="Our best meal " />
            <div className="hs_top_img_overlay"></div>
            <div className="hs_top_img_black"></div>
          </div>
          <div className="hs_top_text parallax" data-speedy="-0.07">
            <div className="hst_text">
              <GiKnifeFork />
              <div className="hst_first">
                <span>S</span>
                <span>A</span>
                <span>V</span>
                <span>O</span>
                <span>R</span>
              </div>
              <div className="hst_second">
                <span>D</span>
                <span>E</span>
                <span>N</span>
                <span>I</span>
                <span>V</span>
                <span>I</span>
                <span>T</span>
                <span>O</span>
                <span>'</span>
                <span>S</span>
              </div>
            </div>
            <div className="space"></div>
            <div className="hsb_text">
              <div className="hsb_first">
                <span>C</span>
                <span>U</span>
                <span>L</span>
                <span>I</span>
                <span>N</span>
                <span>A</span>
                <span>R</span>
                <span>Y</span>
              </div>
              <div className="hsb_second">
                <span>J</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
                <span>N</span>
                <span>E</span>
                <span>Y</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hs_bottom">
          <div className="hs_bottom_text">
            <div className="hsb_info parallax" data-speedy="-0.02">
              {/*----- This is a single info item -----*/}
              <div className="hsb_item">
                <div className="hsb_svg">
                  <GrLocationPin/>
                </div>
                <div className="hsb_item_content">
                  <h3>1510 south main street</h3>
                  <h3>las vegas, nv 89104</h3>
                  <h3>located inside of denivito's</h3>
                  <Link to={'#'}>0600142498</Link>
                </div>
              </div>
              {/*----- This is a single info item -----*/}
              <div className="hsb_item">
                <div className="hsb_svg">
                  <FaClock />
                </div>
                <div className="hsb_item_content">
                  <h3>sun - thurs: 11:30AM - 11PM</h3>
                  <h3>fri - sat: 11:30AM - midnight</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="hs_bottom_img">
            <img className="hs_img_2 parallax" src="/Assets/Home/HSImg2.jpg" data-speedy="0.03" alt="Our second meal" />
            <div className="hs_bottom_img_overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
