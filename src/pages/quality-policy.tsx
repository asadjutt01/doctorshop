import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function QualityPolicy() {

    return (
        <div>

            <HeaderWithCat />
            <div className="policy-parent">
                <div className="policy-content-header">
                    <h1 className="policy-heading">Quality Policy</h1>
                </div>
            </div>
            <div className="lg-container content-container">
                <div className="page-padding">
                    <div className="custom-card-container-wrapper">
                        <div className="custom-card-container">
                            <div className="content-section">
                                <h2 className="content-section-heading">Introduction:</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                        My Doctor Shop Ltd is a renowned provider of healthcare products and services, dedicated to maintaining global recognition for quality, innovation, and service. Our goal is to deliver products and services that meet customer expectations right from the first instance and ensure timely delivery in alignment with our esteemed reputation.
                                    </p>
                                </div>


                                <h2 className="content-section-heading">Quality Standards and Accreditation:</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                        To ensure the required quality standards for our products and services, we employ customer-centric marketing techniques to bring innovative and well-designed products to the market. Our commitment to quality is reinforced through the application of modern design, manufacturing, and quality methods. Our Quality Management System is accredited to IS013485:2016 and ISO 9001:2015 standards, and complies with the European medical devices Regulation (2017/745/EU) (MDR) and the in vitro diagnostic medical devices Regulation (2017/746/EU) (IVDR) & UKCA.
                                    </p>
                                </div>

                                <h2 className="content-section-heading">Continual Improvement:</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                    In the dynamic and competitive landscape of global medical technology, achieving and sustaining quality goals requires the implementation of the concept of continual improvement. This philosophy is embedded in our organization through comprehensive training programs and a shared commitment to excellence among all employees. Senior management actively engages in ongoing reviews of product and service quality, as well as the maintenance and effectiveness of our Quality Management System.
                                    </p>
                                </div>

                                <h2 className="content-section-heading">Internal Audits and Improvement:</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                    We have established a system of regular planned Internal Quality Audits, which serves to identify opportunities for improvement. These audits ensure that any necessary enhancements are implemented through appropriate and effective corrective and/or preventive actions. By continuously assessing and enhancing our processes, we strive to elevate the quality of our products and services.
                                    </p>


                                </div>

                                <h2 className="content-section-heading">Legal Compliance:</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                    In addition to our commitment to internal quality standards, we also adhere to applicable laws and regulations. Our Quality Management System ensures compliance with relevant regulations, including the European medical devices Regulation (2017/745/EU) (MDR), the in vitro diagnostic medical devices Regulation (2017/746/EU) (IVDR), and the UKCA requirements.
                                    </p>
                                </div>

                                <p className="simple-description">By adhering to this Quality Policy and pursuing continual improvement, My Doctor Shop Ltd aims to provide our customers with outstanding products and services that consistently meet their needs and exceed their expectations.</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
}
