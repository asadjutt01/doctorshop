import React from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
// import homeBanner from "../app/images/home-banner.png"
import hero1 from "../app/images/hero1.png"
import hero2 from "../app/images/hero2.png"
import hero3 from "../app/images/hero3.png"
export default function HeroSlider() {
  const router = useRouter();
  const handleClickShopNow = () => {
    router.push("/collection");
  };
  const handleClickLearnMore = () => {
    router.push("/about");
  };

  return (
    <div>
      <div className="hero-section">
        <Carousel>
          <Carousel.Item className="carousel-item-bg" 
          style={{ backgroundImage: `url(${hero1.src})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"top" }}>
            {/* <div className="home-banner-container">
              <Image src={homeBanner} alt="Home-Banner" className="home-banner" width={360} height={290} />
            </div>
            <div className="slide-content">
              <div className="lg-container slide-content-inner-container">
                  <div className="content">
                    <h1>
                      Digital Blood
                      <br />
                      Pressure Monitor
                    </h1>
                    <p>
                      Experience accurate, reliable, and convenient blood pressure
                      monitoring with our Digital Blood Pressure Monitor. Designed
                      for ease of use and precision, this state-of-the-art device
                      is perfect for home use and offers several advanced
                      features.
                    </p>
                    <div className="buttons-row">
                   
                    </div>
                  </div>
              </div>
            </div> */}
          </Carousel.Item>
          <Carousel.Item className="carousel-item-bg" style={{ backgroundImage: `url(${hero2.src})`,
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"top" }}>
            {/* <div className="home-banner-container">
              <Image src={homeBanner} alt="Home-Banner" className="home-banner" width={360} height={290} />
            </div>
            <div className="slide-content">
              <div className="lg-container slide-content-inner-container">
                  <div className="content">
                    <h1>
                      Digital Blood
                      <br />
                      Pressure Monitor
                    </h1>
                    <p>
                      Experience accurate, reliable, and convenient blood pressure
                      monitoring with our Digital Blood Pressure Monitor. Designed
                      for ease of use and precision, this state-of-the-art device
                      is perfect for home use and offers several advanced
                      features.
                    </p>
                    <div className="buttons-row">
                
                    </div>
                  </div>
              </div>
            </div> */}
          </Carousel.Item>
          <Carousel.Item className="carousel-item-bg" style={{ backgroundImage: `url(${hero3.src})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"top" }}>
            {/* <div className="home-banner-container">
              <Image src={homeBanner} alt="Home-Banner" className="home-banner" width={360} height={290} />
            </div>
            <div className="slide-content">
              <div className="lg-container slide-content-inner-container">
                  <div className="content">
                    <h1>
                      Digital Blood
                      <br />
                      Pressure Monitor
                    </h1>
                    <p>
                      Experience accurate, reliable, and convenient blood pressure
                      monitoring with our Digital Blood Pressure Monitor. Designed
                      for ease of use and precision, this state-of-the-art device
                      is perfect for home use and offers several advanced
                      features.
                    </p>
                    <div className="buttons-row">
                    
                    </div>
                  </div>
              </div>
            </div> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
