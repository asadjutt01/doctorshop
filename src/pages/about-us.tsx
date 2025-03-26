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
import Aboutusbanner from "../app/images/Aboutus-banner.webp";
import ContactInformation from "@/components/ContactInformation";
import Timeline from "@/components/timeline";

export default function AboutUs() {
  return (
    <div>
      <HeaderWithCat />
      <div className="sub-about-hero">
        <div className="lg-container">
          <div className="contact-body">
            <div className="about-us-heading">
              <h2>About Us</h2> <br />
            </div>
            <Image
              src={Aboutusbanner}
              alt="contact logo"
              width={550}
              height={380}
              className="banner-image-about-us"
            />
          </div>
        </div>
      </div>

      <Timeline />

      <Footer />
    </div>
  );
}
