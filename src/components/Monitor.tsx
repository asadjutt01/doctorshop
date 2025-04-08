import React from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";

interface MonitorProps {
  img: StaticImageData;
  bgbanner: StaticImageData;
  bgbannermobile: StaticImageData;
}
const Monitor: React.FC<MonitorProps> = ({ img, bgbanner,bgbannermobile }) => {
  const router = useRouter();
 

  return (
    <div>
      <div className="lg-container ">
        <div
          className="monitor-section"
          style={{ backgroundImage: `url(${bgbanner.src})` }}
        >
          {/* <h1>
            Digital Blood
            <br />
            Pressure Monitor
          </h1>
          <p>
            Experience accurate, reliable, and convenient <br />{" "} blood pressure 
            monitoringwith our Digital Blood <br />{" "} Pressure  Monitor.
          </p>
          <button className="btn btn-light" onClick={handleClickShopNow}>
            <span>Shop Now</span>
            <div className="circle">
              <i className="fa-regular fa-arrow-right"></i>
            </div>
          </button> */}
          <div className="d-flex flex-column flex-md-row">
            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div className="content my-4">
              <h1>Omron 907 Blood Pressure Monitor</h1>
                <p>
                With the option of fully automatic operation and manual deflation control, this versatile monitor includes a display "hide" function helping prevent White Coat Hypertension.
                </p>
                <p>
                  {/* <span>Product Code:</span> <span>017 1001 304</span> */}
                </p>
                <div className="prize-vat">
                  <h2>£519.25</h2>
                  <span>£623.1 inc VAT</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 order-1 order-md-2 image-container">
              <Image
                src={img}
                alt="Description of image"
                height={600}
                width={400}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div
          className="monitor-section-mobile"
          style={{ backgroundImage: `url(${bgbannermobile.src})` }}
        >
          {/* <h1>
            Digital Blood
            <br />
            Pressure Monitor
          </h1>
          <p>
            Experience accurate, reliable, and convenient <br />{" "} blood pressure 
            monitoringwith our Digital Blood <br />{" "} Pressure  Monitor.
          </p>
          <button className="btn btn-light" onClick={handleClickShopNow}>
            <span>Shop Now</span>
            <div className="circle">
              <i className="fa-regular fa-arrow-right"></i>
            </div>
          </button> */}
          <div className="d-flex flex-column">
            <div className="col-12 order-2">
              <div className="content my-4">
                <h1>Omron 907 Blood Pressure Monitor</h1>
                <p>
                With the option of fully automatic operation and manual deflation control, this versatile monitor includes a display "hide" function helping prevent White Coat Hypertension.
                </p>
                <p>
                  {/* <span>Product Code:</span> <span>017 1001 304</span> */}
                </p>
                <div className="prize-vat">
                  <h2>£519.25</h2>
                  <span>£623.1 inc VAT</span>
                </div>
              </div>
            </div>
            <div className="col-12 order-1 image-container">
              <Image
                src={img}
                alt="Description of image"
                height={350}
                width={400}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Monitor;
