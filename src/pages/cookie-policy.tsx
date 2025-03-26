import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Delivery() {
  return (
    <div>
      {/* <TopBar /> */}
      <HeaderWithCat />
      <div className="policy-parent">
        <div className="policy-content-header">
          <h1 className="policy-heading">Cookie Policy</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <h2 className="content-section-heading">Introduction</h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      1.1 We use cookies on our Site. Cookies are files that
                      store information on your computer hard drive or browser,
                      allowing us to recognize that you have visited our website
                      before. We utilize cookies to provide you with the best
                      possible experience on our Site. This Cookies Policy
                      provides more details on the cookies used on our Site.
                    </p>
                    <p className="simple-description">
                      1.2 You can disable cookies from your browser by using our
                      Cookie Consent Tool.
                    </p>
                  </div>
                </div>
                <h2 className="content-section-heading">
                  More Information About Cookies
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      2.1 Our Site uses cookies for the following purposes:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        - Remembering your language and country preferences on
                        the Site.
                      </li>
                      <li>
                        - Remembering the items you added to your basket on your
                        last visit, so we can retain your basket contents if you
                        didn't purchase them.
                      </li>
                      <li>
                        - Tracking customer behaviour, such as the pages visited
                        during your browsing session and the rate of basket
                        abandonment. This helps us improve the Site and enhance
                        your browsing experience.
                      </li>
                    </ul>
                    <p className="note-description">
                      2.2 We do not use cookies or other tracking technologies
                      to collect or store information on your personal computer
                      or other devices when you visit our Site, nor do we track
                      your online activities outside of our Site.
                    </p>
                    <p className="note-description">
                      2.3 Our Site also utilizes some third-party tools, such as
                      Google Analytics and Facebook, which may place cookies via
                      our Site.
                    </p>
                    <p className="note-description">
                      2.4 You can view all the cookies we use by visiting our
                      Cookie Consent Tool.
                    </p>
                    <p className="note-description">
                      Please note that by continuing to use our Site, you
                      consent to the use of cookies as described in this Cookie
                      Policy. If you have any questions or concerns about our
                      use of cookies, please contact us.
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
