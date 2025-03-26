import React from "react";
import { Button, Accordion, FormControl } from "react-bootstrap";
import Image from "next/image";
import coll1 from "../app/images/coll1.png";
import coll2 from "../app/images/coll2.png";
import coll3 from "../app/images/coll3.png";

export default function CollectionList() {
  const collections = [
    { src: coll1, title: "Hemodialysis Machine" },
    { src: coll2, title: "xray ultrasound machine" },
    { src: coll3, title: "ICU Medical ventilator" },
    { src: coll1, title: "Hemodialysis Machine" },
    { src: coll2, title: "xray ultrasound machine" },
    { src: coll3, title: "ICU Medical ventilator" },
    { src: coll1, title: "Hemodialysis Machine" },
    { src: coll2, title: "xray ultrasound machine" },
    { src: coll3, title: "ICU Medical ventilator" },
  ];

  return (
    <div>
      <div className="row">
        {collections.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <a href="products">
              <div className="category-card">
                <div className="banner">
                  <Image src={item.src} alt="Description of image" />
                </div>
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <button className="btn_range">View Range</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
