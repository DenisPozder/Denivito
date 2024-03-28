import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import HomeSection from "./Components/HomeSection/HomeSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import SubscribeSection from "./Components/SubscribeSection/SubscribeSection";
import MenuSection from "./Components/MenuSection/MenuSection";

const Home = () => {
  
  useEffect(() => {
    /*----- Paralax effect on scroll ------*/
    const parallax_el = document.querySelectorAll(".parallax");
    let yValue = 0;
    let xValue = 0;

    function update() {
      parallax_el.forEach((el) => {
        let speedy = parseFloat(el.dataset.speedy) || 1;
        let speedx = parseFloat(el.dataset.speedx) || 0;

        el.style.transform = `translateY(calc(-50% + ${yValue * speedy}px))
        translateX(calc(-50% + ${xValue * speedx}px))
        perspective(2300px)`;
      });
    }

    update();

    window.addEventListener("scroll", (e) => {
      yValue = window.scrollY;
      update();
    });
  }, []);

  return (
    <Layout>
      <div className="page_container">
        <HomeSection />
        <SubscribeSection />
        <MenuSection />
        <AboutSection />
      </div>
    </Layout>
  );
};

export default Home;
