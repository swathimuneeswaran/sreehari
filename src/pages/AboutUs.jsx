import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/About.css";

import about from "../assets/images/about.jpeg";
import flowchart from "../assets/stages/flowchart.jpg";
import unit1 from "../assets/images/unit1.jpeg";
import unit2 from "../assets/images/unit2.jpeg";
import Manu_unit1 from "../assets/images/Manu_unit1.jpg";
import Manu_unit2 from "../assets/images/Manu_unit2.jpg";
import Manu_unit3 from "../assets/images/Manu_unit3.jpg";
import Manu_unit5 from "../assets/images/Manu_unit5.jpg";

import Footer from "../component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {

  
  useEffect(() => {
    // Scrolls to the top when the component is mounted
    window.scrollTo(0, 0);
    
  }, []); // Runs only once when the component is mounted
  const settingsAbout = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="carousel-inner">
        <div
          className="carousel-item active  img_carousel"
          data-interval="10000"
        >
          <img src={about} className="d-block w-100" alt="About Us" />
          <div className="carousel-caption1 d-flex flex-column justify-content-center">
            <h2 className="carousel-text1">
              Nature’s Power in <br></br>
              <span>Powder & Flakes...</span>
            </h2>
            <p>
              Packed with nutrients and bursting with flavor, our dehydrated
              powders and flakes provide an easy way to add natural health and
              wellness to your everyday life.
            </p>
          </div>
        </div>
      </div>

      <section className="section_about">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="entire_about" id="about_shree">
          <div className="main_goal">
            <h2>Our main goal is to make sure our customers are happy.</h2>
            <p>
              At<span style={{ color: "green" }}>SHREE HARI GLOBAL FOODS,</span>
              we are dedicated to empowering farmers and transforming the
              agricultural landscape. Founded by Venkat Sujith Krishna Tata,
              Naveen Viswanathan , and Reddy Mohan Posa, our journey started
              with a shared vision to solve the major challenges farmers
              face—crop wastage and financial difficulties caused by market
              volatility.
              <br></br>
              As a team, we discovered that nearly 20-40% of cultivated products
              are wasted, which deeply concerned us. Determined to make a
              change, we explored solutions and found that dehydration,
              particularly sun drying, offers a cost-effective way to extend the
              shelf life of crops by up to 2 years. This inspired us to develop
              our own automated solar dryer system, designed to operate
              efficiently even in diverse weather conditions, ensuring farmers
              can preserve their products sustainably. By combining traditional
              methods with cutting-edge technology, we aim to provide farmers
              with an innovative tool that boosts productivity and reduces
              waste.
              <br></br>
              Our mission is simple yet powerful: to help farmers become
              independent of market fluctuations and environmental challenges
              while reducing waste and increasing their profitability. While
              building a successful business is important, we believe that our
              true responsibility lies in creating a lasting, positive impact on
              society. This is why we are committed to supporting the backbone
              of our country—our farmers—beyond just financial gain.
              <br></br>
              Join us on this journey, as we continue to innovate and contribute
              to a better future for farmers, the environment, and society at
              large.
            </p>
          </div>
          <div className="about_img">
            <img
              src="https://img.freepik.com/premium-photo/modern-food-spices-photography_1223255-5893.jpg?w=826"
              alt="Our Products"
            />
          </div>
        </div>
      </section>

      <div className="flow-brand-divide">
  {/* Carousel Section */}
  <section className="brand-section mb-5">
    <div className="brand-container">
      <div className="brand-logos">
        {/* Slick Carousel Component */}
        <Slider {...settingsAbout}>
          <div className="brand-logo">
            <img src={unit1} alt="logo" />
          </div>
          <div className="brand-logo">
            <img src={unit2} alt="logo" />
          </div>
          <div className="brand-logo">
            <img src={Manu_unit2} alt="logo" />
          </div>
          <div className="brand-logo">
            <img src={Manu_unit3} alt="logo" />
          </div>
          <div className="brand-logo">
            <img src={Manu_unit5} alt="logo" />
          </div>
        </Slider>
      </div>
    </div>
  </section>

  {/* Flowchart Section */}
  <section className="flowchart_new_image">
    {/* Download Button */}
    <a href="/brochure/farmer_brochure.pdf" download className="download-brochure-button">
      Download Brochure
    </a>

    {/* Flowchart Image */}
    <img src={flowchart} alt="Flowchart"  />
  </section>
</div>


      <Footer />
    </>
  );
};

export default AboutUs;
