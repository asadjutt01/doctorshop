import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsUse() {
  return (
    <div>
      <HeaderWithCat />
      <div className="policy-parent">
        <div className="policy-content-header">
          <h1 className="policy-heading">Terms of Use</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <h2 className="content-section-heading">1. Definitions</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    1.1 www.mydoctorshop.co.uk (the Site) is operated by My
                    Doctor Shop Ltd (referred to as "we" or "us").
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    1.2 Your use of the Site is subject to the terms and
                    conditions outlined in this document (Terms of Use). By
                    accessing, browsing, using, registering with, or placing an
                    order on the Site, you indicate your acceptance of these
                    Terms of Use in their entirety. These Terms of Use
                    constitute a legal agreement between you and us and can only
                    be amended with our consent. Please read these Terms of Use
                    in conjunction with any additional information provided on
                    the Site regarding its operation and available services. If
                    you do not agree to these Terms of Use, please stop using
                    the Site immediately.
                  </p>
                  <p className="simple-description ">
                    1.3 The supply of any products or services you order from
                    the Site is subject to our Terms & Conditions. We also
                    recommend reading our Privacy Policy.
                  </p>
                  <p className="simple-description ">
                    1.4 We reserve the right to modify these Terms of Use at any
                    time without prior notice by updating them on the Site.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  2. Accessing the Site
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    2.1 We cannot guarantee uninterrupted or error-free
                    operation of the Site. We may suspend, withdraw,
                    discontinue, or modify all or part of the Site without
                    notice. We shall not be liable to you if the Site is
                    unavailable at any time or for any period. You must not
                    attempt to interfere with the proper functioning of the
                    Site. In particular, you must not attempt to bypass
                    security, tamper with, hack into, or disrupt the Site or any
                    computer system, server, router, or other internet-connected
                    device.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    2.2 You are responsible for ensuring that your computer
                    system meets the necessary technical specifications to use
                    the Site and is compatible with it. We do not guarantee or
                    warrant that any content on the Site will be free from
                    infection, viruses, or other code that may have destructive
                    properties. It is your responsibility to implement adequate
                    procedures and virus checks to ensure the safety and
                    reliability of data input and output.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    2.3 We may restrict access to certain features or parts of
                    the Site, including the entire Site, to registered users. If
                    you are provided with a user identification code, password,
                    or any other information as part of our security procedures,
                    you must treat it as confidential and not disclose it to any
                    third party. We reserve the right to disable any user
                    identification code or password, whether chosen by you or
                    allocated by us, if we believe you have failed to comply
                    with these Terms of Use. You are responsible for ensuring
                    that all individuals who access the Site through your
                    internet connection are aware of and comply with these Terms
                    of Use.
                  </p>
                  <p className="simple-description">
                    2.4 The purchase of certain products and services on the
                    Site may be subject to age requirements specified by law. We
                    are prohibited by law from supplying these products or
                    services to individuals who do not meet the age
                    requirements. If you are underage, you must not attempt to
                    order such products or services through the Site.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  3. Accuracy of Information
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    3.1 We strive to ensure the accuracy of information on the
                    Site. However, any commentary or material posted on the Site
                    should not be considered as advice to rely upon. Except
                    where our Terms & Conditions and/or Privacy Policy apply, we
                    make no representation or warranty regarding the accuracy,
                    completeness, or timeliness of any information on the Site.
                    To the fullest extent permitted by law, we accept no
                    liability for any loss or damage resulting from your
                    reliance on such information.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    3.2 User-generated content reflects the opinions of the
                    respective users and does not necessarily represent our
                    opinions.
                  </p>
                  <p className="simple-description">
                    3.3 If you find any inaccurate information on the Site,
                    please notify us, and we will make reasonable efforts to
                    correct it promptly, if we agree that a correction is
                    needed.
                  </p>
                </div>

                <h2 className="content-section-heading">4. Use of Content</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    4.1 Customers entering into transactions with the Company
                    expressly warrant that they are authorised to accept and are
                    accepting these Conditions.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    4.1 The copyright, database rights, trademarks, domain
                    names, and other intellectual property rights in all
                    material and information on the Site ("IPR Content") belong
                    to us or are licensed to us.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    4.2 You may download or print copies of the IPR Content on
                    the Site for your personal, non-commercial use and
                    information only. If you download or print copies of the IPR
                    Content, you must retain any copyright or other intellectual
                    property notices contained in the original material.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    4.3 You are not permitted to copy or adapt the IPR Content,
                    Site layout, or code, or create an archive or database
                    containing all or parts of the IPR Content for any
                    commercial purpose or other forms of commercial exploitation
                    without our explicit consent.
                  </p>
                  <p className="simple-description">
                    4.4 Our name may not be used in any manner, including in
                    advertising or publicity that involves distributing
                    materials on the Site, without our prior written consent.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  5. User-Generated Content
                </h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    5.1 By submitting content (excluding your personal data) to
                    the Site, you confirm that you have the right to use such
                    content, and your submission, along with your agreement to
                    these Terms of Use, constitutes an assignment of any
                    intellectual property rights in that content to us. Any
                    content you upload to the Site will be considered
                    non-confidential and non-proprietary, and we have the right
                    to use, copy, remove, distribute, and disclose such content
                    to third parties for any purpose, including but not limited
                    to our own use, with or without attribution, in any media.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  6. Links to this and Other Websites
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    6.1 From time to time, we may provide links that allow you
                    to access third-party websites directly from the Site. These
                    third-party sites are beyond our control, and unless
                    otherwise stated, we have no relationship with the third
                    parties and do not contribute to the content of such
                    websites. When you leave the Site by clicking on these
                    links, we cannot accept responsibility for any issues
                    arising from the third parties' use of your data, the
                    content of those sites, or the services offered by them.
                  </p>
                  <p className="simple-description">
                    6.2 We reserve the right, at our discretion, to prohibit any
                    links from other websites to materials or information on
                    this Site. If you wish to link to the Site, you may do so
                    only if you link to the home page of the Site and comply
                    with the following conditions:
                  </p>
                  <ul className="content-section-list-none">
                    <li>
                      - Do not remove, distort, or alter the size or appearance
                      of our logo.
                    </li>
                    <li>
                      - Do not create a frame or any other browser or border
                      environment around the Site.
                    </li>
                    <li>
                      - Do not imply that we endorse any products or services
                      other than our own.
                    </li>
                    <li>
                      - Do not misrepresent your relationship with us or provide
                      any false or misleading information about us.
                    </li>
                    <li>
                      - Do not use any trademarks displayed on the Site without
                      our express written consent.
                    </li>
                    <li>- Do not link from a website that you do not own.</li>
                    <li>
                      - Do not link from a website that contains distasteful,
                      offensive, or controversial content, infringes
                      intellectual property rights or other rights of any
                      person, or violates any applicable laws and regulations.
                    </li>
                  </ul>
                </div>

                <h2 className="content-section-heading">7. Our Liability</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    7.1 Except where our Terms & Conditions and/or Privacy
                    Policy apply, we accept no liability and provide no
                    warranties or conditions in relation to the Site or its
                    content, to the fullest extent permitted by law.
                  </p>
                  <p className="simple-description">
                    7.2 We provide the Site for domestic and private use only.
                    All terms implied by law, except as provided in these Terms
                    of Use, are excluded. This limitation does not apply to our
                    liability for death or personal injury caused by our
                    negligence, or our responsibility for fraudulent
                    misrepresentation or any other liability that cannot be
                    excluded under English law.
                  </p>
                </div>

                <h2 className="content-section-heading">8. General</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    8.1 My Doctor Shop Ltd is a company registered in England
                    and Wales. Our company registration number is 7326383.
                  </p>
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
