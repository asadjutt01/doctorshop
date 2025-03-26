import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Delivery() {
  return (
    <div>
      <HeaderWithCat />
      <div className="policy-parent">
        <div className="policy-content-header">
          <h1 className="policy-heading corporate-heading">Corporate Social Responsibility</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      Corporate Social Responsibility (CSR) is our enduring
                      commitment to ethical behaviour and contributing to
                      economic development while enhancing the well-being of our
                      workforce, their families, the local community, society at
                      large, and the environment. At My Doctor Shop, our success
                      extends beyond sales; it encompasses the positive impact
                      we can achieve through all aspects of our business, driven
                      by our CSR policy.
                    </p>
                    <p className="simple-description">
                      1.2 You can disable cookies from your browser by using our
                      Cookie Consent Tool.
                    </p>
                  </div>
                </div>
                <h2 className="content-section-heading">Equal Opportunities</h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      My Doctor Shop upholds a strong commitment to equal
                      opportunities for all employees, aligning with applicable
                      employment laws in the UK. Our company policy ensures that
                      every employee, irrespective of disability, age, sex,
                      gender reassignment, pregnancy, colour, race, nationality
                      or ethnic or national origins, marital status, sexual
                      orientation, religion or belief, or any other form of
                      discrimination prohibited by law, has equal opportunities
                      in employment. We maintain an inclusive work environment,
                      free from abusive or unprofessional conduct, where all
                      employees are treated with dignity and respect.
                    </p>{" "}
                    <br />
                    <p>
                      {" "}
                      We recognize that the success of our company relies on our
                      employees' performance. To support their growth, we
                      provide training, support, resources, and encouragement,
                      allowing them to enhance their skills, knowledge, and
                      experience, ultimately helping them reach their potential
                      and assisting the company in achieving its strategic
                      goals.
                    </p>
                  </div>
                </div>

                {/* Transparent Communication */}
                <h2 className="content-section-heading">
                  Transparent Communication
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      Effective communication is essential at My Doctor Shop to
                      ensure our employees stay informed about key information
                      within the company. We employ various communication
                      methods, such as email, noticeboards, employee briefings,
                      and employee forums, to engage with our staff regularly.
                      By fostering regular and effective communication, we
                      encourage a stronger connection between employees and the
                      company, resulting in a more positive attitude towards
                      their roles, suppliers, and our customers.
                    </p>{" "}
                  </div>
                </div>
                {/* Transparent Communication */}
                {/* Customer Commitment */}
                <h2 className="content-section-heading">Customer Commitment</h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      At My Doctor Shop, we are fully dedicated to providing the
                      best service and support to our customers. We offer a wide
                      range of products and service solutions that enable their
                      businesses to thrive. Our mission is to be the partner of
                      choice in delivering exceptional value on everyday medical
                      products and service solutions. As a market leader in our
                      defined sector, we strive to develop new categories in
                      aligned markets, becoming the primary or secondary choice
                      in those sectors. We prioritize lean and cost-efficient
                      operations, focusing on service and added value for our
                      customer base.
                    </p>{" "}
                    <br />
                    <p>
                      To ensure industry-leading levels of service, we operate
                      under the ISO9001 Quality Management System, maintaining
                      full certification. We continuously set objectives and
                      targets, reviewing them regularly to ensure they are
                      understood, acted upon, and met, which enables us to
                      improve and enhance our performance continually.
                    </p>
                  </div>
                </div>
                {/* Customer Commitment */}
                {/* Community Engagement */}
                <h2 className="content-section-heading">
                  Community Engagement
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      At My Doctor Shop, we actively contribute to and address
                      societal issues affecting the communities in which we
                      operate. We demonstrate our commitment through both time
                      and financial support to a range of national and local
                      charities. Additionally, we prioritize the use of UK-based
                      suppliers whenever possible, not only to reduce energy
                      waste and carbon emissions from deliveries but also to
                      support the UK-based economy and community.
                    </p>{" "}
                    <br />
                    <p>
                      As part of our commitment to the education sector, we
                      distribute surplus medical supplies to local and national
                      charities, ensuring they are utilized effectively.
                    </p>
                  </div>
                </div>
                {/* Community Engagement */}
                {/* Environmental Sustainability */}
                <h2 className="content-section-heading">
                  Environmental Sustainability
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      My Doctor Shop is firmly committed to reducing our
                      environmental impact and continuously improving our
                      sustainability efforts to minimize our carbon footprint.
                      Environmental considerations guide our decision-making
                      processes across all aspects of our business. We promote
                      green products, encourage green practices among our
                      customers, evaluate the environmental practices and
                      credentials of our suppliers, and regularly review our own
                      operations to enhance our performance in line with our
                      green objectives.
                    </p>{" "}
                    <br />
                    <p>
                      We prioritize transport efficiency and work closely with
                      our transport service providers to reduce mileage and CO2
                      emissions through effective route planning software. Our
                      aim is to ensure our transport network becomes as
                      efficient and environmentally sustainable as possible. We
                      adhere to the UK Waste Electrical Equipment Regulations,
                      fulfilling our legal responsibility as a producer to
                      collect and recycle our obligated WEEE products. Our
                      commitment to sustainability extends to the office
                      supplies industry, where we strive to lead with maximum
                      awareness among resellers and sustainable practices in our
                      operations.
                    </p>{" "}
                    <br />
                    <p>
                      We adhere to the UK Waste Electrical Equipment
                      Regulations, fulfilling our legal responsibility as a
                      producer to collect and recycle our obligated WEEE
                      products. Our commitment to sustainability extends to the
                      office supplies industry, where we strive to lead with
                      maximum awareness among resellers and sustainable
                      practices in our operations.
                    </p>
                  </div>
                </div>
                {/* Environmental Sustainability */}
                {/* Supplier Relationships */}
                <h2 className="content-section-heading">
                  Supplier Relationships
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      At My Doctor Shop, we understand the importance of
                      selecting suppliers with ethical credentials, respecting
                      human ethics, labour rights, health and safety
                      regulations, and legal compliance. We aim to establish
                      solid, strong partnerships with our suppliers, continually
                      developing these relationships to enhance service and
                      product offerings. By securing the right quality and
                      price, we provide our customers with a stable supply of
                      materials, earning their full confidence.
                    </p>{" "}
                    <br />
                    <p>
                      In our pursuit of environmental responsibility, we source
                      environmentally friendly and recycled products, holding a
                      PEFC accreditation. To increase awareness of environmental
                      impacts, we offer publications focused on supporting our
                      customers in developing sales in this important area,
                      providing a range that meets the environmental
                      requirements of many organizations' Corporate Social
                      Responsibility policies.
                    </p>{" "}
                    <br />
                    <p>
                      We work closely with our suppliers, conducting regular
                      reviews that include factory inspections to ensure
                      compliance with recognized standards and regulations. We
                      strongly support international efforts to promote ethical
                      principles and practices in preventing the exploitation
                      and abuse associated with modern slavery and human
                      trafficking. We expect commitment to these principles from
                      all organizations with which we do business and will not
                      knowingly support or engage in business with entities
                      involved in slavery or human trafficking. This
                      comprehensive statement highlights our commitment to
                      corporate social responsibility, equal opportunities,
                      transparent communication, customer satisfaction,
                      community engagement, environmental sustainability, and
                      responsible supplier relationships. It also addresses the
                      relevance of applicable laws in the UK, ensuring
                      compliance and ethical practices in all aspects of our
                      business operations.
                    </p>{" "}
                    <br />
                    <p>
                      We strongly support international efforts to promote
                      ethical principles and practices in preventing the
                      exploitation and abuse associated with modern slavery and
                      human trafficking. We expect commitment to these
                      principles from all organizations with which we do
                      business and will not knowingly support or engage in
                      business with entities involved in slavery or human
                      trafficking. This comprehensive statement highlights our
                      commitment to corporate social responsibility, equal
                      opportunities, transparent communication, customer
                      satisfaction, community engagement, environmental
                      sustainability, and responsible supplier relationships. It
                      also addresses the relevance of applicable laws in the UK,
                      ensuring compliance and ethical practices in all aspects
                      of our business operations.
                    </p>
                    <br />
                    <p>
                      This comprehensive statement highlights our commitment to
                      corporate social responsibility, equal opportunities,
                      transparent communication, customer satisfaction,
                      community engagement, environmental sustainability, and
                      responsible supplier relationships. It also addresses the
                      relevance of applicable laws in the UK, ensuring
                      compliance and ethical practices in all aspects of our
                      business operations.
                    </p>
                  </div>
                </div>
                {/* Supplier Relationships */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
