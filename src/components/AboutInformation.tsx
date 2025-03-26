"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DynamicSectionProps {
  title: string;
  description: string;

  imageSrc: string | any; // Adjust type for Next.js Image
  imageLeft?: boolean;
  subheading?: string;
  path?: any;
}

const AboutInformation: React.FC<
  DynamicSectionProps & { style?: React.CSSProperties }
> = ({
  title,
  description,
  imageSrc,
  imageLeft = true,
  style, // Accept the style prop
  subheading,
  path,
}) => {
  const Router = useRouter();
  const handleClickShopNow = () => {
    Router.push(path); // Navigate to the 'collection' page
  };
  return (
    <div
      className={`dynamic-section-about ${
        imageLeft ? "image-left" : "image-right"
      }`}
      style={style} // Apply the style dynamically
    >
      {/* Image Section */}
      <div className="image-section">
        <Image
          src={imageSrc}
          alt={title}
          className="image"
          layout="responsive"
          // width={100}
          // height={100}
        />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h2 className="section-title">{title}</h2>
        <p className="sub-description">{subheading}</p>
        <p className="section-description">{description}</p>

        <button className="btn btn-primary" onClick={handleClickShopNow}>
          <span>Read More</span>
          <div className="circle">
            <i className="fa-regular fa-arrow-right"></i>
          </div>
        </button>
        {/* {contactInfo && (
          <div className="contact-info">
            <p className="contact-heading">{contactInfo.conactdisc}</p>
            <p>
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AboutInformation;
