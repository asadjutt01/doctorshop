import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Image from "next/image";
import CareersBanner from "../app/images/careers-banner.webp";

export default function Careers() {
  return (
    <div>
      <HeaderWithCat />
      <div className="sub-section-hero">
        <div className="lg-container">
          <div className="contact-body">
            <div className="about-us-heading">
              <h2>Careers</h2>
            </div>
            <Image
              src={CareersBanner}
              alt="contact logo"
              width={550}
              height={380}
              className="history-image"
            />
          </div>
        </div>
      </div>
      <div className="lg-container lg-container-padding">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <span className="card-title">Join our family</span>
              <p>
                My Doctor Shop is not just a workplace; it is an extraordinary
                place for those who embrace challenges and seize opportunities.
                We value every moment and focus on meaningful endeavours. In our
                diverse and inclusive environment, we welcome the unknown,
                celebrate the strength of diversity, and strive for equality. By
                harnessing the power of passion, together, we can amplify your
                impact—on your career, the work you do, and the healthcare
                industry as a whole.
              </p>
              <p>
                By harnessing the power of passion, together, we can amplify
                your impact—on your career, the work you do, and the healthcare
                industry as a whole.
              </p>
            </div>
          </div>
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <span className="card-title">Be Curious, Bold, and Brave</span>

              <p>
                At My Doctor Shop, we encourage you to be curious, bold, and
                brave. Surround yourself with like-minded individuals who
                possess the energy and determination to innovate and deliver
                intelligent solutions for those who make healthcare happen.
                Together, we can make a difference.
              </p>
            </div>
            <div className="custom-card-container">
              <span className="card-title">
                Diversity, Equity, and Inclusion
              </span>
              <p>
                We believe that true diversity is achieved through inclusion.
                Our Diversity, Equity, and Inclusion program prioritize creating
                an inclusive working environment where every employee feels
                valued, included, and a sense of belonging. We actively listen
                to our employees, invest in their development, and foster a
                positive culture that promotes collaboration and improves
                overall performance.
              </p>
            </div>
          </div>
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <span className="card-title">Equal Opportunity</span>
              <p>
                These values guide our actions and decisions as we work towards
                our mission of transforming the healthcare supply landscape and
                enhancing patient care.We are fully committed to Equal
                Employment Opportunity. We strive to attract, retain, develop,
                and promote the most qualified employees based on their skills
                and merits, without any form of discrimination. We embrace
                individuals regardless of their race, gender, colour, religion,
                sexual orientation, national origin, age, physical or mental
                disability, or any other characteristic. Our work environment is
                free from discrimination and harassment, where every employee is
                treated with respect and dignity.
              </p>
            </div>
          </div>
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <span className="card-title">Comprehensive Hiring Process</span>
              <p>
                At My Doctor Shop, we follow a comprehensive hiring process. All
                job opportunities will be advertised on LinkedIn, Indeed, and
                other relevant job boards to ensure transparency and provide
                equal access to candidates.
              </p>
              <p>
                Join us at My Doctor Shop and be part of a team dedicated to
                making a positive impact on the world of healthcare. Together,
                we can innovate, deliver exceptional solutions, and shape the
                future of patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
