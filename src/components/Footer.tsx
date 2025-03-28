import React, { useState } from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../app/images/footer-logo.png";
import Image from "next/image";
import Link from "next/link"; // Importing Link from next/link
import { useDispatch, useSelector } from "react-redux";
// import { setFirstOrder } from "@/redux/slices/newsLetterSlice";

export default function Footer() {
  // input state
  const dispatch = useDispatch();
  const [discountorder, setdiscountorder] = useState<any>("");
  // const { firstOrder } = useSelector((state: any) => state.newsLetters);

  const InputOnchange = (
    setterFunction: React.Dispatch<React.SetStateAction<string>>,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setterFunction(e.target.value);
    // dispatch(setFirstOrder(e.target.value));
  };

  return (
    <div>
      <div className="footer">
        <div className="lg-container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-9">
                {/* <div className="join-field">
                  <h5>Get 10% off your first order.</h5>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => InputOnchange(setdiscountorder, e)}
                    value={discountorder}
                  />
                  <button className="btn btn-join">Join</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="footer-nav">
            <div className="nav-card">
              <h6>About Us</h6>
              <div className="brand">
                <Image
                  src={logo}
                  alt="Description of image"
                  width={200} // Set width of the image
                  height={50} // Set height of the image
                />
              </div>
              <p className="footer-about">
              My Doctor Shop, the transforming presence in medical wholesale supplies. We are dedicated to delivering exceptional healthcare solutions, offering a comprehensive range of medical consumables, medical disposables, medical equipment, Infection control, personal protective equipment (PPE) and pharmaceuticals.
              </p>
              <div className="bottom-bar_social">
                <div className="bottom-row_social">
                  <div className="social">
                    <Link href="">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                    <Link href="">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-card">
              <h6>Useful links</h6>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              {/* <Link href="/faqs">Common FAQs</Link> */}
              <Link href="/terms-&-conditions">Terms & Conditions</Link>
              <Link href="/delivery-&-return">Delivery & Returns</Link>
              {/* <Link href="/track-orders">Track Orders</Link> */}
              <Link href="/terms-of-use">Terms Of Use</Link>
              <Link href="/corporate-social-responsibility">
                Corporate Social Responsibility
              </Link>
              <Link href="modern-slavery-policy">Modern Slavery Act</Link>
              {/* <Link href="/collection">Collection</Link> */}
            </div>

            <div className="nav-card">
              <h6>Policies</h6>
              <Link href="/cookie-policy">Cookie Policy</Link>
              <Link href="/data-policy">Data Policy</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/quality-policy">Quality Policy</Link>
              <Link href="/procurement-policy">Procurement Policy</Link>
              <Link href="/waste-management-policy">
                Waste Management Policy
              </Link>
              <Link href="/environmental-management-policy">
                Environmental Management Policy
              </Link>
              <Link href="/health-safety-policy">Health and Safety Policy</Link>
              <Link href="/supplier-management-policy">
                Supplier Management Policy
              </Link>
            </div>
            <div className="nav-card">
              <h6>Contact Us</h6>
              <span className="contact-key">Phone </span>
              <Link href="tel:111122223333" className="mb-1">
              +44(0)3301 133 786
              </Link>
              <span className="contact-key">Email </span>
              <Link href="mailto:demo@gmail.com" className="mb-1">
              sales@mydoctorshop.com
              </Link>
              <span className="contact-key">Address</span>
              <Link href="" className="mb-1">
              {/* Unit 5 Ray Street ENT Centre Ray Street Huddersfield HD1 6B */}
              My Doctor Shop Ltd <br/>
              Unit 5, Ray Street ENT Centre,<br/>
              Huddersfield,<br/>
              HD1 6BL UK
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-row">
          <div className="copywrite">
            <p>
              <span>Med9 Group LTD</span>
            </p>
            <p>Copyright © 2025, All rights reserved.</p>
            <div className="copywrite-powered">
              Powered by&nbsp;{" "}
              <Image
                src={"/tech9et-logo.png"}
                width={60}
                height={14}
                alt="Tech9et-Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}