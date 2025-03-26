import React from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
export default function Monitor() {
  const router = useRouter();
  const handleClickShopNow = () => {
    router.push("/collection"); // Navigate to the 'collection' page
  };

  return (
    <div>
      <div className="lg-container ">
        <div className="monitor-section">
          <h1>
            Digital Blood
            <br />
            Pressure Monitor
          </h1>
          <p>
            Experience accurate, reliable, and convenient <br />{" "} blood pressure 
            monitoringwith our Digital Blood <br />{" "} Pressure  Monitor.
          </p>
          {/* <button className="btn btn-light" onClick={handleClickShopNow}>
            <span>Shop Now</span>
            <div className="circle">
              <i className="fa-regular fa-arrow-right"></i>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}
