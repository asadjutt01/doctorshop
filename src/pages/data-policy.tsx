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
                    <h1 className="policy-heading">Data Policy</h1>
                </div>
            </div>
            <div className="lg-container content-container">
                <div className="page-padding">
                    <div className="custom-card-container-wrapper">
                        <div className="custom-card-container">

                            <div className="content-section">
                                <h2 className="content-section-heading">How We Manage Your Data</h2>
                                <p className="simple-description">
                                    In line with the General Data Protection Regulation (GDPR), effective from 25th May 2018, we are committed to providing transparency in how we manage your data. To make it easier for you to understand, we have provided answers to frequently asked questions (FAQs) covering topics such as the use of your data and how we protect it.
                                </p>
                                {/* GDPR Compliance Introduction */}
                                <div className="content-section-container">
                                    <div>
                                        <ul className="content-section-list-count">
                                            <li>What do we do with your personal data?</li>
                                            <li>How do we protect your data?</li>
                                            <li>How long do we keep your data?</li>
                                            <li>What personal data do we hold?</li>
                                            <li>Who do you give my data to?</li>
                                            <li>How can you update your preferences?</li>
                                            <li>How to find out more?</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">1. What do we do with your personal data?</h2>
                                {/* What Do We Do With Your Personal Data */}
                                <p className="simple-description">
                                    "Personal data" refers to any information that can be used to identify a person, such as a name, home address, personal telephone number, or a named email address (e.g., firstname.surname@email.com). At My Doctor Shop, we prioritize the protection of your personal data and utilize it to:
                                </p>
                                <div className="content-section-container">
                                    <div>
                                        <ul className="content-section-list-alphabet" >
                                            <li>Contact you with order updates, delivery tracking, and copies of your invoices.</li>
                                            <li>Send you discount codes, monthly offers, and other relevant information that we believe will be of interest to you.</li>
                                            <li>Inform you about important business news and updates regarding your account with My Doctor Shop.</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">2. How do we protect your data?</h2>
                                {/* How Do We Protect Your Data */}
                                <div className="content-section-container">
                                    <div>
                                        <p className="simple-description">
                                            We safeguard your personal information at all times by implementing appropriate security measures and technical controls. Our employees who handle your data are required to comply with strict standards of European data protection law. We ensure that all our staff members are trained to respect and protect your data.
                                        </p>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">3. How long do we keep your data?</h2>
                                {/* How Long Do We Keep Your Data */}
                                <div className="content-section-container">
                                    <div>
                                        <p className="simple-description">
                                            For marketing purposes, we retain your personal data for a duration of 3 years, considering that you may not make a purchase on every occasion. However, we often observe repeat purchases from customers within this time period. Regarding account-related data and transactions, we are legally obligated to retain data such as your name, address, and transaction details for a period of 7 years.
                                        </p>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">4. What personal data do we hold?</h2>
                                {/* What Personal Data Do We Hold */}
                                <div className="content-section-container">
                                    <div>
                                        <p className="simple-description">
                                            We only hold the personal data that is necessary. In most cases, the personal data we hold consists of your name and email address. If you are not a "Business Customer," we may also hold your home address and personal telephone number, which you provided at the time of ordering.
                                        </p>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">5. Who do we share your data with?</h2>
                                {/* Who Do We Share Your Data With */}
                                <div className="content-section-container">
                                    <div>

                                        <p className="simple-description">
                                            We do not sell or distribute your personal information to any third parties unless we have obtained your permission or are required to do so by law. In cases where you request us to transfer your personal information to a third party (e.g., another service provider), we will provide the relevant personal information held by us for you to share with that third party.
                                        </p>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">6. How can you update your preferences?</h2>
                                {/* How Can You Update Your Preferences */}
                                <div className="content-section-container">
                                    <div>

                                        <p className="simple-description">
                                            If you no longer wish to receive marketing material from us via email, post, fax, or telephone, simply contact us using the details provided below, and we will remove you from our list. However, please note that we are legally obliged to retain your information in certain circumstances. Under GDPR, you also have the "Right to be Forgotten," which means we will delete all your personal data unless required to keep it on file for legal reasons.
                                        </p>
                                    </div>
                                </div>
                                <h2 className="content-section-heading">How to Find Out More</h2>
                                <div className="content-section-container">
                                    <div>
                                        <p className="simple-description">
                                            If you would like further information regarding:
                                        </p>
                                        <ul className="content-section-list-none">
                                            <li>- The information being processed</li>
                                            <li>- A copy of the information being processed</li>
                                            <li>- Correction or deletion of your information (commonly known as the right to be forgotten)</li>
                                            <li>- Restriction of processing</li>
                                            <li>- Requesting your data to be transferred to someone else</li>
                                            <li>- Objecting to the processing of your information</li>
                                        </ul>
                                        <p className="simple-description">
                                            Please feel free to contact us using the details provided below. More details about our approach to data protection at a group level can be found at&nbsp;
                                            <Link href="https://www.mydoctorshop.co.uk/privacy-policy">
                                                <span className="underline">www.mydoctorshop.co.uk/privacy-policy</span>
                                            </Link>.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="content-section-heading">Who Are We?</h2>
                                <div className="content-section-container">
                                    <div>
                                        <p className="simple-description">
                                            My Doctor Shop, the transforming presence in medical wholesale supplies. We are dedicated to delivering exceptional healthcare solutions, offering a comprehensive range of medical consumables, medical disposables, medical equipment, Infection control, personal protective equipment (PPE), and pharmaceuticals. As your trusted strategic partner, we take great pride in driving positive change and innovation in the medical supplies industry.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="content-section-heading">How to Contact Us</h2>
                                <div className="content-section-container">
                                    <div>
                                        {/* Contact Information */}
                                        <div className="region-title">Contact Information:</div>
                                        <ul className="content-section-list-none padding-bottom-primary">
                                            <li><strong>Telephone:</strong>&nbsp;0330 133 1786</li>
                                            <li><strong>
                                                Email:</strong>&nbsp;
                                                <Link href="mailto:info@mydoctorshop.co.uk">
                                                    <span className="underline mail">info@mydoctorshop.co.uk</span>
                                                </Link>
                                            </li>
                                        </ul>

                                        {/* Company Address */}
                                        <div className="region-title">Company Address:</div>
                                        <ul className="content-section-list-none padding-bottom-primary">
                                            <li>My Doctor Shop Ltd</li>
                                            <li>Unit 5 Ray Street Ent Centre</li>
                                            <li>Ray Street</li>
                                            <li>Huddersfield</li>
                                            <li>HD1 6B</li>
                                        </ul>

                                        {/* Company Details */}
                                        <div className="region-title">Company Details:</div>
                                        <ul className="content-section-list-none padding-bottom-primary">
                                            <li><strong>Company No:&nbsp;</strong> 7326383</li>
                                            <li><strong>VAT No:&nbsp;</strong> GB 998 1213 86</li>
                                        </ul>
                                        <p className="note-description">
                                            We aim to respond to your request within 3 working days, and we will fulfil any reasonable requests for a copy of the personal data we hold on you within 30 days, as required by law.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    
  );
}
