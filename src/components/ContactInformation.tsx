"use client";
import React from "react";
import Image from "next/image";

interface DynamicSectionProps {
  title: string;
  description: string;
  contactInfo?: {
    conactdisc?: string;
    phone: string;
    email: string;
    availbility:string;
    online?:string;
  };
  imageSrc: string | any; // Adjust type for Next.js Image
  imageLeft?: boolean;
}

const ContactInformation: React.FC<
  DynamicSectionProps & { style?: React.CSSProperties }
> = ({
  title,
  description,
  contactInfo,
  imageSrc,
  imageLeft = true,
  style, // Accept the style prop
}) => {
  return (
    <div
      className={`dynamic-section ${imageLeft ? "image-left" : "image-right"}`}
      style={style} // Apply the style dynamically
    >
      {/* Image Section */}
      <div className="image-section">
        <Image
          src={imageSrc}
          alt={title}
          className="image"
          layout="responsive"
          width={200}
          height={100}
        />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
        {contactInfo && (
          <div className="contact-info">
            <p className="contact-heading">{contactInfo.conactdisc}</p>
            <p>{contactInfo.availbility}</p>
            <p>
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
            <p> {contactInfo.online}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInformation;
