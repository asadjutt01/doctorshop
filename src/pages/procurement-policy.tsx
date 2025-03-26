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
          <h1 className="policy-heading">Procurement Policy</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <h2 className="content-section-heading">Introduction</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    At My Doctor Shop Ltd, we prioritize social and
                    environmental factors alongside financial considerations
                    when making purchasing decisions and commissioning services.
                    Our procurement process aims to consider the whole life
                    cost, as well as the associated risks and implications for
                    society and the environment. We believe that sustainable
                    economic development and resource minimization can be
                    achieved by ensuring that the goods and services we procure
                    have optimal environmental performance. Furthermore, we
                    recognize the role of procurement in minimizing the risk of
                    social exploitation within the supply chain, contributing to
                    improved living and working standards globally. This policy
                    outlines our commitment to sustainable and ethical
                    procurement practices, emphasizing fair and honest dealings
                    with our suppliers and fostering respect for ethical
                    standards.
                  </p>
                </div>
                <h2 className="content-section-heading">Policy Objectives</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    Sustainable Procurement:
                  </p>
                  <ul className=" content-section-list-none">
                    <li>
                      - Aim for continuous improvement in procurement decisions
                      by prioritizing sustainable and ethical trading.
                    </li>
                    <li>
                      - Avoid adverse social and environmental impacts in the
                      supply chain.
                    </li>
                    <li>
                      - Reduce environmental impact from service operations and
                      purchase products that meet recognized environmental
                      standards.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Ethical Procurement:
                </h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    - Ensure that individuals in the supply chain are treated
                    with respect and enjoy employment rights, including the
                    freedom to choose employment, freedom of association, fair
                    wages, compliance with working hour regulations, equal
                    opportunities, recognized employment relationships, freedom
                    from intimidation, and a safe and healthy working
                    environment.
                  </p>
                </div>
                <h2 className="content-section-heading">Our Commitment</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    Sustainable Procurement Standard:
                  </p>
                  <ul className=" content-section-list-none">
                    <li>
                      - Seek out organizations that share our commitment to
                      sound environmental performance and improvement, offering
                      assistance to suppliers to enhance their environmental
                      awareness.
                    </li>
                    <li>
                      - Incorporate sustainability requirements in tender
                      documentation to ensure early awareness among suppliers
                      and contractors
                    </li>
                    <li>
                      - Recognize the importance of small firms, voluntary and
                      community organizations, social enterprises, and ethnic
                      minority businesses as members of our supply chain,
                      contributing to the local economy and social cohesion.
                    </li>
                    <li>
                      - Purchase goods with minimal environmental impact,
                      considering factors such as sustainability of resource
                      production, transportation, energy/raw material
                      consumption throughout the product lifecycle, and waste
                      production/recycling capabilities.
                    </li>
                    <li>
                      - Minimize consumption and waste by identifying and
                      eliminating wasteful practices within our operations and
                      influencing those within our sphere of influence.
                    </li>
                    <li>
                      Promote the recycling and environmentally sound disposal
                      of goods at the end of their lifecycle.
                    </li>
                    <li>
                      - Purchase products and services that meet minimum
                      environmental standards.
                    </li>
                    <li>
                      - Develop and support awareness programs to embed
                      sustainable methodologies in identifying needs, appraising
                      options, design and specification, supplier selection,
                      tender evaluation, contract management, and supplier
                      development.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Procurement Process:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Utilize our purchasing power to influence and encourage
                      suppliers toward environmentally and ethically produced
                      products and services.
                    </li>
                    <li>
                      - Incorporate environmental and social factors in the
                      purchasing process, considering factors such as the
                      product's composition, durability, production location,
                      efficiency during use, production and distribution
                      processes, disposal requirements, and potential for reuse
                      or recycling.
                    </li>
                    <li>
                      - Integrate sustainability into the procurement cycle,
                      covering needs identification, options appraisal, design
                      and specification, supplier selection, tender evaluation,
                      contract management, and supplier development.
                    </li>
                    <li>
                      - Provide training programs to embed sustainable
                      development concepts into purchasing functions.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Monitoring and Measuring:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Establish key performance indicators for sustainable
                      procurement and monitor the supply chain's performance
                      against them.
                    </li>
                    <li>
                      - Consider environmental laws and international
                      obligations related to climate change, sustainable
                      development, and other relevant aspects of environmental
                      protection.
                    </li>
                    <li>
                      - Support national policies and legislation that aim to
                      reduce CO2 emissions, ban ozone-depleting substances, and
                      protect biodiversity.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Ethical Procurement Standard:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Require suppliers to comply with legal requirements and
                      adopt the following moral principles
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Regulatory Compliance:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Comply with national and applicable laws and
                      regulations, applying the highest standards consistent
                      with national law when in conflict.
                    </li>
                    <li>
                      - Apply the provision that affords the greatest protection
                      to people and the environment when national law and this
                      Standard address the same subject.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">Employment:</h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Prohibit forced, bonded, or involuntary prison labor
                    </li>
                    <li>
                      - Respect the right of employees to join or form trade
                      unions and engage in collective bargaining, without
                      discrimination.
                    </li>
                    <li>
                      - Take measures to eliminate child labor and provide
                      support for the transition of any child found performing
                      child labor to access quality education.
                    </li>
                    <li>
                      - Comply with wage regulations, ensuring wages meet or
                      exceed legal standards, provide basic needs, and are not
                      paid in kind.
                    </li>
                    <li>
                      - Comply with working hour regulations, providing
                      employees with appropriate rest periods, limiting regular
                      work hours to 48 per week, and ensuring voluntary
                      overtime.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">No Discrimination:</h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Maintain a policy of equality, ensuring no
                      discrimination based on race, caste, national origin,
                      religion, age, disability, gender, marital status, sexual
                      orientation, religious beliefs, union membership, or
                      political affiliation.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Provision of Regular Employment:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Establish recognized employment relationships through
                      national law and practice, avoiding the abuse of
                      labor-only contracting, sub-contracting, or home-working
                      arrangements.
                    </li>
                    <li>
                      - Comply with obligations under labor and social security
                      laws, including those related to labor relationships, to
                      avoid circumvention.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  No Harsh or Inhumane Treatment:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Prohibit physical abuse, discipline, threats, sexual
                      harassment, verbal abuse, and other forms of intimidation.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Safe and Healthy Working Conditions:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Provide a safe and healthy working environment based on
                      international standards, industry knowledge, and hazard
                      prevention.
                    </li>
                    <li>
                      - Take adequate measures to prevent accidents, minimize
                      hazards, and provide health and safety training.
                    </li>
                    <li>
                      - Provide welfare facilities, including toilets, drinking
                      water, food storage (where required), and clean, safe
                      accommodation if provided.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">Environment:</h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Implement an effective environmental policy, commit to
                      continual improvement, and comply with environmental
                      legislation and regulations.
                    </li>
                    <li>
                      - Conform to local regulations on waste reduction, reuse,
                      recycling, and safe disposal of hazardous materials.
                    </li>
                    <li>
                      Identify and mitigate risks of adverse environmental
                      impact associated with operations.
                    </li>
                    <li>
                      - Assign responsibility for environmental compliance and
                      provide adequate training.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">Policy Principles</h2>
                <div className="content-section-container">
                  <p>Principle 1: Working Together:</p>
                  <ul className=" content-section-list-none padding-bottom-primary">
                    <li>
                      - Collaborate with suppliers, encourage improvement, and
                      welcome their identification of areas for enhancement.
                    </li>
                    <li>
                      - Consider an alternative ethical trading standard if
                      suppliers are already working towards sustainability.
                    </li>
                  </ul>
                  <p className="simple-description padding-bottom-primary">
                    Principle 2: Making a Difference:
                  </p>
                  <ul className=" content-section-list-none padding-bottom-primary">
                    <li>
                      - Apply an environmental and social risk-based approach,
                      focusing resources on high-risk areas within the supply
                      chain.
                    </li>
                    <li>
                      - Encourage suppliers to demonstrate their approach in
                      alignment with this principle.
                    </li>
                  </ul>
                  <p>Principle 3: Awareness Raising and Training:</p>
                  <ul className=" padding-bottom-primary content-section-list-none ">
                    <li>
                      - Ensure relevant personnel receive appropriate training
                      and guidelines to implement the policy requirements.
                    </li>
                  </ul>
                  <p className="padding-bottom-primary">
                    Principle 4: Awareness Raising and Training:
                  </p>
                  <ul className=" content-section-list-none padding-bottom-primary">
                    <li>
                      - Recognize the importance of monitoring and independent
                      verification to assess compliance with the standard.
                    </li>
                    <li>
                      - Request suppliers to provide information and facilitate
                      assessments, including subcontractors.
                    </li>
                    <li>
                      - Establish confidential reporting mechanisms for workers.
                    </li>
                  </ul>
                  <p className="padding-bottom-primary">
                    Principle 5: Awareness Raising and Training:
                  </p>
                  <ul className=" content-section-list-none">
                    <li>
                      - Embrace a continual improvement approach, developing
                      improvement plans with suppliers not meeting the
                      standard's requirements.
                    </li>
                    <li>
                      - Address individual circumstances and take corrective
                      action if serious breaches persist.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Supplier Management:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>- Maintain confidentiality of supplier information.</li>
                    <li>
                      - Foster open and honest relationships with suppliers,
                      ensuring transparent communication.
                    </li>
                    <li>
                      - Provide feedback to unsuccessful suppliers in
                      competitive situations, ensuring fairness.
                    </li>
                    <li>
                      - Disclose any personal interests that may affect
                      impartiality in the procurement process.
                    </li>
                    <li>
                      - Ensure suppliers understand and agree to negotiated
                      terms and conditions
                    </li>
                    <li>
                      - Consider supplier size, maturity, location, and
                      dependence when awarding business.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Evidence of Compliance:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Conduct regular monitoring of sustainable procurement
                      implementation and ethical standards.
                    </li>
                    <li>
                      - Identify trends and ensure environmental and social
                      factors are considered in procurement decisions.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Guidance and Legislation:
                </h2>
                <div className="content-section-container">
                  <ul className=" content-section-list-none">
                    <li>
                      - Seek additional guidance and information on relevant
                      legislation from sources such as DEFRA, the Office of
                      Government Commerce (OGC), and the Environment Agency.
                    </li>
                  </ul>
                </div>
                <h2 className="content-section-heading">
                  Publisher Risk Assessment Questionnaire:
                </h2>
                <div className="content-section-container">
                  <p>
                    The included questionnaire serves as a tool to assess
                    compliance with ethical and environmental standards at
                    production sites.{" "}
                  </p>
                  <p>Publisher Risk Assessment Questionnaire</p>
                  <p>Dear Supplier,</p>
                  <p className="">
                    My Doctor Shop is committed to ensuring a high standard of
                    ethical and environmental trade practices, including the
                    provision of safe working conditions and the protection of
                    workers' rights across its global businesses. We require
                    conditions at factories and work sites to be checked to
                    ensure compliance with our Code of Ethical Policy. In many
                    cases, we require full independent audits of work sites and
                    labor standards. However, where work sites are located in
                    "lower-risk" countries, a full audit may not always be
                    necessary. To help identify such cases, we are piloting the
                    use of a basic employment profile assessment.
                  </p>
                  <p>Instructions:</p>
                  <p>
                    Please answer the questions in the table below and return
                    the completed form to [insert contact name]. Once completed
                    and returned, My Doctor Shop will inform you of any further
                    steps. Thank you for your cooperation.
                  </p>
                  <p>Production Site:</p>
                  <ul className="content-section-list-none  padding-bottom-primary">
                    <li>- Name of company:</li>
                    <li>- Ownership:</li>
                    <li>- Location of production site:</li>
                    <li>- Nationality of Management:</li>
                    <li>- Year of establishment:</li>
                    <li>- Working hours / Shift patterns:</li>
                    <li>- Main products / activities of the work site:</li>
                    <li>- Seasonality: (Describe which months are busiest)</li>
                  </ul>
                  <p>General Questions / Management System:</p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>
                      - How many workers do you employ? (including permanent,
                      agency, and temporary staff)
                    </li>
                    <li>- Do you have a Health & Safety Manager? (Y/N)</li>
                    <li>- Do you have a Human Resources Manager? (Y/N)</li>
                    <li>- Do you have a production manager? (Y/N)</li>
                    <li>- Do you record working hours (basic & OT)? (Y/N)</li>
                    <li>- Do you record wages (basic & OT)? (Y/N)</li>
                    <li>- Do you record personnel information? (Y/N)</li>
                    <li>
                      - Is your site certified (ISO, SA8000)? If yes, which
                      scheme?
                    </li>
                    <li>
                      - Do you have a worker committee / forum / trade union
                      on-site? (Y/N)
                    </li>
                  </ul>
                  <p>Directly Employed Staff:</p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>
                      - Total number of permanent workers (on an ongoing
                      contract):
                    </li>
                    <li>- Nationalities of permanent workers:</li>
                    <li>- Languages of permanent workers:</li>
                    <li>- Turnover: (% annually, for permanent staff)</li>
                    <li>
                      - Total number of temporary workers (on a short-term
                      contract):
                    </li>
                    <li>- Nationalities of temporary workers:</li>
                    <li>- Languages of temporary workers:</li>
                    <li>
                      - Highest working week (weekly working hours including
                      OT):
                    </li>
                    <li>- Lowest basic hourly wage paid (hourly wage):</li>
                  </ul>
                  <p>Indirectly Employed Staff:</p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>- Number of agency workers (average per day):</li>
                    <li>- Nationalities of agency workers:</li>
                    <li>- Languages spoken by agency workers:</li>
                    <li>- Average length of employment for agency workers:</li>
                    <li>
                      - Number of agencies (please include
                      catering/security/core, etc.):
                    </li>
                    <li>- Split of agency workers per agencies/services:</li>
                    <li>- Main activities performed by agency workers:</li>
                    <li>
                      - Highest working week (weekly working hours including
                      OT):
                    </li>
                    <li>
                      - Lowest basic hourly wage paid by agency to agency worker
                      (hourly wage):
                    </li>
                  </ul>
                  <p>Sub-contracted Work:</p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>- Do you sub-contract work? (Y/N)</li>
                    <li>
                      - To whom do you sub-contract (e.g., home workers, other
                      factories)?
                    </li>
                    <li>
                      - Please describe the terms and conditions of the
                      sub-contracted work (for example: job description,
                      timeline for job completion, budget/payment for the job)
                    </li>
                  </ul>
                  <p>Environmental Impact:</p>
                  <ul className="content-section-list-none padding-bottom-primary">
                    <li>- Do you have a recycling policy? (Y/N)</li>
                    <li>- Has a copy of the policy been provided? (Y/N)</li>
                    <li>- Do you have a waste management policy? (Y/N)</li>
                    <li>- Has a copy of the policy been provided? (Y/N)</li>
                  </ul>
                  <p>
                    Thank you for your cooperation in completing this
                    questionnaire. Your responses will help us assess compliance
                    with our ethical and environmental standards. If you have
                    any further questions, please don't hesitate to contact us.
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
