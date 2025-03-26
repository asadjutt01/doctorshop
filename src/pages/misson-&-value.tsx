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
import MissionValues from "../app/images/Mission -values-banner.webp";
import ContactInformation from "@/components/ContactInformation";
import Timeline from "@/components/timeline";
import MissonCards from "@/components/MissonCards";
import quality from "../app/images/Quality.svg";
import Relability from "../app/images/Reliability.svg";
import partnership from "../app/images/Partnership.svg";
import innovation from "../app/images/Innovation.svg";
import integrity from "../app/images/Integrity.svg";
import customerfocus from "../app/images/Customer Focus.svg";
import impact from "../app/images/Impact.svg";
import communites from "../app/images/Communities.svg";
import HistoryTimeline from "@/components/HistoryTimeline";

export default function MissonValue() {
  const cardsData = [
    {
      icon: quality,
      title: "Quality:",
      description:
        "We are committed to sourcing and delivering only the highest quality medical supplies, ensuring the safety and well-being of patients.",
    },
    {
      icon: Relability,
      title: "Reliability:",
      description:
        "We understand the critical nature of healthcare operations and strive to be a dependable partner, ensuring prompt and reliable delivery of essential resources.",
    },
    {
      icon: partnership,
      title: "partnership:",
      description:
        "We believe in building strong and collaborative partnerships with healthcare providers, actively listening to their unique needs and providing personalised support and guidance.",
    },
    {
      icon: innovation,
      title: "Innovation:",
      description:
        "We constantly seek innovative solutions to streamline supply chains, optimise inventory management, and improve the overall efficiency of healthcare operations.",
    },
    {
      icon: integrity,
      title: "Integrity:",
      description:
        "We conduct our business with utmost integrity, maintaining transparent and ethical practices in all our interactions with customers, suppliers, and stakeholders.",
    },
    {
      icon: customerfocus,
      title: "Customer Focus:",
      description:
        "Our customers are at the heart of everything we do. We are dedicated to understanding their requirements, exceeding their expectations, and providing exceptional service tailored to their needs.",
    },
    {
      icon: impact,
      title: "Impact:",
      description:
        "We are driven by a passion for making a positive impact on healthcare outcomes. We strive to contribute to the success of healthcare providers in delivering exceptional care to patients.",
    },
    {
      icon: communites,
      title: "Communities:",
      description:
        "We believe in making our communities stronger by giving back and sharing our time, skills, and resources so that everyone can benefit",
    },
  ];

  return (
    <div className="mission-main">
      <HeaderWithCat />

      <div className="sub-section-hero">
        <div className="lg-container ">
          <div className="contact-body">
            <div className="about-us-heading">
              <h2 className="misson-value-h2">Misson & Values</h2> <br />
            </div>
            <Image
              src={MissionValues}
              alt="contact logo"
              width={550}
              height={380}
              className="history-image"
            />
          </div>
        </div>
      </div>
      <div className="lg-container lg-container-padding">
        <div className="heading-solution">
          <p>
            At My Doctor Shop, our mission is to empower healthcare providers
            with seamless access to reliable, high-quality medical supplies. We
            are dedicated to supporting the delivery of exceptional patient care
            and driving positive impact in the healthcare industry.
          </p>
        </div>

        <div>
          <MissonCards cards={cardsData} />
        </div>
        <div className="cards-disc">
          <p>
            These values guide our actions and decisions as we work towards our
            mission of transforming the healthcare supply landscape and
            enhancing patient care.
          </p>
        </div>
      </div>
      {/* <HistoryTimeline /> */}
      <Footer />
    </div>
  );
}
