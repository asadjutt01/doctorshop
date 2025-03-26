import React from "react";
import { Form, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import blog from "../app/images/blog.png";

export default function ContactAddress() {
  return (
    <div>
      <div className="our-contact-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3442962432628!2d-74.11948518847406!3d41.53056058698255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd2eb1c518156b%3A0xc6b4372384b52303!2sNoah%20Pl%2C%20Newburgh%2C%20NY%2012550%2C%20USA!5e1!3m2!1sen!2s!4v1728995194173!5m2!1sen!2s"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="inner-content">
          <div className="lg-container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="info-card">
                  <h3>Company Details</h3>
                  <p>
                    We appreciate your feedback and are continuously working to
                    improve our services. If you have any suggestions or
                    concerns, please don't hesitate to reach out to us.
                  </p>
                  <div style={{padding:"30px 0px"}}>
                    <p>My Doctor Shop Ltd</p>
                    <p> Unit 5 Ray Street Ent Centre </p>
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
