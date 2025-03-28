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
import contactLogo from "../app/images/Contact My Doctor Shop.webp";
import ContactInformation from "@/components/ContactInformation";

export default function Contact() {
  const sections = [
    {
      title: "Sales Support Team",
      description:
        "Our sales support team at My Doctor Shop is dedicated to providing you with the widest range of products and expert, unbiased advice. If you can't find what you're looking for, have product-specific queries, or prefer to place your order over the phone, our team is here to assist you.",
      contactInfo: {
        conactdisc: "Contact the Sales Support Team:",
        availbility: " Available Monday to Friday, 9:00 am to 5:00 pm",
        phone: "0330 133 1786 ",
        email: "Email: sales@mydoctorshop.com",
        online:'online orders can be placed 24/7',
      },
      imageSrc: about1,
      imageLeft: false,
    },
    {
      title: "Customer Care Team",
      description:
        "The customer care team at My Doctor Shop is committed to meeting your expectations while delivering efficient and reliable service. We aim to resolve any queries during your initial call. If further investigation or detailed information is needed, our team will prioritize your query to ensure a prompt and effective resolution. In case you're unsatisfied with the outcome, you can speak to a member of our management team for further assistance.",
      contactInfo: {
        conactdisc: "Contact the Customer Care Team:",
        availbility: " Available Monday to Friday, 9:00 am to 5:00 pm",
        phone: "0330 133 1786",
        email: "ccs@mydoctorshop.com",
      },
      imageSrc: about2,
      imageLeft: true,
    },
    {
      title: "Web Support Team",
      description:
        "My Doctor Shop wants to provide you with the best and user-friendly online experience. If you encounter any issues or have feedback, please don't hesitate to contact our web support team. Additionally, if you've forgotten your password, you can easily reset it by clicking the provided password reset link. To register an account, click the account registration link.",
      contactInfo: {
        conactdisc: "Contact the Billing & Account Enquiries Team:",
        availbility: " Available Monday to Friday, 9:00 am to 5:00 pm",
        phone: "0330 133 1786 ",
        email: "web@mydoctorshop.com",
      },
      imageSrc: about3,
      imageLeft: false,
    },
    {
      title: "Billing & Account Enquiries",
      description:
        "For easy access to your complete order history, including both online and telephone orders, as well as past invoices, you can log into your account. If you haven't registered an account yet, you can do so by clicking the account registration link.",
      contactInfo: {
        conactdisc: "Contact the Billing & Account Enquiries Team:",
        availbility: " Available Monday to Friday, 9:00 am to 5:00 pm",
        phone: "0300 133 1786",
        email: "acc@mydoctorshop.com",
      },
      imageSrc: about4,
      imageLeft: true,
    },
  ];
  return (
    <div>
      <HeaderWithCat />
      <div className="contact-hero">
        <div className="lg-container">
          <div className="contact-body">
            <div>
              <h2>Contact My Doctor Shop</h2>
              <p>
                At My Doctor Shop, we strive to ensure that your experience with
                us is enjoyable, exceeds your expectations, and fulfils your
                requirements.
              </p>
            </div>
            <Image
              src={contactLogo}
              alt="contact logo"
              width={550}
              height={380}
              className="contanct-banner-image"
            />
          </div>
        </div>
      </div>
      {sections.map((section, index) => (
        <div className=".lg-container-modal-info" key={index}>
          <ContactInformation
            title={section.title}
            description={section.description}
            contactInfo={section.contactInfo}
            imageSrc={section.imageSrc}
            imageLeft={section.imageLeft}
            style={{
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "transparent",
            }} // Apply the background color dynamically
          />
        </div>
      ))}

      {/* <ContactForm /> */}
      <ContactAddress />
      <Footer />
    </div>
  );
}
