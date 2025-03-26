import React from "react";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";

export default function SupplierPolicy() {

    return (
        <div>

            <HeaderWithCat />
            <div className="policy-parent">
                <div className="policy-content-header">
                    <h1 className="policy-heading">Supplier Management Policy</h1>
                </div>
            </div>
            <div className="lg-container content-container">
                <div className="page-padding">
                    <div className="custom-card-container-wrapper">
                        <div className="custom-card-container">
                            <div className="content-section">
                                <h2 className="content-section-heading">1. Purpose</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                        The purpose of this policy is to outline the process for the evaluation, selection, and monitoring of suppliers, as well as the procedures and controls for the purchase and verification of goods and services.
                                    </p>
                                </div>


                                <h2 className="content-section-heading">2. Scope</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                        This policy includes the following sections:</p>
                                    <ul className="content-section-list-none" >
                                        <li>2.1 Evaluation and selection of suppliers</li>
                                        <li>2.2 Purchasing process and purchasing information</li>
                                        <li>2.3 Verification of purchased products</li>
                                    </ul>
                                </div>
                                <h2 className="content-section-heading">3. Abbreviations</h2>
                                <div className="content-section-container">
                                    <ul className="content-section-list-none">
                                        <li>ASL - Approved Suppliers List</li>
                                        <li>ISO - International Organization for Standardization</li>
                                        <li>MR - Management Representative</li>
                                        <li>OM - Operations Manager</li>
                                        <li>PO - Purchase Order</li>
                                        <li>QF - Quality Form</li>
                                        <li>MP - Quality Procedure</li>
                                    </ul>
                                </div>

                                <h2 className="content-section-heading">4. Policy</h2>
                                <div className="content-section-container">
                                    <p className="simple-description">
                                        The responsibility for implementing this policy lies with the Management Representative and the Purchasing Representative, who are accountable for:
                                    </p>
                                    <ul className="content-section-list-none padding-bottom-primary">

                                        <li>- Selecting suppliers that comply with required standards</li>
                                        <li>- Maintaining an Approved Suppliers List (ASL)</li>
                                        <li>- Maintaining relevant purchasing records</li>
                                    </ul>

                                    <p className="simple-description padding-bottom-primary">



                                        The Purchasing Representative is responsible for managing and maintaining the ASL and purchasing records, which must be stored in accordance with the Control of Records procedure (QP02).
                                    </p>

                                    <div className="region-title">

                                        4.1 Evaluation and Selection of Suppliers
                                    </div>
                                    <p className="simple-description padding-bottom-primary">
                                        Suppliers are selected based on their ability to provide quality goods and services that conform to all relevant legislation, delivered on time, and at the right price.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Key product and material suppliers are listed on the Approved Suppliers List (ASL), which is maintained within the company's purchasing/accounting system. Key suppliers are monitored based on their historic and current performance, and the ASL is updated accordingly. New suppliers whose performance may impact service quality are required to complete a Supplier Questionnaire (QFaa) before or along with their initial order.
                                    </p>
                                    <p className="simple-description">
                                        The evaluation of suppliers is based on one or more of the following criteria:
                                    </p>
                                    <ul className="content-section-list-none padding-bottom-primary">
                                        <li>- ISO9001 accreditation</li>
                                        <li>- Feedback from Management Representative or delegate following a visit</li>
                                        <li>- Initial order quality/environmental performance</li>
                                        <li>- Successful supplier quality/environmental audit</li>
                                    </ul>
                                    <p className="simple-description">
                                        Suppliers are deemed approved and added to the ASL (QFbb) with relevant information, such as the completed Supplier Questionnaire. Suppliers on the ASL are assigned one of the following codes:
                                    </p>
                                    <ul className="content-section-list-none padding-bottom-primary">
                                        <li>- A: Approved</li>
                                        <li>- A*: Approved, Preferred</li>
                                        <li>- N: Non-Approved</li>
                                    </ul>
                                    <p className="simple-description padding-bottom-primary">
                                        Suppliers undergoing evaluation may be rated as P for Provisional. Historical suppliers with a proven track record of meeting quality/environmental requirements are rated as historically approved (A or A* code). For major suppliers, a contract of supply may be established.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        If a key supplier has not been used for over a year, they must be re-evaluated parallel to placing a new purchase order, and the ASL must be updated accordingly.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Records of supplier performance are maintained through delivery note records. Any significant nonconformities or issues with the supplier's delivery are recorded on a Quality Report (QFcc), which is sent to the supplier for corrective action. Key supplier performance is reviewed during Management Review meetings.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        For outsource partners, in-depth assessments are conducted, which may include audits, meetings, documentation evaluation, references, and market sector information review. Supplier performance is monitored against Service Agreements, Statements of Work, and/or Functional Specifications, where applicable, with agreed areas for performance improvement.
                                    </p>
                                    <div className="region-title">

                                        4.2 Purchasing Process and Purchasing Information
                                    </div>
                                    <p className="simple-description padding-bottom-primary">
                                        Purchases are made from approved suppliers, unless authorized by the Management Representative or Purchasing/Accounts Department for specific requirements. When placing an order with a new supplier that directly impacts quality or environmental impact, the supplier is requested to complete a Supplier Questionnaire (QFaa) and provide any other necessary information for evaluation.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Appropriate information is provided to the supplier to enable accurate cost estimation. This information may be derived from a site visit or the provision of reports, drawings, or job specifications. For goods/materials, the final supplier selection is made from the approved list based on best price.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Purchase authorization is granted through the signature(s) on a completed Purchase Order Form. For amounts up to £xxx, the Purchase Order Form must be signed by the originator's Line Manager. For amounts exceeding £xxx, the Purchase Order must be signed by a Director.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Confirmation of receipt for a Purchase Order is recorded or requested from the supplier and stored electronically under the relevant reference. A copy of the Purchase Order is kept open on the system until a signed delivery/job acceptance note and supplier invoice are received.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Purchasing information is maintained in both hardcopy and electronic form to support traceability and is accessible to authorized staff. This information is retained in accordance with the Master Records List.
                                    </p>
                                    <div className="region-title">

                                        4.3 Verification of Purchased Product
                                    </div>
                                    <p className="simple-description padding-bottom-primary">
                                        Goods/materials are primarily delivered to the company's premises for verification.
                                    </p><p className="simple-description padding-bottom-primary">
                                        Verification of delivery is carried out by the Operations Manager or a delegate, comparing the supplier's delivery note with any supporting documentation. Upon acceptance, through inspection or physical count, the delivery note is signed or initialed as proof of acceptance and forwarded to the Purchasing/Accounts Department for invoice matching. The goods receipt is recorded against the open Purchase Order on the system.
                                    </p>
                                    <p className="simple-description padding-bottom-primary">
                                        Any issues with the delivery, such as damage, shortages, or incorrect supply, are noted on the delivery note. Goods are either rejected back to the supplier or appropriately stored until the order is satisfactorily completed. If necessary, a Quality Report (QFcc) is raised to track corrective actions. The delivery paperwork is filed until the invoice is received or passed to the Operations Manager or delegate if a significant issue is noted.
                                    </p><p className="simple-description padding-bottom-primary">
                                        If a delivery note is not received from the supplier, the delivery is checked against the original order.
                                    </p><p className="simple-description padding-bottom-primary">
                                        Subcontractors are approved by the Managing Director, and their services are inspected upon completion by the Management Representative, Operations Manager, or delegate. The subcontractor's job acceptance paperwork is signed to indicate satisfactory completion. If the quality of work is not acceptable, appropriate corrective actions are initiated. If the subcontractor lacks a satisfactory sign-off process, the company completes a Quality Report for the subcontractor's signature.
                                    </p><p className="simple-description padding-bottom-primary">
                                        Upon receipt of an invoice, the Accounts Department verifies it against the original requisition, Purchase Order, and delivery note. If everything is in order, the invoice is considered ready for payment. Final authorization for payment is granted, and the invoice is paid electronically or by cheque/bank draft. Purchasing records are updated accordingly.
                                    </p><p className="simple-description">
                                        Verification records are maintained by the company in accordance with the Master Records List and the Record Control procedure (QP02).
                                    </p>
                                </div>

                                <h2 className="content-section-heading">5. Related Documents</h2>
                                <div className="content-section-container">
                                    <ul className="content-section-list-none">
                                        <li>- Supplier Questionnaire (QFaa)</li>
                                        <li>- Approved Suppliers List (QFbb)</li>
                                        <li>- Quality Report (QFcc)</li>
                                        <li>- Control of Records (QP02)</li>
                                        <li>- Master Records List</li>
                                        <li>- Purchase Order</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
}
