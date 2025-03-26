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
          <h1 className="policy-heading">Delivery & Return</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <h2 className="content-section-heading">Delivery</h2>

                {/* UK Mainland */}
                <div className="content-section-container">
                  <div>
                    <div className="region-title">UK Mainland</div>
                    <ul className="content-section-list-none">
                      <li>- Delivery time: 3-5 working days</li>
                      <li>
                        - Free delivery on orders over £49.00 (excluding VAT)
                      </li>
                      <li>
                        - Delivery charge of £7.99 (excluding VAT) for orders
                        under £49.00 (excluding VAT)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* UK Non-Mainland */}
                <div className="content-section-container">
                  <div>
                    <div className="region-title">UK Non-Mainland</div>
                    <ul className="content-section-list-none">
                      <li>- Delivery date estimates will be provided</li>
                      <li>
                        - Delivery charges will be communicated in advance
                        during the order confirmation process
                      </li>
                      <li>
                        - Non-Mainland areas include Jersey, Guernsey, Isle of
                        Man, the Channel Islands, the Isle of Wight, Isles of
                        Scilly, Northern Ireland, and remote areas of Scotland
                      </li>
                    </ul>
                  </div>
                </div>

                {/* International Delivery */}
                <div className="content-section-container">
                  <div>
                    <div className="region-title">International Delivery</div>
                    <ul className="content-section-list-none">
                      <li>- Delivery date estimates will be provided</li>
                      <li>
                        - Delivery charges will be communicated in advance
                        during the order confirmation process
                      </li>
                      <li>
                        - Customers are responsible for any specific customs
                        requirements (Please inform us in advance)
                      </li>
                      <li>
                        - All customs, duty charges, or any taxes due in the
                        delivery country are the customer's responsibility
                      </li>
                      <li>
                        - My Doctor Shop will not be held responsible for
                        customs clearance and refusal; all charges will be the
                        customer's responsibility
                      </li>
                    </ul>
                    <p className="note-description">
                      Please note: The above information is subject to change.
                      For more details regarding delivery options, charges, and
                      specific requirements, please contact our Sales support
                      team. <br />
                      Our Sales Support Team are available: Monday - Friday from
                      9.00am – 5.00pm
                      <br />
                      by contacting them on 0330 1331 786 option 1, or email the
                      team at &nbsp;
                      <Link href="mailto:sales@mydoctorshop.co.uk">
                        <span className="underline mail">
                          sales@mydoctorshop.co.uk
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                {/* Returns Section */}
                <h2 className="content-section-heading">Returns</h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      You may return most new items within 30 days of delivery
                      for a refund, provided that the following conditions are
                      met:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        - Items must be unopened, in their original and intact
                        packaging.
                      </li>
                      <li>
                        - Items must not be relabelled, and tamper-evident seals
                        must be intact.
                      </li>
                      <li>- The goods must be fit for sale.</li>
                    </ul>
                    <p className="simple-description">
                      If the return is a result of My Doctor Shop's error (such
                      as receiving an incorrect or defective item), we will
                      cover the return shipping costs.
                    </p>
                    <p className="simple-description">
                      For detailed information on our Returns policy and
                      Warranty and Liability policy, please refer to our&nbsp;
                      <Link href="/terms-and-conditions">
                        <span className="underline">Terms & Conditions</span>
                      </Link>
                      &nbsp; for further information.
                    </p>
                  </div>
                </div>
                {/* Refunds Section */}
                <h2 className="content-section-heading">Refunds</h2>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      Refunds may take up to 15 working days after returning
                      your order to My Doctor Shop. However, in many cases, the
                      refund process is faster, depending on the following
                      factors:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        - Time taken for us to receive your returns from the
                        courier (5-7 working days).
                      </li>
                      <li>
                        - Processing time once we receive your return (2-3
                        working days).
                      </li>
                      <li>
                        - Time required for your bank to process the refund
                        request (3-5 working days).
                      </li>
                    </ul>
                    <p className="note-description">
                      Please note that there is a 3% credit transaction charge
                      if you paid by credit card. <br />
                      If you have any further questions or concerns regarding
                      returns or refunds, please contact our customer care team
                      for assistance. <br />
                      For returns, our Customer Care Team are available Monday -
                      Friday from 9.00am – 5.00pm <br />
                      by contacting them on 0330 1331 786 option 2, or email the
                      team at&nbsp;
                      <Link href="mailto:ccs@mydoctorshop.co.uk">
                        <span className="underline mail">
                          ccs@mydoctorshop.co.uk
                        </span>
                      </Link>
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
