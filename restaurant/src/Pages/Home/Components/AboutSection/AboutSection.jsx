import React from "react";
import "./about_section.css";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="about_section">
      <div className="as_content">
        <div className="as_top">
          <div className="as_top_img">
            <img className="as_img_1 parallax" data-speedy="0.04" src="/Assets/Home/HSImg.jpg" alt="" />
          </div>
          <img className="as_img_2 parallax" data-speedy="-0.03" src="/Assets/Home/HSImg2.jpg" alt="" />
        </div>
        <div className="as_bottom">
          <div className="as_bottom_text">
            <div className="asb_text">
              <h1 className="asb_title">Who we are</h1>
              <p className="asb_par_1">
                When we opened 595 Craft and Kitchen in June 2017, our vision
                was to create an unassuming watering hole for the locals. In a
                town with endless options for bars and lounges, we found it
                challenging to find a friendly bar with a solid craft beer list,
                good food, and non-gaming/non-smoking. We wanted to provide
                friends and neighbors alike with the original form of social
                networking; a fun easy going bar, and a cold pint. Our staunch
                belief in providing exceptional quality products with friendly
                service in a clean and welcoming setting has helped us earn the
                reputation among the locals as one of the best hidden gems in
                Las Vegas.
              </p>
              <p className="asb_par_2">
                Arts District Kitchen is the culmination of giving our best to
                the community by providing great food, service, and atmosphere.
                Tucked inside one of the premier breweries in Nevada, this
                collaboration project allows us another opportunity to create a
                memorable setting for you to catch up with friends and make new
                ones over tasty bites and a refreshing beer.
              </p>
              <Link to={"/about"} className="button"><span>view more</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
