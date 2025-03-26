import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import Image from "next/image";
import mm1 from "../../app/images/mm1.png"
import mm2 from "../../app/images/mm2.png"

const CustomDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true); // Show dropdown on hover
  };

  const handleMouseLeave = () => {
    setShowDropdown(false); // Hide dropdown when leaving
  };

  return (
    <NavDropdown
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="megamenu"
      title="Shop by category"
      id="collapsible-nav-dropdown"
    >
      <div
        className="lg-container"
        onMouseEnter={handleMouseEnter} // Keeps dropdown open while inside
        onMouseLeave={handleMouseLeave} // Hides dropdown when leaving
      >
        <div className="row">
          <div className="col-lg-3 col-6">
            <ul>
              <li>
                <a href="collection">Disposables</a>
              </li>
              <li>
                <a href="collection">Equipment</a>
              </li>
              <li>
                <a href="collection">First Aid</a>
              </li>
              <li>
                <a href="collection">Furniture</a>
              </li>
              <li>
                <a href="collection">Gynaecology</a>
              </li>
              <li>
                <a href="collection">Infection Control</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-6">
            <ul>
              <li>
                <a href="collection">Minor Operations</a>
              </li>
              <li>
                <a href="collection">Pharmaceuticals</a>
              </li>
              <li>
                <a href="collection">Uniforms</a>
              </li>
              <li>
                <a href="collection">Special Offers</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <Image src={mm1} alt="Description of image" />
          </div>
          <div className="col-lg-3">
            <Image src={mm2} alt="Description of image" />
          </div>
        </div>
      </div>
    </NavDropdown>
  );
};

export default CustomDropdown;
