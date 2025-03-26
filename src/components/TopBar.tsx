import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
export default function TopBar() {


    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 78) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      };
  
      // Add the event listener for scroll
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  

  return (
    <div className={isActive ? "active" : ""} id="header-outer">
      <div className="top-bar" id="header-sticky" >
        <div className="lg-container top-bar-container">
          <div className="top-bar-row">
            <div className="social-icons">
              <Link href={'/'} className="social-icons-link">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href={'/'} className="social-icons-link">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href={'/'} className="social-icons-link">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href={'/'} className="social-icons-link">
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
              <Link href={'/'} className="social-icons-link">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <div className="tagline">
              <p>Free Shipping On Orders Over $49.99</p>
            </div>
            <div className="lang">
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic" className="custom-dropdown-toggle">
                  united states (USD $)
                  <IoIosArrowDown /> {/* Your custom icon */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    united states (USD $)
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    united states (USD $)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
