import React from "react";
import "./menu_section.css";
import { Link } from "react-router-dom";
import MenuData from "../../../../Data/MenuData";
import { GiKnifeFork } from "react-icons/gi";

const MenuSection = () => {
  return (
    <div className="menu_section">
      <div className="ms_content">
        <div className="ms_content_top">
          <div className="msct_top">
            <div className="msct_box">
              <div className="msct_box_img parallax" data-speedy="0.02">
                <img
                  src="/Assets/Home/HSImg.jpg"
                  className="msct_img_1"
                  alt=""
                />
                <div className="msct_box_overlay"></div>
              </div>
              <img
                src="/Assets/Home/HSImg2.jpg"
                data-speedy="0.04"
                className="msct_img_2 parallax"
                alt=""
              />
            </div>
          </div>
          <div className="msct_bottom">
            <div className="msct_bottom_text">
              <h1 className="msct_title">perfect pint partners</h1>
              <p className="msct_par_1">
                Our menu features foodie-friendly street and finger foods for
                you to pair with the perfect pint. We feature many classic pub
                favorites while incorporating subtle but unique Southeast Asian
                flavors to give your taste buds a wake up call.
              </p>
              <p className="msct_par_2">
                Our small bites are perfect for sharing while our sandwiches are
                hearty enough to satisfy the insatiable. You can enjoy our food
                the same whether you’re here for a quick lunch or enjoying a
                casual night out with friends and family. Be present and talk to
                each other!
              </p>
              <Link className="msct_btn" to={'/menu'}><span>view more</span></Link>
            </div>
          </div>
        </div>
        <div className="ms_content_bottom">
            <div className="mscb_content">
                <h1 className="mscb_title">popular meals</h1>
                <div className="mscb_wrap">
                  {
                    MenuData.slice(0,6).map((meal, index) => (
                      <div className="mscb_meal" key={index}>
                        <div className="mscb_meal_content">
                          <img src="/Assets/Home/Meals.png" alt="" />
                          <div className="mscb_meal_wrap">
                            <div className="mscb_meal_inner">
                              <div className="mscb_meal_header">
                                <h3>{meal.name}</h3>
                                <h2>{meal.price}$</h2>
                              </div>
                              <p>{meal.desc}</p>
                            </div>
                          </div>
                        </div>
                        <Link to={'#'} className="mscb_meal_icon">
                          <GiKnifeFork />
                        </Link>
                        <div className="mscb_meal_top">
                          <div className="mscb_meal_circle parallax" data-speedy="-0.02">
                            <img src={meal.image} alt={meal.name} />
                            <div className="mscb_mp_overlay"></div>
                          </div>
                        </div>
                        <div className="mscb_meal_bottom">
                          <div className="mscb_meal_color">
                            <img src="/Assets/Home/Texture.jpg" alt="Decorative paper texture" />
                            <div className="mscb_mc_line">
                              <div className="mscb_mc_left"></div>
                              <div className="mscb_mc_right"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
