import React from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import aboutus from "../app/images/aboutus.png";
import aboutus2 from "../app/images/aboutus2.png";
import aboutus3 from "../app/images/aboutus3.png";
import aboutLogo from "../app/images/about-logo.svg";

import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

import about1 from "../app/images/about-1.webp";
import about2 from "../app/images/about-2.webp";
import about3 from "../app/images/about-3.webp";
import about4 from "../app/images/about-4.webp";
import AboutInformation from "@/components/AboutInformation";
import about_us from "../app/images/About Us.webp";
import soloutions from "../app/images/Solution-about.webp";
import misson from "../app/images/Mission & Values.webp";
import history from "../app/images/History.webp";
import carrers from "../app/images/Careers.webp";

export default function About() {
  const router = useRouter();


  const sections = [
    {
      title: "About Us",
      description:
        "My Doctor Shop, the transforming presence in medical wholesale supplies. We are dedicated to delivering exceptional healthcare solutions, offering a comprehensive range of medical consumables, medical disposables, medical equipment, Infection control, personal protective equipment (PPE) and pharmaceuticals. As your trusted strategic partner, we take great pride in driving positive change and innovation in the medical supplies industry....",

      imageSrc: about_us,
      imageLeft: false,
      path: "about-us",
    },
    {
      title: "Solution",
      description:
        "My Doctor Shop offers a transformative solution and empowers healthcare providers by providing a comprehensive solution for their medical supply requirements.",

      imageSrc: soloutions,
      imageLeft: true,
      path: "Solution",
    },
    {
      title: "Mission & Values",
      description:
        "At My Doctor Shop, our mission is to empower healthcare providers with seamless access to reliable, high-quality medical supplies. We are dedicated to supporting the delivery of exceptional patient care and driving positive impact in the healthcare industry.",

      imageSrc: misson,
      imageLeft: false,
      path: "misson-&-value",
    },
    {
      title: "History",
      description:
        "My Doctor Shop, a leading presence in the medical wholesale supplies industry. With our comprehensive range of medical consumables, medical disposables, medical equipment, infection control products, personal protective equipment (PPE), and pharmaceuticals, we are dedicated to delivering exceptional healthcare solutions. Our tagline  reflects our commitment to bridging the gap between healthcare professionals and the vital supplies they need to provide quality care.",
      subheading: "My Doctor Shop: Connecting Care since 2011",
      imageSrc: history,
      imageLeft: true,
      path: "History",
    },
    {
      title: "Careers",
      description:
        "My Doctor Shop is not just a workplace; it is an extraordinary place for those who embrace challenges and seize opportunities. We value every moment and focus on meaningful endeavours. In our diverse and inclusive environment, we welcome the unknown, celebrate the strength of diversity, and strive for equality.",

      imageSrc: carrers,
      imageLeft: false,
      path: "careers",
    },
  ];
  return (
    <div>
      <HeaderWithCat />
      <div className="about-hero">
        <div className="col-lg-6">
          <div className="content">
            {/* <h1>About Us</h1>
                <p className="mb-0">
                  Experience accurate, reliable, and convenient blood pressure
                  monitoring with our Digital Blood Pressure Monitor.
                </p> */}
            <Image
              src={aboutLogo}
              alt="Description of image"
              width={600}
              height={150}
              className="banner-image"
            />
          </div>
        </div>
      </div>
      {/* <div className="about-us-section">
        <div className="lg-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner">
                <Image src={aboutus} alt="Description of image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content ps-5">
                <h3>
                  Empowering Healthcare with
                  <br />
                  Precision and Trust
                </h3>
                <p>
                  we provide top-tier medical machines that ensure precision,
                  reliability, and excellence in healthcare. Our range includes
                  state-of-the-art diagnostic equipment, advanced therapeutic
                  devices, and cutting-edge surgical instruments.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={handleClickShopNow}
                >
                  <span>Shop Now</span>
                  <div className="circle">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="line lg-container"></div>
      <Partners /> */}
      {/* <div className="about-us-section bg-light">
        <div className="lg-container">
          <div className="row">
            <div className="col-lg-6 order1">
              <div className="content pe-5">
                <h3>How We Are</h3>
                <p>
                  Experience accurate, reliable, and convenient blood pressure
                  monitoring with our Digital Blood Pressure Monitor. Designed
                  for ease of use and precision, this state-of-the-art device is
                  perfect for home use and offers several advanced features.
                </p>
                <button className="btn btn-primary">
                  <span>Shop Now</span>
                  <div className="circle">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-6 order2">
              <div className="banner">
                <Image src={aboutus2} alt="Description of image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-section">
        <div className="lg-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner">
                <Image src={aboutus3} alt="Description of image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content ps-5">
                <h3>Our Mission</h3>
                <p>
                  Experience accurate, reliable, and convenient blood pressure
                  monitoring with our Digital Blood Pressure Monitor. Designed
                  for ease of use and precision, this state-of-the-art device is
                  perfect for home use and offers several advanced features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {sections.map((section, index) => (
        <div className="lg-container-modal-info" key={index}>
          <AboutInformation
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            subheading={section.subheading}
            imageLeft={section.imageLeft}
            path={section.path}
            style={{
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "transparent",
            }} // Apply the background color dynamically
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}
