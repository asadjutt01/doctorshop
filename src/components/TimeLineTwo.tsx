import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "2025-01-01",
      title: "Event 1",
      description:
        "My Doctor Shop, the transforming presence in medical wholesale supplies. We are dedicated to delivering exceptional healthcare solutions, offering a comprehensive range of medical consumables, medical disposables, medical equipment, Infection control, personal protective equipment (PPE) and pharmaceuticals. As your trusted strategic partner, we take great pride in driving positive change and innovation in the medical supplies industry.",
    },
    {
      date: "2025-01-05",
      title: "Event 2",
      description:
        "Since 2011, My Doctor Shop has been connecting care by establishing strong connections and building robust partnerships with reputable manufacturers and suppliers. This has enabled us to provide an extensive range of high-quality medical products and ensure a seamless flow of medical supplies to healthcare providers.",
    },
    {
      date: "2025-01-10",
      title: "Event 3",
      description:
        "Our differentiating factor lies in our personalised approach and tailored solutions. We prioritise building strong partnerships by actively listening to your unique needs and provide customised support.",
    },
    {
      date: "2025-01-12",
      title: "Event 4",
      description:
        "As pioneers in innovative logistics and distribution, we have revolutionised the supply chain landscape to enhance efficiency and minimize disruptions. Through our state-of-the-art systems, we guarantee swift and reliable order fulfilment, ensuring uninterrupted access to vital supplies.",
    },
    {
      date: "2025-01-15",
      title: "Event 5",
      description:
        "Beyond being a supplier, we are advocates for your success and partners in your mission to deliver exceptional patient care. When you choose My Doctor Shop, you gain a dedicated partner who shares your vision, passion, and unwavering commitment to improving healthcare outcomes.",
    },
    {
      date: "2025-01-20",
      title: "Event 6",
      description:
        "Experience the My Doctor Shop difference and discover why we are the preferred medical supplies partner. With our comprehensive product range, reliable service, innovative solutions, and personalised support, we are fully committed to helping you achieve your goals.",
    },
    {
      date: "2025-01-25",
      title: "Event 7",
      description:
        "Choose My Doctor Shop - Your trusted strategic partner in excellence and experience the unparalleled service and quality that sets us apart in the industry.",
    },
  ];

  return (
    <div className="timeline-container-parent">
      <div className="timeline-container">
        <div className="timeline">
          {events.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div
                className={`timeline-content ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div
                  className={`timeline-arrow ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                ></div>
                <time className="timeline-date">{event.date}</time>
                <h3 className="timeline-item-title">{event.title}</h3>
                <p className="timeline-item-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
