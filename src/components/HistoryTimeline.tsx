import React from "react";
import { FaCircle } from "react-icons/fa";

const HistoryTimeline = () => {
  const timelineData = [
    {
      id: 1,
      left: {
        title: "My Doctor Shop: Connecting Care since 2011",
        description:
          "My Doctor Shop, a leading presence in the medical wholesale supplies industry. With our comprehensive range of medical consumables, medical disposables, medical equipment, infection control products, personal protective equipment (PPE), and pharmaceuticals, we are dedicated to delivering exceptional healthcare solutions. Our tagline Connecting Care reflects our commitment to bridging the gap between healthcare professionals and the vital supplies they need to provide quality care.",
      },
      right: {
        title: "Founded in 2011: A Vision for Transforming Healthcare",
        description:
          "My Doctor Shop was founded in 2011 with a vision to transform the healthcare industry. Recognising the critical role that medical supplies play in patient care, we set out to become a trusted strategic partner for healthcare professionals and providers. Our goal was to provide a comprehensive range of high-quality medical supplies while driving positive change and innovation in the industry.",
      },
    },
    {
      id: 2,
      left: {
        title: "Expanding Product Range: Meeting Diverse Needs",
        description:
          "Since our establishment, we have continually expanded our product range to meet the evolving needs of healthcare professionals. Our diverse offering includes medical consumables, medical disposables, medical equipment, infection control products, personal protective equipment (PPE), and pharmaceuticals. We carefully curate our product selection to ensure it meets the highest standards of quality and reliability, enabling healthcare providers to deliver exceptional care.",
      },
      right: {
        title: "Building Trust and Partnerships: Connecting with Care",
        description:
          "At My Doctor Shop, we believe that building trust and fostering strong partnerships are vital. We take great pride in connecting with our customers, understanding their unique requirements, and providing exceptional service. By delivering reliable products, competitive pricing, and outstanding customer support, we have earned the trust and loyalty of healthcare professionals and facilities.",
      },
    },
    {
      id: 3,
      left: {
        title: "Embracing Innovation: Advancing Healthcare",
        description:
          "We embrace innovation as a driving force behind our mission. We constantly explore new technologies, advancements, and best practices to enhance our product offerings. By staying ahead of the curve, we ensure that our customers have access to the most advanced and effective healthcare solutions. Our commitment to innovation enables us to support healthcare providers in delivering the highest quality care to their patients.",
      },
      right: {
        title:
          "Quality Assurance and Compliance: Ensuring Safety and Reliability",
        description:
          "Quality assurance and compliance are of utmost importance to us. We adhere to rigorous quality control processes and comply with all relevant regulations and standards. By upholding the highest industry standards, we ensure the safety and efficacy of our products. Our commitment to quality and compliance reflects our dedication to supporting healthcare providers in delivering care with confidence and peace of mind.",
      },
    },
    {
      id: 4,
      left: {
        title: "Looking to the Future: Advancing Care Together",
        description:
          "As we look to the future, our commitment remains unwavering. We will continue to expand our product offerings, strengthen our partnerships, and invest in cutting-edge technologies. By advancing care together, we aim to make a lasting impact on the healthcare industry, improve patient outcomes, and empower healthcare professionals.",
      },
      right: {
        title: "Join Us on the Journey: Connecting Care, Improving Lives",
        description:
          "We invite healthcare professionals, facilities, and strategic partners to join us on our journey of connecting care and improving lives. Experience the My Doctor Shop difference by exploring our wide range of medical supplies and discovering the exceptional service we provide. Together, we can forge stronger connections, elevate the quality of care, and make a positive difference in healthcare.",
      },
    },
  ];

  return (
    <div className="custom-container-parent">
      <div className="custom-container">
        <div className="custom-timeline">
          {/* Central Timeline Line */}
          <div className="custom-timeline-line"></div>

          {/* Timeline Content */}
          <div className="relative">
            {timelineData.map((item) => (
              <div key={item.id} className="custom-timeline-item">
                {/* Center Dot */}
                <div className="custom-timeline-dot">
                  <FaCircle className="w-3 h-3" />
                </div>

                <div className="custom-timeline-content">
                  {/* Left Content */}
                  <div className="custom-content-left">
                    <div className="custom-content-box right">
                      <div className="custom-triangle"></div>
                      <h3>{item.left.title}</h3>
                      <p>{item.left.description}</p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="custom-content-right">
                    <div className="custom-content-box left">
                      <div className="custom-triangle"></div>
                      <h3>{item.right.title}</h3>
                      <p>{item.right.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
