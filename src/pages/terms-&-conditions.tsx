import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <div>
      <HeaderWithCat />
      <div className="policy-parent">
        <div className="policy-content-header">
          <h1 className="policy-heading">Terms & Conditions</h1>
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
                    1.1 In these conditions the following expressions shall have
                    the following meanings:
                  </p>
                  <ul className="content-section-list-alphabet padding-bottom-primary">
                    <li>
                      <strong>"Account Customers":</strong> means the Customer
                      who has been setup with a credit account by the Company;
                    </li>
                    <li>
                      <strong>"Company":</strong> means My Doctor Shop Limited
                      (Company Number 7326383) and whose registered office is
                      situated at 118-120 Lockwood Rd, Lockwood, Huddersfield
                      HD1 3QX. VAT no: GB 998 121 386;
                    </li>
                    <li>
                      <strong>"Contract":</strong> means the contract between
                      the Company and the Customer for the sale and purchase of
                      Goods which shall be subject to these Conditions;
                    </li>
                    <li>
                      <strong>"Customer":</strong> means the person, firm,
                      company or other legal entity (including without
                      limitation any hospital, prison or government agency)
                      placing an order with the Company;
                    </li>
                    <li>
                      <strong>"Conditions":</strong> means these terms and
                      conditions;
                    </li>
                    <li>
                      <strong>"Goods":</strong> means all those goods and
                      materials which are to be supplied to the Customer by the
                      Company under the Contract;
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    1.2 Words in the singular shall include the plural and vice
                    versa, references to any gender shall include the others and
                    references to legal persons shall include natural persons
                    and vice versa.
                  </p>
                  <p className="simple-description ">
                    1.3 The headings in these conditions are intended for
                    reference only and shall not affect their construction.
                  </p>
                </div>
                <h2 className="content-section-heading">
                  2. Formation of Contract
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    <strong>2.1:</strong> These Conditions shall apply to all
                    orders received by the Company from a Customer for supply of
                    goods (the Goods) in the United Kingdom. These Conditions
                    will prevail over any terms and conditions on the Customer's
                    order form, form of contract or any other communication sent
                    by the Customer to the Company and the placing of an order
                    for, or the acceptance of, the Goods by the Customer shall
                    indicate unqualified acceptance of these Conditions. No
                    other conditions whether or not inconsistent with these
                    Conditions shall apply.
                  </p>
                  <p className="simple-description">
                    <strong>2.2:</strong> No employee, representative, agent or
                    sales person has the Company's authority to vary, amend or
                    waive any of these Conditions on behalf of the Company and
                    no amendment or additions to any of these Conditions shall
                    be deemed to have been accepted unless accepted in writing
                    by a director of the Company or set out as a special
                    condition in the order confirmation.
                  </p>
                </div>
                <h2 className="content-section-heading">3. Orders</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    3.1 The Company hereby notifies the Buyer that telephone
                    calls received by the Company's order processing and
                    customer support departments may be monitored for quality
                    control, staff training and service improvement purposes.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    3.2 Each order for Goods will be deemed to be an offer by
                    the Customer to purchase the Goods upon these Conditions
                    (the Order). A contract shall not be formed until either the
                    Order is acknowledged via email by the Company or the Goods
                    are despatched whichever is earlier (the Contract).
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    3.3 Orders for pharmaceuticals or Prescription Only
                    Medicines (POM) are accepted on a 30 day invoice account
                    only. All new accounts will require a BMA registered Doctor
                    or Prescribing Nurse's signature. The Company may accept
                    credit card payments for POM providing a 30 day invoice
                    account has been previously set up.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    3.4 All controlled drugs, being any substance as listed in
                    Schedule 2 of The Misuse of Drugs Act 1971 and Schedule 1 to
                    5 of The Misuse of Drugs Regulations 2001 (as amended from
                    time to time) will require a Doctors' signature to be
                    received with each order request.
                  </p>
                  <p className="simple-description">
                    3.5 Goods are subject to availability, in the event that the
                    Company is unable to supply the Goods, the Customer will be
                    informed as soon as possible. An alternative will be offered
                    or a full refund will be given where the Company has already
                    received payment for those Goods.
                  </p>
                </div>
                <h2 className="content-section-heading">
                  4. Customer's Authority
                </h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    4.1 Customers entering into transactions with the Company
                    expressly warrant that they are authorised to accept and are
                    accepting these Conditions.
                  </p>
                </div>
                <h2 className="content-section-heading">
                  5. Details and Specifications
                </h2>
                
                <div className="content-section-container">
                  <p className="simple-description">
                    5.1 Details and specifications of Goods will be as set out
                    in the Company's current catalogue/marketing materials. The
                    Company reserves the right to alter specifications of any
                    given product and to withdraw any item or promotion without
                    explanation or notification. Current specifications can be
                    confirmed on the website, with the Company by telephone or
                    email.
                  </p>
                </div>
                <h2 className="content-section-heading">
                6. Prices
                </h2>
                
                <div className="content-section-container">
                  <p className="simple-description">
                  6.1 The price for the Goods will be the price set out in the
                    Company's current catalogue or websites or any specific
                    sales promotional material (unless advised by the Company
                    differently at point of purchase). Where the Company offers
                    category and volume discounts on the Goods, details of such
                    discounts and of any Goods which are not included within
                    such discounts are published on
                  
                  </p>
                  <p className="simple-description">
                  6.2 In the unlikely event that the price of an item has been
                    incorrectly advertised the Company will contact the Customer
                    to ask whether the Customer wishes to proceed at the correct
                    price. If not, or the Company is unable to obtain the
                    Customers instructions, the Company will cancel the Order
                    and a full refund will be given where the Company has
                    already received payment for those Goods.
                  </p>
                  <p className="simple-description">
                  6.3 The Company reserves the right to change any price
                  without notice.
                  </p>
                  <p className="simple-description">
                  6.4 The Company shall be entitled to increase the price for
                    the Goods at any time prior to delivery to take account of
                    increases in costs including (but not limited to) labour,
                    overheads and transport.
                  </p>
                  <p className="simple-description">
                 6.5 Costs of packaging, carriage and any applicable sales
                    tax, duty, customs duties and all other taxes, duties and
                    expenses in respect of the Goods, will be added to the price
                    where relevant. All prices quoted are subject to VAT at the
                    prevailing standard rate. Any organisations that are exempt
                    from VAT, must provide a validated certificate at the time
                    of ordering.
                  </p>
                </div>

                {/* <h2 className="content-section-heading">6. Prices</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    6.1 The price for the Goods will be the price set out in the
                    Company's current catalogue or websites or any specific
                    sales promotional material (unless advised by the Company
                    differently at point of purchase). Where the Company offers
                    category and volume discounts on the Goods, details of such
                    discounts and of any Goods which are not included within
                    such discounts are published on
                    http://www.mydoctorshop.co.uk/Terms_And_Conditions.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    6.2 In the unlikely event that the price of an item has been
                    incorrectly advertised the Company will contact the Customer
                    to ask whether the Customer wishes to proceed at the correct
                    price. If not, or the Company is unable to obtain the
                    Customers instructions, the Company will cancel the Order
                    and a full refund will be given where the Company has
                    already received payment for those Goods.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    6.3 The Company reserves the right to change any price
                    without notice.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    6.4 The Company shall be entitled to increase the price for
                    the Goods at any time prior to delivery to take account of
                    increases in costs including (but not limited to) labour,
                    overheads and transport.
                  </p>
                  <p className="simple-description">
                    6.5 Costs of packaging, carriage and any applicable sales
                    tax, duty, customs duties and all other taxes, duties and
                    expenses in respect of the Goods, will be added to the price
                    where relevant. All prices quoted are subject to VAT at the
                    prevailing standard rate. Any organisations that are exempt
                    from VAT, must provide a validated certificate at the time
                    of ordering.
                  </p>
                </div> */}

                <h2 className="content-section-heading">7. Payment</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    7.1 The Company may at its sole discretion agree to set up a
                    Customer on a credit account. Standard method of payment for
                    credit accounts is by, BACS or direct debit and Customers
                    should set up a direct debit payment arrangement with their
                    Bank or Building Society.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    7.2 The Customer shall make payment for the Goods in full
                    not later than the end of the month after the month in which
                    the invoice for the Goods is dated. The Company shall be
                    entitled to invoice each instalment as and when delivery has
                    been made. Time of payment shall be of the essence of the
                    Contract. The Company may accept alternative methods of
                    payments, at its sole discretion.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    7.3 All other accounts including prepayment accounts and all
                    other purchases require payment at time of order placement.
                    The Company may, at its sole discretion, accept payments by
                    credit, debit card or BACS.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    7.4 In the event of overdue payment the Company may charge
                    interest at the higher of a rate of four per cent above the
                    base lending rate from time to time of Barclays Banks plc or
                    such rate as is set down in any relevant statute. Such
                    interest will accrue, compounded on a daily basis, from the
                    date upon which payment was due until payment in full and
                    shall continue both before and after judgment and the
                    Company will be entitled to suspend delivery of subsequent
                    Orders and any agreed discounts until the outstanding amount
                    has been received.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    7.5 Where, after acceptance of an order, the Company has
                    grounds for believing that Customer may not be able to
                    fulfil its payment obligations, the Company shall be
                    entitled to require from the Customer suitable security for
                    such payment obligations prior to delivery of the Goods.
                  </p>
                  <p className="simple-description">
                    7.6 The Customer shall not purport to set off or withhold
                    any payment claimed or due from the Company under any
                    Contract.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  8. Risk and Ownership for Account Customers
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    8.1 Except as otherwise provided in these Conditions, the
                    risk of damage to or loss of the Goods shall pass to the
                    Account Customer upon delivery of the Goods in accordance
                    with clause 12.2.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    8.2 The Company shall retain title to and ownership of the
                    Goods and the Account Customer will hold them as Company's
                    bailee and fiduciary agent until the Company has received
                    payment in full of all sums due under the Contract. If
                    payments received from the Account Customer are not stated
                    to refer to a particular invoice the Company may appropriate
                    such payments to any outstanding invoice at the Company's
                    discretion.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    8.3 Until payment of the purchase price the Account Customer
                    shall be the bailee of the Goods and except where otherwise
                    permitted by the Company in writing the Goods shall be
                    stored separately from any goods which belong to the Account
                    Customer or any third party, and shall be clearly marked and
                    identifiable as being the Company's property.
                  </p>
                  <p className="simple-description">
                    8.4 If the Account Customer fails to make any payment to the
                    Company when due, compounds with its creditors, executes an
                    assignment for the benefit of its creditors, has a
                    bankruptcy order made against it or being a company, enters
                    into voluntary or compulsory liquidation or has an
                    administrator or administrative receiver or receiver
                    appointed over all or part of its assets or takes or suffers
                    any similar action in consequence of debt or becomes
                    insolvent or if the Company has reasonable cause to believe
                    that any of these events is likely to occur:
                  </p>
                  <ul className="content-section-list-alphabet padding-bottom-primary">
                    <li>
                      the Account Customer grants the Company the right to enter
                      without prior notice any premises where Goods owned by it
                      may be, and to repossess and dispose of any Goods owned by
                      it so as to discharge any sums owed to it by the Account
                      Customer under this or any other contract;
                    </li>
                    <li>
                      the Account Customer's right to sell or otherwise dispose
                      of the Goods shall terminate immediately;
                    </li>
                    <li>
                      the Company shall have the right to withhold delivery of
                      any undelivered Goods and stop any Goods in transit;
                    </li>
                    <li>
                      any and all sums unpaid in respect of the Goods supplied
                      under the Contract shall become immediately due and
                      payable. Unless the Company expressly elects otherwise,
                      any contract between the Company and the Account Customer
                      for the supply of Goods shall remain in existence
                      notwithstanding any exercise by the Company of its rights
                      under this clause 8.
                    </li>
                  </ul>
                  <p className="simple-description">
                    8.5 The Goods shall, once the risk has passed to the Account
                    Customer in accordance with this clause 8 or otherwise, be
                    and remain at the Account Customer's risk at all times
                    unless and until the Company has retaken possession of them
                    and the Account Customer shall comprehensively insure the
                    Goods against loss or damage by accident, fire, theft or
                    other risks usually covered by insurance in the type of
                    business carried out by the Account Customer.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  9. Sales by the Customer
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    9.1 The Customer shall not sell or supply any of the Goods
                    to customers in any country outside of the European Economic
                    Area or to any third party in the knowledge that the Goods
                    will be sold on to customers outside of the European
                    Economic Area.
                  </p>
                  <p className="simple-description">
                    9.2 Goods are sold on the condition that if such Goods may
                    only be supplied to the public by persons who are authorised
                    then they are supplied to the public only by such authorised
                    persons.
                  </p>
                </div>

                <h2 className="content-section-heading">10. Recall of Goods</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    10.1 In the event that the Company should deem a recall of
                    any Goods to be appropriate, the Customer shall, upon
                    notification from the Company (which may be made verbally
                    and subsequently confirmed in writing), render all
                    reasonable assistance as may be requested by the Company
                    and, in particular, shall:
                  </p>
                  <ul className="content-section-list-alphabet padding-bottom-primary">
                    <li>
                      return to the Company all of the Goods covered by the
                      recall (the "Affected Goods"), and
                    </li>
                    <li>
                      advise the Company (as far as practicable) in writing of
                      the Customers of all Affected Goods already sold by the
                      Customer.
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    10.2 The Company shall be responsible for the reasonable
                    cost of collection of Affected Goods from the Customer and
                    shall make the necessary arrangements for the collection of
                    the Affected Goods.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    10.3 In the event that the Company is unable to return to
                    replace the Affected Goods within a reasonable period after
                    such recall, the Company shall supply to the Customer a
                    credit note to the value of all Affected Goods so retained
                    by the Company.
                  </p>
                </div>
                <h2 className="content-section-heading">
                  11. Cancellation or Amendment of Orders
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    11.1 The Company will use all reasonable endeavours to meet
                    Customers' individual requirements but the Company shall be
                    under no obligation to accept cancellation or other
                    amendment to any Order or any part of an Order once accepted
                    by the Company. Where the Company agrees such cancellation
                    or amendment to an Order, it is on the understanding that a
                    reasonable cancellation or amendment charge, as detailed in
                    Clause 16, may be levied at the Company's sole discretion.
                  </p>
                  <p className="simple-description">
                    11.2 If you are purchasing goods from us for personal use,
                    The Consumer Contract Regulations will apply. In accordance
                    with the Consumer Contract Regulations, as a customer, you
                    have the rights to cancel. Our cancellation period begins
                    the moment you place the order and ends 14 days from the day
                    you receive the goods. Certain products are exempt from this
                    and are listed below:
                  </p>
                  <ul className="">
                    <li>Made to order or bespoke products</li>
                    <li>
                      Any products that have been personalised for example
                      engraved stethoscopes or embroidered apparel
                    </li>
                    <li>
                      Any items of a sanitary nature (e.g., needles, syringes,
                      continence products and nebulisers, single use
                      instruments, packs or kits etc)
                    </li>
                    <li>
                      Infection control or PPE products unless they are faulty.
                      This includes products such as gloves, hand sanitiser or
                      face masks
                    </li>
                    <li>Any sterile products or pharmaceutical products.</li>
                  </ul>
                  <p className="simple-description">
                    A product may be returned to My Doctor Shop for any reason
                    within the statutory cancellation period.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  12. Deliveries and Carriage
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    12.1 All Orders will be despatched by the most appropriate
                    route. Where a Customer suggests an alternative route or
                    places an Order outside the normal schedule, the Company
                    shall have the right to charge the entire cost of delivery,
                    irrespective of the value of the Order. See website for
                    details.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    12.2 The Goods shall be delivered to the address stated in
                    the Contract and the signature of an employee or agent of
                    the Buyer at such address on the Seller's delivery note
                    shall be conclusive proof of the delivery of the Goods. Any
                    special delivery requirements or difficulties in delivering
                    (e.g., narrow doorways, stairs, and restricted access)
                    should be made known to the Company at the time of placing
                    the Order and may be subject to additional costs. The
                    Company cannot accept responsibility for any difficulties in
                    delivery as a consequence of information or lack of
                    information supplied by the customer.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    12.3 The Company will use reasonable endeavours to deliver
                    each of the Customer's Orders for the goods within the time
                    agreed when the Company accepts an Order and, if no time is
                    agreed, then within a reasonable time, but the time of
                    delivery is not of the essence. If, despite those
                    endeavours, the Company is unable for any reason to fulfil
                    any delivery on the specified date, the Company will not be
                    deemed in breach of the Contract, nor (for the avoidance of
                    doubt) will the Company have any liability to the customer
                    for direct, indirect or consequential loss or damage
                    howsoever caused (including as a result of negligence) by
                    any delay or failure in delivery. Any delay in delivery will
                    not entitle the customer to cancel the Order or to receive a
                    refund of any monies paid unless and until the customer has
                    given 14 days' notice to the Company requiring the delivery
                    to be made and the Company has not fulfilled delivery within
                    that period. The customer shall have no other remedy in
                    respect of late delivery. All goods are sold subject to
                    reasonable availability and where appropriate, the Company
                    reserves the right to substitute materials of equivalent or
                    superior specification without notice.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    12.4 The Company reserves the right to make an
                    administration fee towards the carriage of orders under
                    £49.00 ex VAT. See website for details.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    12.5 Unless otherwise stated in the Contract, the price of
                    the Goods shall not include the cost of delivery where the
                    agreed delivery location is within the United Kingdom, the
                    Isle of Man or the Channel Islands. In the case of 'special
                    deliveries' (i.e., deliveries that are not normal scheduled
                    deliveries) a separate charge will be specified in the
                    Contract. Any orders that are not to mainland UK may incur
                    additional costs. These will be advised to the Customer
                    prior to the Order being despatched. See website for
                    details.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    12.6 Goods shipped direct from suppliers may be subject to
                    additional carriage charges. Any additional charges will be
                    advised prior to the Order being despatched to the Customer.
                  </p>
                  <p className="simple-description">
                    12.7 If the Customer fails to take delivery of the Goods on
                    the date of delivery the Company will be entitled, at its
                    sole discretion and without prejudice to its other rights,
                    either:
                  </p>
                  <ul className="content-section-list-alphabet padding-bottom-primary">
                    <li>
                      to store the Goods at the risk of the Customer and the
                      Customer shall pay all costs and expenses of such storage
                      (including any insurance) and any additional costs of
                      carriage incurred; or
                    </li>
                    <li>
                      to terminate the Contract with immediate effect and
                      dispose of the Goods as the Company may determine.
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    12.8 The Company reserves the right to deliver in
                    instalments at its discretion. Where delivery is by
                    instalment, each instalment shall be treated as a separate
                    contract and the failure by the Company to deliver any one
                    or more instalments in accordance with these Conditions, or
                    any claim by the Customer in respect of any one or more
                    instalments shall not entitle the Customer to treat the
                    Contract as a whole as repudiated.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    12.9 The Customer shall indemnify and hold the Company
                    harmless from and against any costs or losses incurred by
                    the Seller as a result of the Customer's failure to take
                    delivery of the Goods on the delivery date (in which case
                    such indemnity shall include any additional storage charges)
                    or cancellation of any order.
                  </p>
                  <p className="simple-description">
                    12.10 In the event of non-arrival of Goods, the Customer
                    must inform the Company within 14 days of the date of the
                    invoice or e-mail advice of despatch, otherwise no claim can
                    be considered.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  13. Use of Information
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    13.1 My Doctor Shop Limited is a leading medical supplies
                    service provider.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    13.2 Information that you provide or which we obtain about
                    you, your business or the Directors/Members of your business
                    will be held in our computer and manual systems and used for
                    credit scoring; administration of your account; customer and
                    product analysis; market research and to improve the
                    products and services we offer. We may monitor calls as
                    described in Clause 3.1.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    13.3 Unless the Customer contacts the Company to say
                    otherwise, the Company will provide your business name and
                    address, details (including dates of supply) of the products
                    and services you take from the Group (Account Information)
                    to manufacturers (either directly or through a data services
                    provider) to enable the manufacturers to understand
                    preferences, ensure satisfactory stock levels and improve
                    products and services.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    13.4 The Group may carry out credit checks with licensed
                    credit agencies or guarantors. The Group and the agencies,
                    may keep a record of the search.
                  </p>
                  <p className="simple-description">
                    13.5 The Company and other Group companies may, with your
                    consent, send you information by email, phone or post about
                    other products and services (including those from other
                    organisations) in which you may be interested.
                  </p>
                </div>

                <h2 className="content-section-heading">14. Force Majeure</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    14.1 The Company will not be liable to the Customer for any
                    failure or delay in delivery of the Goods if it is due to
                    any event beyond the reasonable control of the Company. The
                    Company will be entitled to a reasonable extension of time
                    for performing such obligations and shall not be liable for
                    any loss or damage occasioned to the Customer thereby.
                  </p>
                </div>
                {/* <div className="content-section">
                                    <h2 className="content-section-heading">15. Warranty and Liability</h2>
                                    <div className="content-section-container">
                                        <p className="simple-description padding-bottom-primary">
                                            15.1 The following provisions of this Condition 15 set out the Company's entire liability (including liability for the acts and omissions of its employees, agents and sub-contractors) in respect of:
                                        </p>
                                        <ul className="content-section-list-none padding-bottom-primary">
                                            <li>(a) any breach of the Contract; and</li>
                                            <li>(b) any representation (other than fraudulent misrepresentation) statement or tortious act or omission (including negligence) arising under or in connection with the Contract.</li>
                                        </ul>
                                        <p className="simple-description padding-bottom-primary">
                                            15.2 Goods are supplied according to the descriptions and specifications given in the relevant catalogues or marketing materials of the Company. Unless otherwise advised to the Customer on acceptance of the Order the Company gives no warranty other than that offered by the manufacturers of the Goods. The Company makes no representation as to the suitability of fitness of any goods for any particular purpose unless expressly given or made in Company brochures or websites. For details of manufacturer's warranties, refer to the Company's catalogue or to the manufacturers' own description and specification.
                                        </p>
                                        <p className="simple-description padding-bottom-primary">
                                            15.3 In the event that an item is defective within the meaning of the Sale of Goods Act 1979 (as amended from time to time) the Company reserves the right, at its absolute discretion, to replace or repair the Goods as an alternative to refunding the purchase price.
                                        </p>
                                        <p className="simple-description padding-bottom-primary">
                                            15.4 In the event that the Customer has a valid claim for any defect, loss, damage or non-compliance with the Contract the Company's only obligations in respect of such defect, loss, damage or non-compliance shall be to:
                                        </p>
                                        <ul className="content-section-list-none padding-bottom-primary">
                                            <li>(a) make good any shortage or non-delivery; and/or</li>
                                            <li>
                                                (b) at its option replace the items concerned or refund the cost of such Goods to the Customer and any transport costs incurred by the Customer in connection with the delivery of the Goods in question and/or their return to the Company.
                                            </li>
                                        </ul>
                                        <p className="simple-description padding-bottom-primary">
                                            (i) Goods requiring temperature-controlled storage will be accepted to correct a delivery error or faulty product only. In this case, the Goods must be returned in accordance with MHRA guidelines within 24 hours of delivery and must have been stored correctly whilst on the Customer's premises.
                                        </p>
                                        <p className="simple-description padding-bottom-primary">
                                            (ii) Pharmaceutical goods (other than those requiring temperature-controlled storage) must be returned within 5 days of delivery.
                                        </p>
                                        <p className="simple-description padding-bottom-primary">
                                            (c) Goods will not be accepted by the Seller for return other than in accordance with the Medicines Control Agency's document on Good Distribution Practice (Guidelines on Good Distribution Practice of Medicinal Products for Human Use).
                                        </p>
                                        <p className="simple-description padding-bottom-primary">
                                            15.5 The Company shall not be liable for a breach of this warranty where:
                                        </p>
                                        <ul className="content-section-list-none padding-bottom-primary">
                                            <li>15.5.1 the Goods have been improperly altered in any way whatsoever, or been subject to misuse or unauthorised repair by the Customer;</li>
                                            <li>15.5.2 the Goods have been improperly installed or connected by the Customer;</li>
                                            <li>15.5.3 the Goods have been opened, partly used or the seals or labels have been removed or tampered with;</li>
                                            <li>15.5.4 the Goods have been damaged by fire, water, smoke or chemicals;</li>
                                            <li>15.5.5 any maintenance requirements relating to the Goods have not been complied with by the Customer;</li>
                                            <li>15.5.6 any instructions as to the storage of the Goods have not been complied with by the Customer in all respects;</li>
                                            <li>
                                                15.5.7 the Customer has failed to notify the Company of any visible or suspected defects or damage within 3 days of delivery where the defect or damage should be apparent on reasonable inspection, or within 5 days of the same coming to the knowledge of the Customer where the defect or damage is not one which should be apparent on reasonable inspection.
                                            </li>
                                        </ul>
                                        <p className="simple-description padding-bottom-primary">
                                            15.6 If the Customer fails to give notice in accordance with condition 15.5.7 above the items delivered shall be deemed to be in all respects in accordance with the Contract and without prejudice to earlier acceptance by the Customer it shall be bound to accept and pay for the same accordingly and all claims in respect of non-delivery, loss, damage, defect or non-compliance shall thereafter be wholly barred.
                                        </p>
                                    </div>
                                </div>
                                <div className="content-section">
                                    <h2 className="content-section-heading">16. Non-Faulty Return of Goods</h2>
                                    <div className="content-section-container">
                                    </div>
                                </div> */}

                <h2 className="content-section-heading">
                  15. Warranty and Liability
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    15.1 The following provisions of this Condition 15 set out
                    the Company's entire liability (including liability for the
                    acts and omissions of its employees, agents and
                    sub-contractors) in respect of:
                  </p>
                  <ul className="content-section-list-alphabet padding-bottom-primary">
                    <li>any breach of the Contract; and</li>
                    <li>
                      any representation (other than fraudulent
                      misrepresentation) statement or tortious act or omission
                      (including negligence) arising under or in connection with
                      the Contract.
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    15.2 Goods are supplied according to the descriptions and
                    specifications given in the relevant catalogues or marketing
                    materials of the Company. Unless otherwise advised to the
                    Customer on acceptance of the Order, the Company gives no
                    warranty other than that offered by the manufacturers of the
                    Goods. The Company makes no representation as to the
                    suitability or fitness of any Goods for any particular
                    purpose unless expressly given or made in Company brochures
                    or websites. For details of manufacturer's warranties, refer
                    to the Company's catalogue or to the manufacturer's own
                    description and specification.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.3 In the event that an item is defective within the
                    meaning of the Sale of Goods Act 1979 (as amended from time
                    to time), the Company reserves the right, at its absolute
                    discretion, to replace or repair the Goods as an alternative
                    to refunding the purchase price.
                  </p>
                  <p className="simple-description">
                    15.4 In the event that the Customer has a valid claim for
                    any defect, loss, damage or non-compliance with the
                    Contract, the Company's only obligations in respect of such
                    defect, loss, damage or non-compliance shall be to:
                  </p>
                  <ul className="content-section-list-alphabet  padding-bottom-primary">
                    <li>make good any shortage or non-delivery; and/or</li>
                    <li>
                      at its option replace the items concerned or refund the
                      cost of such Goods to the Customer and any transport costs
                      incurred by the Customer in connection with the delivery
                      of the Goods in question and/or their return to the
                      Company.
                      <p className="simple-description">
                        (i) Goods requiring temperature-controlled storage will
                        be accepted to correct a delivery error or faulty
                        product only. In this case, the Goods must be returned
                        in accordance with MHRA guidelines within 24 hours of
                        delivery and must have been stored correctly whilst on
                        the Customer's premises.
                      </p>
                      <p className="simple-description">
                        (ii) Pharmaceutical goods (other than those requiring
                        temperature-controlled storage) must be returned within
                        5 days of delivery.
                      </p>
                    </li>
                    <li>
                      Goods will not be accepted by the Seller for return other
                      than in accordance with the Medicines Control Agency's
                      document on Good Distribution Practice (Guidelines on Good
                      Distribution Practice of Medicinal Products for Human
                      Use).
                    </li>
                  </ul>

                  <p className="simple-description padding-bottom-primary">
                    15.5 The Company shall not be liable for a breach of this
                    warranty where:
                  </p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>
                      15.5.1 the Goods have been improperly altered in any way
                      whatsoever, or been subject to misuse or unauthorised
                      repair by the Customer;
                    </li>
                    <li>
                      15.5.2 the Goods have been improperly installed or
                      connected by the Customer;
                    </li>
                    <li>
                      15.5.3 the Goods have been opened, partly used or the
                      seals or labels have been removed or tampered with;
                    </li>
                    <li>
                      15.5.4 the Goods have been damaged by fire, water, smoke
                      or chemicals;
                    </li>
                    <li>
                      15.5.5 any maintenance requirements relating to the Goods
                      have not been complied with by the Customer;
                    </li>
                    <li>
                      15.5.6 any instructions as to the storage of the Goods
                      have not been complied with by the Customer in all
                      respects;
                    </li>
                    <li>
                      15.5.7 the Customer has failed to notify the Company of
                      any visible or suspected defects or damage within 3 days
                      of delivery where the defect or damage should be apparent
                      on reasonable inspection, or within 5 days of the same
                      coming to the knowledge of the Customer where the defect
                      or damage is not one which should be apparent on
                      reasonable inspection.
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    15.6 If the Customer fails to give notice in accordance with
                    condition 15.5.7 above the items delivered shall be deemed
                    to be in all respects in accordance with the Contract, and
                    without prejudice to earlier acceptance by the Customer, it
                    shall be bound to accept and pay for the same accordingly
                    and all claims in respect of non-delivery, loss, damage,
                    defect or non-compliance shall thereafter be wholly barred.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.7 Any Goods returned under clause 15 or clause 16 must be
                    accompanied by a returns note, which the Company will supply
                    to the Customer upon request. Failure to do so will render
                    any claim for credit null and void. Any credit will only be
                    raised after satisfactorily passing inspection by the
                    Company's distribution centre. The Company reserves the
                    right to request photographic evidence. The Company accepts
                    no responsibility for Goods whilst in transit back to the
                    Company.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.8 Where a breakage has occurred, or it is suspected that
                    the Goods have been tampered with or misappropriated in any
                    way, the Customer should retain the complete packaging, and
                    the Company and the carriers should be notified immediately.
                    Claims cannot be considered unless these conditions are
                    observed and the Goods returned in the time frames
                    stipulated in clause 15.4 (b).
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.9 No replacements are available whilst goods are
                    exchanged, replaced or repaired.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.10 Subject to condition 15.12, the Company shall not be
                    liable for any costs, claims, damages or expenses, whether
                    arising out of any tortious act or omission, any breach of
                    contract or statutory duty, of an indirect or consequential
                    nature or that are calculated by reference to profits,
                    income, production or accruals or loss of such profits,
                    income, production or accruals or by reference to accrual of
                    such costs, claims, damages or expenses on a time basis.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.11 Subject to condition 15.12, the aggregate liability of
                    the Company to the Customer for any loss or damage (whether
                    asserted by the Customer or third parties) of whatever
                    nature and caused as set out in Condition 15.1 shall be
                    limited to, and in no circumstances shall exceed, the total
                    invoice price of the Goods in respect of which the claim
                    relates and any transport costs, less any discount given and
                    excluding VAT.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.12 Nothing in these Conditions shall operate so as to
                    exclude or in any way limit either party's liability for
                    fraud, or for death or personal injury caused by its
                    negligence, or any other liability that may not be excluded
                    or limited as a matter of English law.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.13 Nothing herein shall impose any liability upon the
                    Company in respect of any defect in the Goods arising out of
                    the acts, omissions, negligence or default of the Customer,
                    its servants or agents including in particular (but without
                    prejudice to the generality of the foregoing) any failure by
                    the Customer to comply with any recommendations of the
                    Company as to storage and handling of the Goods.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    15.14 The Company makes no representation or warranty that
                    use of the Goods does not infringe the rights of any third
                    party and the Company accepts no liability in this respect.
                  </p>
                  <p className="simple-description">
                    15.15 Except as provided for in these Conditions, any
                    conditions and/or warranties (whether express or implied by
                    statute or common law or howsoever) including but without
                    limitation those of satisfactory quality or of fitness for a
                    particular purpose (even if that purpose is made known
                    expressly or by implication to the Company) are hereby
                    excluded.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  16. Non-Faulty Return of Goods
                </h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    16.1 Goods are not supplied on a sale or return basis.
                    Returns of non-faulty goods will only be accepted at the
                    sole discretion of and with the prior written permission of
                    the Company. Permission must be obtained within 24 hours
                    from the time of delivery. In the event that permission is
                    given, then the Customer will be refunded in full.
                  </p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>
                      (i) Goods requiring temperature-controlled storage must be
                      returned in accordance with MHRA guidelines within 24
                      hours of delivery and must have been stored correctly
                      whilst on the Customer's premises.
                    </li>
                    <li>
                      (ii) Pharmaceutical and non-pharmaceutical Goods (other
                      than those requiring temperature-controlled storage) must
                      be returned within 5 days of delivery.
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    16.2 If any non-faulty Goods are returned, they must be
                    unused, in original and intact packaging, they must not be
                    relabelled, tamper-evident seals must be intact, and the
                    Goods must be fit for sale. Under no circumstances will
                    goods be accepted for return if they are damaged, subject to
                    improper handling or abuse, have been partly opened or used,
                    or the seals and labels removed or tampered with, nor will
                    the goods be credited.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    16.3 The cost of carriage of non-faulty returned Goods
                    accepted by the Company is the responsibility of the
                    Customer. The Company is able to assist with and organise
                    the return of small items at a cost of £15.00 ex VAT from
                    the UK Mainland. Please contact the Company for further
                    details. The Company shall be entitled to impose a handling
                    charge at a rate of 25% on the net invoice value or a
                    minimum handling charge of £15.00 ex VAT for all
                    cancellations, amendments, and non-faulty returned Goods.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    16.4 Items made to Customer's own specifications or
                    specifically ordered will not be accepted for return unless
                    faulty in accordance with Condition 15.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    16.5 Temperature-controlled and pharmaceutical items will
                    not be accepted for return unless faulty in accordance with
                    Condition 15.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    16.6 Any Goods returned under this condition must be
                    accompanied by a returns note, which the Company will supply
                    to the Customer upon request. Failure to do so will render
                    any claim for credit null and void. Any credit will only be
                    raised after satisfactorily passing inspection by the
                    Company's distribution centre. The Company reserves the
                    right to request photographic evidence. The Company accepts
                    no responsibility for Goods whilst in transit back to the
                    Company.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    16.7 In accordance with the Consumer Contract Regulations,
                    as a customer, you have the rights to cancel your order. Our
                    cancellation period begins the moment you place the order
                    and ends 14 days from the day you receive the goods. Please
                    see clause 11.2 for exclusions.
                  </p>
                  <p className="simple-description">
                    16.8 If you wish to cancel, please call our Customer Care
                    Team. Once you have notified us that you would like to
                    return the order (which must be within 14 days of receipt of
                    the order), you have 14 days to return the order to us.
                  </p>
                </div>
                <h2 className="content-section-heading">
                  {" "}
                  How To Return Your Order:
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    You'll need to return them unused and in a suitable outer
                    box. When returning orders, goods must be returned in the
                    original packaging, must be unused, and in a resalable
                    condition.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    On inspection and receipt of the goods, a refund will be
                    processed via your original payment method or, in the case
                    of a credit account holder, a credit memo will be applied to
                    your account. Failure to meet the above criteria may result
                    in the return being rejected.
                  </p>
                  <p className="simple-description padding-bottom-primary">
                    Your parcel will then need to be returned to the following
                    address:
                    <br />
                    <strong>My Doctor Shop Ltd</strong>
                    <br />
                    Unit 5 Ray Street Enterprise Centre
                    <br />
                    Ray Street
                    <br />
                    Huddersfield
                    <br />
                    HD1 6B
                  </p>
                  <p className="simple-description">
                    Please note you must organise the return of the items at
                    your expense. If the return is as a result of a fault or an
                    order error made by us, we will either organise the return
                    to be collected free of charge or refund the cost of
                    returning the item(s).
                  </p>
                </div>
                <h2 className="content-section-heading">17. Waiver</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    17.1 The waiver by the Company of any right to exercise any
                    right or to insist on the strict performance of any
                    provision of the Contract, shall not operate as a waiver of,
                    or preclude any further exercise or enforcement of (as the
                    case may be) or other exercise or enforcement by the Company
                    of that or any other right or provision.
                  </p>
                </div>

                <h2 className="content-section-heading">18. Severability</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    18.1 Each provision of the Contract is severable and
                    distinct from the others. The parties intend that every such
                    provision shall be and remain valid and enforceable to the
                    fullest extent permitted by law. If such provision is or at
                    any time becomes to any extent invalid, illegal or
                    unenforceable under any enactment or rule of law, it shall
                    to that extent be deemed not to form part of the Contract
                    but (except to that extent in the case of that provision) it
                    and all other provisions of the Contract shall continue in
                    full force and effect and their validity, legality and
                    enforceability shall not be thereby be affected or impaired.
                  </p>
                </div>

                <h2 className="content-section-heading">
                  19. Contracts (Rights of Third Parties) Act 1999
                </h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    19.1 No person who is not a party to this Agreement is
                    entitled to enforce any of its terms, whether under the
                    Contracts (Rights of Third Parties) Act 1999 or otherwise.
                  </p>
                </div>

                <h2 className="content-section-heading">20. Proper Law</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    20.1 These Terms and Condition and any Contract shall be
                    governed by & construed according to the law of England and
                    the Customer submits to the jurisdiction of the English
                    courts.
                  </p>
                </div>

                <h2 className="content-section-heading">21. Company Details</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    My Doctor Shop Ltd, <br />
                    Unit 5 Ray Street Enterprise Centre <br />
                    Ray Street <br />
                    Huddersfield <br />
                    HD1 6B <br />
                    VAT Number: GB 998 121 386 <br />
                    Company Registration Number: 7326383
                  </p>
                </div>

                <h2 className="content-section-heading">
                  22. Additional Terms for My Doctor Shop Ltd Promotions
                </h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    Specific products are excluded from any 'global' equipment
                    and disposable discounts that may be agreed. We ensure that
                    the list of excluded products is short, and details of the
                    products will be made available here. Please contact us for
                    additional information on these exclusions.
                  </p>
                </div>
                <h2 className="content-section-heading">
                  23. Additional Terms for our Price Beat Promise
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    My Doctor Shop is committed to providing great value on the
                    entire range of products we sell. Our Price Beat Promise
                    means that if you find an equivalent product for sale
                    elsewhere for a lower price (subject to the conditions
                    below), then we will beat that price.
                  </p>
                  <ul className="content-section-list-count">
                    <li>
                      The product must be new and the same make, model and
                      specification.
                    </li>
                    <li>The product must be for sale within the UK.</li>
                    <li>
                      Products advertised on auction websites or classified
                      advertisements are excluded from the Promise.
                    </li>
                    <li>
                      The product must be available for delivery in the same
                      timescale as from My Doctor Shop.
                    </li>
                    <li>
                      We require evidence of the lower price (this may be a
                      website address, flyer, catalogue or advertisement).
                    </li>
                    <li>
                      Our pharmaceutical range is excluded from the Price Beat
                      Promise.
                    </li>
                    <li>
                      We reserve the right to vary or withdraw the Price Beat
                      Promise at any time.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  24. Additional Terms for Competition Entries
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    My Doctor Shop organises frequent competitions. The
                    following terms are general to all competitions, although
                    some additional terms may apply to specific competitions. If
                    you enter any of our competitions, it is assumed that you
                    have read and agree to these.
                  </p>
                  <ul className="content-section-list-count padding-bottom-primary">
                    <li>
                      To enter a competition you must be at least 18 years of
                      age and a resident of the United Kingdom.
                    </li>
                    <li>
                      Competitions are not open to employees of My Doctor Shop
                      Ltd, its subsidiary companies or members of their
                      immediate family.
                    </li>
                    <li>No purchase is necessary.</li>
                    <li>Only one entry per person is allowed.</li>
                    <li>The prize is not transferrable to another person.</li>
                    <li>
                      No part of any prize is exchangeable for cash or any other
                      prize.
                    </li>
                    <li>
                      Incorrectly completed or incomplete entries will be
                      disqualified.
                    </li>
                    <li>
                      If any given prize is not available, we reserve the right
                      to offer an alternative.
                    </li>
                    <li>
                      Any entries received after a competition's closing date
                      will not be entered.
                    </li>
                    <li>
                      A full list of winners for a competition can be requested
                      by sending a stamped addressed envelope to:
                      <p className="simple-description">
                        My Doctor Shop Ltd <br />
                        Unit 5 Ray Street Enterprise Centre <br />
                        Ray Street <br />
                        Huddersfield <br />
                        HD1 6B <br />
                        Please ensure the name of the competition is written on
                        the envelope.
                      </p>
                    </li>

                    <li>
                      The decision of the judges is final. My Doctor Shop will
                      not enter into any correspondence.
                    </li>
                    <li>
                      Winners will be personally notified by post, email or
                      telephone.
                    </li>
                    <li>
                      We reserve the right to alter the rules of competition
                      entry at any time. Specific rules that apply to a single
                      competition will be displayed at the point of entry.
                    </li>
                  </ul>
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
