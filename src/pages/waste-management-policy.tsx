import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ModernSlavery() {
  return (
    <div>
      <HeaderWithCat />
      <div className="policy-parent">
        <div className="policy-content-header">
          <h1 className="policy-heading">Waste Management Policy</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <h2 className="content-section-heading">1. Introduction</h2>
                <div className="content-section-container">
                  <p className="simple-description ">
                    This Waste Management Policy has been developed by My Doctor
                    Shop Ltd to address key environmental concerns raised by
                    stakeholders. My Doctor Shop Ltd is committed to managing
                    waste efficiently and sustainably to minimize its
                    environmental impact. Waste, as defined by the Waste
                    Framework Directive (European Directive (WFD) 2006/12/EC),
                    refers to any substance or object that the holder discards,
                    intends to discard, or is required to discard.
                  </p>
                  <br />
                  <p className="simple-description padding-bottom-primaryp">
                    Given the nature of My Doctor Shop Ltd's operations as a
                    sales, support, and distribution organization in the
                    healthcare market, waste varies significantly. The majority
                    of waste is related to product packaging and the disposal of
                    waste paper. Stakeholders have identified specific issues
                    that need to be addressed:
                  </p>
                  <ul className=" content-section-list-none">
                    <li>
                      - Management and reduction of waste packaging in the
                      supply chain
                    </li>
                    <li>- Paper usage at My Doctor Shop Ltd</li>
                  </ul>
                </div>
                <h2 className="content-section-heading">2. The Policy</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    This Policy outlines the following work systems to ensure
                    proper waste management:
                  </p>
                  <ul className=" content-section-list-none padding-bottom-primary">
                    <li>
                      - Enable My Doctor Shop Ltd and its employees to dispose
                      of all waste safely and without harm to the environment or
                      human health.
                    </li>
                    <li>
                      - Ensure that individuals involved in waste handling,
                      production, packaging, transportation, and disposal
                      exercise caution to prevent harm to themselves, others,
                      and the general public.
                    </li>
                    <li>
                      - Develop procedures to manage waste according to the
                      following principles:
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    2.1 Waste Minimization: My Doctor Shop Ltd is responsible
                    for minimizing waste generation as much as reasonably and
                    economically practicable.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    2.2 Reuse: My Doctor Shop Ltd will endeavor to reuse
                    articles that are still usable and have not reached the end
                    of their life whenever it is reasonably and economically
                    feasible.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    2.3 Recycling: My Doctor Shop Ltd will promote and implement
                    waste recycling to minimize the amount of waste sent to
                    landfills.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    2.4 Disposal: In cases where waste production is
                    unavoidable, My Doctor Shop Ltd will ensure that the
                    segregation, storage, handling, transportation, and disposal
                    processes comply with applicable legislation.
                  </p>
                </div>
                <h2 className="content-section-heading">3. Objectives</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    My Doctor Shop Ltd aims to continuously improve its
                    environmental performance by:
                  </p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>
                      - Contributing to the reduction of commercial and
                      industrial waste going to landfills.
                    </li>
                    <li>
                      - Developing and implementing sustainable processes and
                      procedures.
                    </li>
                    <li>
                      - Ensuring waste is recovered or disposed of without
                      endangering human health or harming the environment.
                    </li>
                    <li>
                      - Providing appropriate waste containers conveniently
                      accessible to all employees.
                    </li>
                    <li>
                      - Reducing utility resource usage and striving to prevent
                      pollution.
                    </li>
                    <li>
                      - Monitoring and evaluating its environmental waste
                      performance internally and throughout the supply chain.
                    </li>
                    <li>
                      - Complying with national and international environmental
                      waste legislation and requirements.
                    </li>
                    <li>
                      - Assigning responsibility to a specific department to
                      comply with and manage the Policy.
                    </li>
                    <li>
                      - Establishing a clear line of management responsibility
                      within the department to report and resolve
                      non-compliance.
                    </li>
                    <li>
                      - Requiring the department to provide accurate data,
                      record disposal, and manage the transition of packaging
                      that becomes customer waste.
                    </li>
                    <li>
                      - Ensuring other department managers are aware of and
                      adhere to the Policy.
                    </li>
                    <li>
                      - Implementing the Policy to the extent reasonably
                      practicable based on available resources.
                    </li>
                  </ul>
                  <p className="padding-bottom-primary">
                    These objectives reflect My Doctor Shop Ltd's commitment to
                    sustainable waste management and compliance with applicable
                    laws and regulations.
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
