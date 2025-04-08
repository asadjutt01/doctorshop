import React from "react";
import { Form, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import blog from "../app/images/blog.png";

export default function ContactAddress() {
  return (
    <div>
      <div className="our-contact-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.6834539424985!2d-1.7797189000000004!3d53.6526162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bdc6ca730439b%3A0x436d09f724829135!2sRay%20Street%20Enterprise%20Centre!5e0!3m2!1sen!2s!4v1744105760547!5m2!1sen!2s"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="inner-content">
          <div className="lg-container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="info-card">
                  <Image
                    src="/doctorshop-logo.svg"
                    alt="doctorshop-logo"
                    width={200}
                    height={75}
                  />
                  <p>
                    We appreciate your feedback and are continuously working to
                    improve our services. If you have any suggestions or
                    concerns, please don't hesitate to reach out to us.
                  </p>
                  <p>Email : ccs@mydoctorshop.com</p>
                  <div className="address" style={{ padding: "30px 0px" }}>
                    <p>My Doctor Shop Ltd</p>
                    <p> Unit 5 Ray Street ENT Centre </p>
                    <p>Ray Street, Huddersfield</p>
                    <p>HD1 6B</p>
                  </div>
                  <div className="option">
                    <div className="icon">Company No:</div>
                    <span>7326383</span>
                  </div>
                  <div className="option">
                    <div className="icon">VAT No:</div>
                    <span>GB 998 1213 86</span>
                  </div>
                  <div className="option">
                    <div className="icon">Telephone:</div>
                    <span>0330 133 1786</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
