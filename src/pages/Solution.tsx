import React from "react";
import { Form, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
// import aboutus from "../app/images/aboutus.png";
import about1 from "../app/images/about-1.webp";
import about2 from "../app/images/about-2.webp";
import about3 from "../app/images/about-3.webp";
import about4 from "../app/images/about-4.webp";

import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import ContactForm from "@/components/ContactForm";
import ContactAddress from "@/components/ContactAddress";
import Footer from "@/components/Footer";
import Solution from "../app/images/Solution.webp";
import ContactInformation from "@/components/ContactInformation";
import Timeline from "@/components/timeline";

export default function Solutions() {
  return (
    <div className="solution-main">

      <HeaderWithCat />
      <div className="sub-section-hero">
        <div className="lg-container">
          <div className="contact-body">
            <div className="about-us-heading">
              <h2>Solution</h2> <br />
            </div>
            <Image src={Solution} alt="contact logo" width={550} height={380} className="solution-banner-image" />
          </div>
        </div>
      </div>

      <div className="lg-container  lg-container-padding"> <div className="page-padding">
        <div className="custom-card-container-wrapper">
          <div className="custom-card-container">
            <span className="card-title">My Doctor Shop offers a transformative solution and empowers
              healthcare providers by providing a comprehensive solution for their
              medical supply requirements.</span>
          </div>
        </div>
        <div className="custom-card-container-wrapper">
          <div className="custom-card-container">
            <span className="card-title-heading">Challenge</span>
            <p> Healthcare providers continually encounter numerous challenges when
              it comes to sourcing medical supplies. These challenges include
              navigating complex supply chains, ensuring reliability and quality,
              managing costs, and avoiding disruptions in patient care.
              Conventional supply chains can often be inefficient, leading to
              delays and uncertainties in acquiring essential resources.</p>
          </div>
        </div>

        <div className="custom-card-container-wrapper">
          <div className="custom-card-container">
            <span className="card-title-heading">Solution</span>
            <p>
              At My Doctor Shop, we understand the challenges that healthcare
              providers encounter in sourcing medical supplies. We are here to
              provide a solution tailored to your needs, simplifying the
              procurement process and ensuring the highest quality products.
            </p>
            <p>
              Our dedicated team has curated a network of reliable suppliers to
              guarantee the utmost quality and reliability of our medical
              supplies. By partnering with us, you gain access to a wide range of
              dependable and high-quality products, giving you peace of mind.
            </p>
            <p>
              We have constructed a streamlined and efficient supply chain that
              eliminates disruptions and uncertainties. Our optimised process
              ensures the seamless and timely fulfilment and delivery of vital
              medical supplies, enabling you to concentrate on delivering
              exceptional patient care
            </p>
            <p>
              Experience the difference of working with My Doctor Shop. We are
              dedicated to supporting your mission of delivering excellent
              healthcare by offering a dependable supply of reliable, high-quality
              medical supplies and simplifying the procurement process. As your
              trusted partner, we are here to help you overcome the challenges
              associated with sourcing medical supplies, allowing you to
              prioritize your patients' well-being with confidence.
            </p>
          </div>
        </div>

      </div>
      </div>

      <Footer />
    </div>
  );
}
