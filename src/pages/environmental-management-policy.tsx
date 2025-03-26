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
          <h1 className="policy-heading">Environmental Management Policy</h1>
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
                      At My Doctor Shop, we are committed to protecting the
                      environment and implementing sustainable practices in our
                      business operations. Our Environmental Management Policy
                      (EMP) is designed to improve business efficiency and bring
                      benefits across the entire company. These benefits include
                      reducing our environmental impacts, creating and
                      maintaining safer working environments, promoting
                      environmental awareness among employees, and ensuring
                      compliance with relevant environmental legislation.
                    </p>
                    <p className="simple-description">
                      1.2 You can disable cookies from your browser by using our
                      Cookie Consent Tool.
                    </p>
                  </div>
                </div>
                <h6 className="content-section-heading-h6">
                  To achieve these goals, My Doctor Shop will:
                </h6>
                <div className="content-section-container">
                  <div>
                    <p className="simple-description">
                      1:Ensure compliance: We will comply with current and
                      future environmental legislation, regulations, and other
                      compliance obligations.
                    </p>{" "}
                    <br />
                    <p>
                      2:Understand the context: We will identify and address
                      internal and external issues, environmental conditions,
                      and the needs and expectations of interested parties that
                      may impact our EMP positively or negatively.
                    </p>
                    <br />
                    <p>
                      3:Identify risks and opportunities: We will identify risks
                      and opportunities that can help maintain and continuously
                      improve our Environmental Management Policy.
                    </p>
                    <br />
                    <p>
                      4:Design and develop sustainable products: We will
                      consider environmental aspects and impacts throughout the
                      lifecycle of our products, striving for efficient use of
                      energy and sustainable resources in their manufacturing.
                    </p>
                    <br />
                    <p>
                      5:Expand use of alternative materials: We will increase
                      the use of alternative materials that consume less energy
                      during manufacturing and have a lower environmental impact
                      at disposal.
                    </p>
                    <br />
                    <p>
                      6:Measure and evaluate environmental performance: We will
                      set environmental objectives, measure, monitor, analyse,
                      and evaluate our environmental performance through
                      internal environmental audits and management reviews.
                    </p>
                    <br />
                    <p>
                      7:Improve manufacturing processes: We will continuously
                      improve and modernize our manufacturing processes to
                      minimize the generation of hazardous waste.
                    </p>
                    <br />
                    <p>
                      8:Staff training: We will ensure that our staff is trained
                      to understand their role in minimizing the environmental
                      impacts of their activities.
                    </p>
                    <br />
                    <p>
                      9:Waste management: We will divert waste from landfill by
                      reusing office and factory materials and products whenever
                      possible, implementing recycling practices, and sending
                      other waste to facilities that generate energy from waste,
                      such as incineration with energy recovery.
                    </p>
                    <br />
                    <p>
                      10:Stay updated on recycling methods: We will stay up to
                      date with recycling methods and materials, and whenever
                      financially viable, we will seek suitable end users for
                      our plastic by-products and other recyclable materials.
                    </p>
                    <br />
                    <p>
                      11:Protect biodiversity and ecosystems: We will regularly
                      inspect our operations, implement procedures, and provide
                      training to protect local biodiversity, habitats, and
                      ecosystems.
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
