import React from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import microscope from '../app/images/microscope.png';
import cardiopad from "../app/images/cardio-pad.png";
import Image from "next/image";
import Link from "next/link";

export default function Microscope() {
  return (
    <div>
       <Link href={"/products/seca-cardiopad-2/"}>
      <div className="microscope-section">
        <div className="lg-container ">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-lg-6 col-md-6 order-2 order-md-1">
                <div className="content my-4">
                  <h1>Seca CardioPad-2</h1>
                  <p>Ultra-lightweight easy to use device, weighing only 1.1kg
                  Compatible with all leading EMR systems – emis, SystmOne, Vision and others</p>
                  <p>
                    <span>Product Code:</span> <span>017 1001 304</span>
                  </p>
                  <div className="prize-vat">
                    <h2>£3,335.51</h2>
                    <span>£4,002.61 inc VAT</span>
                  </div>
                </div>
             
            </div>
            <div className="col-lg-6 col-md-6 order-1 order-md-2">
              <Image src={cardiopad} alt="Description of image" />
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
