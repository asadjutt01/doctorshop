import React from "react";
// import './Timeline.scss';

const Timeline = () => {
  const events = [
    {
   
   
      description:
        "My Doctor Shop, the transforming presence in medical wholesale supplies. We are dedicated to delivering exceptional healthcare solutions, offering a comprehensive range of medical consumables, medical disposables, medical equipment, Infection control, personal protective equipment (PPE) and pharmaceuticals. As your trusted strategic partner, we take great pride in driving positive change and innovation in the medical supplies industry.",
    },
    {

      description:
        "Since 2011, My Doctor Shop has been connecting care by establishing strong connections and building robust partnerships with reputable manufacturers and suppliers. This has enabled us to provide an extensive range of high-quality medical products and ensure a seamless flow of medical supplies to healthcare providers. Our unwavering commitment to quality ensures that every item in our inventory meets the highest industry standards, instilling utmost confidence in our offerings.",
    },
    {
     
      description:
        "Our differentiating factor lies in our personalised approach and tailored solutions. We prioritise building strong partnerships by actively listen to your unique needs and provide customised support. Whether you require assistance with product inquiries, order management, or identifying suitable solutions for healthcare providers, our knowledgeable team is here to guide you at every step of the way. We ensure timely access to the right products, delivering the best value for your specific requirements.",
    },
    {
    
      description:
        "As pioneers in innovative logistics and distribution, we have revolutionised the supply chain landscape to enhance efficiency and minimize disruptions. Through our state-of-the-art systems, we guarantee swift and reliable order fulfilment, ensuring uninterrupted access to vital supplies. We deeply understand the importance of time in patient care and remain committed to being your dependable partner at every step of the way.",
    },
    {
     
      description:
        "Beyond being a supplier, we are advocates for your success and partners in your mission to deliver exceptional patient care. When you choose My Doctor Shop as your medical supplier, you gain a dedicated partner who shares your vision, passion, and unwavering commitment to improving healthcare outcomes.",
    },
    {
   
      description:
        "Experience the My Doctor Shop difference and discover why we are the preferred medical supplies partner. With our comprehensive product range, reliable service, innovative solutions and personalised support, we are fully committed to helping you achieve your goals and deliver the highest standard of care to your patients.",
    },
    {
   
      description:
        "Choose My Doctor Shop - Your trusted strategic partner in excellence and experience the unparalleled service and quality that sets us apart in the industry.",
    },
  ];

  return (
    <div className="timeline-container-parent">
      <div className="timeline-container">
        <div className="timeline">
          {events.map((event:any, index:number) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-circle"></div>
              <div className="timeline-box">
                <div className="timeline-arrow"></div>
                <time className="timeline-date">{event.date}</time>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
