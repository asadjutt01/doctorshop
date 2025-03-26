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
          <h1 className="policy-heading">Health & Safety Policy</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <div className="content-section-container">
                  <div>
                    <p>
                      The purpose of this policy is to ensure compliance with
                      the Health & Safety at Work etc. Act 1974 and other
                      relevant statutory provisions. It serves as a foundational
                      document for implementing My Doctor Shop Ltd's safety
                      management system (SMS) based on the HSE's HSG65 'Managing
                      for H&S' guidelines. The policy aims to create a healthy
                      and safe environment for all individuals working at or
                      visiting My Doctor Shop Ltd's premises.
                    </p>
                    <p>
                      It is the responsibility of every individual referencing
                      this policy to ensure that they are accessing the latest
                      version, which will be published on My Doctor Shop Ltd's
                      Share Point platform.
                    </p>
                    <p>
                      My Doctor Shop Ltd is committed to taking all reasonably
                      practicable measures to prevent injury, illness, and
                      pollution arising from its operations. The company strives
                      to minimize its environmental impact and has implemented a
                      formal Environment, Health, and Safety (EHS) Management
                      System. This system defines all processes to ensure legal
                      compliance and support continuous improvement.
                    </p>
                    <p>
                      This policy reflects My Doctor Shop Ltd's dedication to
                      prioritizing EHS at work, recognizing its significance to
                      the business and its contribution to overall success.
                    </p>
                    <p></p>
                  </div>
                </div>
                {/* section 1 */}
                <h2 className="content-section-heading">
                  1:Organisation for Health & Safety
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      1.1 Our Site uses cookies for the following purposes:
                    </p>
                    <ul className="content-section-list-none">
                      <li>- Chief Executive</li>
                      <li>- Director of Developments</li>
                      <li>- Corporate H&S Advisor</li>
                    </ul>
                  </div>
                </div>
                {/* section 2 */}
                <h2 className="content-section-heading">
                  2.Responsibilities for Health and Safety
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      2.1 Our Site uses cookies for the following purposes:
                    </p>
                    <p>
                      The Chief Executive holds ultimate responsibility for:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        - Compliance with the Health and Safety at Work etc. Act
                        1974 and other relevant statutory provisions.
                      </li>
                      <li>
                        - Ensuring the preparation and dissemination of an
                        up-to-date health and safety policy statement to all
                        staff.
                      </li>
                      <li>
                        - Implementing and maintaining the policy effectively
                        throughout the Company
                      </li>
                      <li>
                        - Appointing an Executive Director as the designated
                        person responsible for health and safety across the
                        Company.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      2.2 Our Site uses cookies for the following purposes:
                    </p>
                    <p>
                      The Director of Developments has the following
                      responsibilities:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        The Director of Developments has the following
                        responsibilities:
                      </li>
                      <li>
                        - Ensuring that the health and safety management
                        arrangements reflect best practices and receiving
                        periodic reports from the Corporate H&S Advisor on H&S
                        activities across the Company.
                      </li>
                      <li>
                        - Implementing and maintaining the policy effectively
                        throughout the Company
                      </li>
                      <li>
                        - Reporting on health and safety management matters to
                        the Chief Executive and providing briefings to the Board
                        as necessary.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      2.3 Operations Directors
                    </p>
                    <p>Operations Directors are responsible for:</p>
                    <ul className="content-section-list-none">
                      <li>
                        - Ensuring effective management of health and safety
                        risks within their areas of responsibility through their
                        senior managers
                      </li>
                      <li>
                        - Ensuring that the health and safety management
                        arrangements reflect best practices and receiving
                        periodic reports from the Corporate H&S Advisor on H&S
                        activities across the Company.
                      </li>
                      <li>
                        - Considering health and safety issues as an integral
                        part of business operations and allocating adequate
                        resources for their achievement.
                      </li>
                      <li>
                        - Establishing effective communication channels
                        concerning health and safety across all sections of
                        their respective operations
                      </li>
                      <li>
                        - Periodically reviewing the health and safety
                        performance of their services.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">2.4 Unit Managers</p>
                    <p>Unit Managers have the following responsibilities:</p>
                    <ul className="content-section-list-none">
                      <li>
                        - Assisting Operations Directors in fulfilling their
                        health and safety responsibilities.
                      </li>
                      <li>
                        - Implementing the health and safety policy within their
                        units and overseeing all matters relating to health,
                        safety, and welfare in those areas.
                      </li>
                      <li>
                        - Conducting periodic workplace inspections, rectifying
                        unsafe conditions, and ensuring the removal or adequate
                        control of hazards.
                      </li>
                      <li>
                        - Ensuring appropriate training is provided to staff and
                        others as necessary for safe working.
                      </li>
                      <li>
                        - Conducting suitable and sufficient risk assessments,
                        implementing control measures, and maintaining them.
                      </li>
                      <li>
                        - Reporting and recording accidents/incidents and near
                        misses, especially those under RIDDOR, and conducting
                        thorough investigations and reviews.
                      </li>
                      <li>
                        - Managing areas of concern through the Risk Register
                        and OLAP.
                      </li>
                      <li>
                        - Establishing effective staff consultation mechanisms
                        for health and safety matters within their units.
                      </li>
                      <li>
                        - Creating an open environment that encourages staff to
                        raise and discuss health and safety issues.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      2.5 Corporate Health & Safety Advisor
                    </p>
                    <p>
                      The Corporate Health & Safety Advisor is responsible for:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        - Acting as the Company's 'competent person' as required
                        by Regulation 7 of the Management of Health and Safety
                        at Work Regulations 1999.
                      </li>
                      <li>
                        - Implementing the health and safety policy within their
                        units and overseeing all matters relating to health,
                        safety, and welfare in those areas.
                      </li>
                      <li>
                        - Providing advice and assistance to ensure compliance
                        with statutory health and safety obligations.
                      </li>
                      <li>
                        - Advising the Director of Developments and others on
                        improving the company's health and safety management
                        arrangements.
                      </li>
                      <li>
                        - Periodically reporting the company's health and safety
                        performance to the Director of Developments.
                      </li>
                      <li>
                        - Maintaining the Company Health and Safety Policy,
                        Health and Safety Manual, and other relevant documents.
                      </li>
                      <li>
                        - Periodically monitoring, reviewing, or auditing the
                        company's health and safety management arrangements to
                        ensure effectiveness and appropriateness
                      </li>
                      <li>
                        - Annually reporting monitoring findings to the Director
                        of Developments.
                      </li>
                      <li>
                        - Collaborating with Health and Safety Leads in each
                        unit to promote a consistent approach to health and
                        safety management across the Company.
                      </li>
                      <li>
                        - Providing training, advice, and increasing health and
                        safety awareness among staff.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      2.6 Corporate Health & Safety Advisor
                    </p>
                    <p>
                      Health and Safety Leads have the following
                      responsibilities:
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        - Providing advice to staff and service users to
                        maintain a safe working environment.
                      </li>
                      <li>
                        - Offering guidance and support to promote a risk-aware
                        culture and identify realistic solutions to health and
                        safety problems.
                      </li>
                      <li>
                        - Facilitating regular health and safety risk
                        assessments and safety audits within their areas of
                        responsibility.
                      </li>
                      <li>
                        - Participating in health and safety training and
                        educational requirements.
                      </li>
                      <li>
                        - Ensuring incidents and near misses are reported
                        through the appropriate channels.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">2.7 All Employees</p>
                    <p>All employees must:</p>
                    <ul className="content-section-list-none">
                      <li>
                        - Take reasonable care of their own health and safety
                        and that of others affected by their actions or
                        omissions at work.
                      </li>
                      <li>
                        - Avoid intentional or reckless interference or misuse
                        of health, safety, or welfare-related equipment or
                        resources.
                      </li>
                      <li>
                        - Cooperate with relevant individuals and comply with
                        health and safety policies, procedures, and risk control
                        measures.
                      </li>
                      <li>
                        - Use appropriate safety equipment and devices as
                        required
                      </li>
                      <li>
                        - Report hazards unknown to their managers or health and
                        safety leads.
                      </li>
                      <li>
                        - Immediately report accidents, incidents, near misses,
                        or dangerous occurrences to their managers or health and
                        safety leads, regardless of injuries.
                      </li>
                    </ul>
                    <p>
                      I apologize for the oversight. Here is the missing
                      section:
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">2.8 Contractors</p>
                    <p>Will:</p>
                    <ul className="content-section-list-none">
                      <li>
                        • Act in accordance with Company guidance on contractors
                        with respect to the management of their health and
                        safety.
                      </li>
                      <li>
                        - Avoid intentional or reckless interference or misuse
                        of health, safety, or welfare-related equipment or
                        resources.
                      </li>
                      <li>
                        - Cooperate with relevant individuals and comply with
                        health and safety policies, procedures, and risk control
                        measures.
                      </li>
                      <li>
                        - Use appropriate safety equipment and devices as
                        required
                      </li>
                      <li>
                        - Report hazards unknown to their managers or health and
                        safety leads.
                      </li>
                      <li>
                        - Immediately report accidents, incidents, near misses,
                        or dangerous occurrences to their managers or health and
                        safety leads, regardless of injuries.
                      </li>
                    </ul>
                    <p>
                      I apologize for the oversight. Here is the missing
                      section:
                    </p>
                  </div>
                </div>
                {/* section 3 */}
                <h2 className="content-section-heading">
                  3:ARRANGEMENTS FOR THE MANAGEMENT OF HEALTH & SAFETY
                </h2>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      3.1 Our Site uses cookies for the following purposes:
                    </p>
                    <p>
                      Health and safety training will be provided to all staff,
                      including bank workers, as part of their induction and
                      periodically as mandatory training, following the
                      company's Training Policy CH 15. Additional specialist
                      training necessary for staff with specific health and
                      safety responsibilities will be identified through the
                      risk assessment process, staff appraisals, and signposted
                      in the health and safety manual. This may include training
                      for roles such as Fire Wardens, First Aiders, and
                      awareness programs for Legionella and Asbestos.
                    </p>
                    <p>
                      Training records will be maintained on eSMART by each Unit
                      Manager.
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">3.2 Risk Assessment</p>
                    <p>
                      Risk assessment is a crucial element of effective health
                      and safety management. Unit Managers are responsible for
                      ensuring that all significant hazards in their workplace
                      or work activities under their control are suitably risk
                      assessed and that subsequent risks are adequately
                      controlled. These assessments should be reviewed annually
                      and whenever there are changes in legislation, working
                      practices, environmental conditions, accidents,
                      near-misses, or indications that the assessment is no
                      longer valid. The company's Health & Safety Manual
                      contains relevant risk assessment procedures and
                      associated documentation..
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">3.3 Risk Assessment</p>
                    <p>
                      Units must identify hazards and risk exposures that are
                      not currently being effectively managed or may cease to be
                      so. A relevant entry should be made in the Unit Risk
                      Register for such hazards. If a risk is identified as high
                      or potentially having a major impact or being detrimental
                      to service users, staff, or the organization, it must be
                      reported to the Corporate Risk Manager (CRM). The CRM will
                      monitor and review all high risks placed on the Unit
                      Registers regularly to ensure progress is being made to
                      reduce or eliminate the risks. Other health and safety
                      risks on the local risk register should also be reviewed
                      regularly until resolved.
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      3.4 Accident/Incident Reporting and Investigation
                    </p>
                    <p>
                      All accidents, incidents, and near-misses should be
                      recorded, reported, and investigated in accordance with
                      the company's Incident Reporting Policy. Each employee has
                      the responsibility to report accidents or incidents they
                      are party to or witness and should liaise with their Line
                      Manager in this regard. The Line Manager should ensure
                      that the company's accident/incident reporting form is
                      completed for each instance. Managers will review all
                      reported incidents/accidents that occur in their workplace
                      and further investigate certain incidents, such as those
                      that are more serious or frequent. The main purpose of the
                      investigation is to learn lessons and reduce the
                      likelihood of repeat events. After conducting an initial
                      investigation of the accident/incident, the Unit Manager
                      should update ePRIME and any relevant databases. All
                      RIDDOR reportable incidents should be investigated, and
                      the outcomes should be discussed at appropriate forums,
                      such as H&S Meetings or Heads of Department, to provide
                      timely feedback to all involved. The Unit Manager is
                      responsible for reporting incidents to the Chief Operating
                      Officer if there is likely to be an insurance claim, to
                      the Health & Safety Executive for RIDDOR incidents (see
                      RIDDOR guidance in Incident Reporting Policy), to the Care
                      Quality Commission, and to the Corporate Health and Safety
                      Advisor (for RIDDOR incidents) with a copy of the
                      incident/accident report.
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">3.5 First Aid at Work</p>
                    <p>
                      My Doctor Shop Ltd will ensure that adequate provision is
                      made, based on the risk assessment process, to provide
                      immediate assistance to employees suffering from potential
                      injuries or illness associated with company undertakings.
                      Rapid summoning of an ambulance or medical assistance
                      should also be facilitated. The level of provision
                      provided will be appropriate to the risks identified in
                      each workplace risk assessment. All First Aiders will be
                      competent in either First Aid at Work (FAW) or Emergency
                      First Aid at Work (EFAW) and hold valid certificates of
                      training. Their names and locations will be prominently
                      displayed in each workplace. More specific details are
                      contained in policy HS 09 First Aid at Work.
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      3.6 Supporting Documentation
                    </p>
                    <p>
                      My Doctor Shop Ltd has several supporting documents
                      available in the Health & Safety Manual, Estates Manual,
                      and Company Handbook. These documents provide more
                      detailed practical arrangements regarding health and
                      safety issues. Some examples of these documents include
                      policies and procedures for asbestos, management of
                      contractors, business continuity, COSHH, fire safety,
                      first aid, food hygiene, lone working, infection control,
                      and management and control of Legionella. It is essential
                      for all employees to familiarize themselves with the
                      content of these documents to ensure a good understanding
                      of all health and safety measures
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      3.7 Supporting Documentation
                    </p>
                    <p>
                      In certain high-risk activities, units may need to develop
                      localized procedures. However, these procedures must be
                      consistent with the company's Health and Safety policy and
                      the Health and Safety Manual or Estates Manual.
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      3.8 Supporting Documentation
                    </p>
                    <p>
                      In certain high-risk activities, units may need to develop
                      localized procedures. However, these procedures must be
                      consistent with the company's Health and Safety policy and
                      the Health and Safety Manual or Estates Manual.
                    </p>
                    <ul className="content-section-list-none">
                      <li>
                        • Health and safety law poster and local contact notices
                        (e.g., first aiders, fire marshals)
                      </li>
                      <li>
                        • The company's Health & Safety, Estates, and Infection
                        Control Manuals
                      </li>
                      <li>• SharePoint</li>
                      <li>
                        • Team briefings that occasionally contain health and
                        safety information
                      </li>
                      <li>
                        • Consultation between management and employees through
                        regular meetings of the heads of department and the
                        Staff Representative Committee, where health and safety
                        issues are brought to the attention of the Unit Manager
                      </li>
                      <li>
                        • Health and safety articles featured in My Doctor Shop
                        Ltd
                      </li>
                      <li>
                        • Internal and external safety alerts (e.g., from the
                        Department of Health) to share good practices and
                        disseminate important safety information
                      </li>
                      <li>• Ad-hoc newsletters</li>
                      <li>• Health, Safety, and Well-being road-shows</li>
                    </ul>
                    <p>
                      I apologize for the oversight. Here is the missing
                      section:
                    </p>
                  </div>
                </div>
                {/* section 4 */}
                <h2 className="content-section-heading">4. MONITORING</h2>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      4.1 Pro-active monitoring: Workplace health and safety
                      inspection
                    </p>
                    <p>
                      A workplace safety inspection is an effective way of
                      identifying faults, hazards, and unsafe working practices.
                      Unit Managers are responsible for ensuring that their
                      ward/departmental managers conduct a workplace inspection
                      of the premises under their control using the most current
                      Workplace Inspection template found in the company's
                      Health and Safety Manual. The frequency of inspection
                      should be determined based on the risk presented by
                      individual workplaces, but as a minimum, it should be
                      completed at least annually. If any unsafe conditions are
                      found during the inspection, the responsible person for
                      that area must take effective action to remove those
                      conditions from the workplace. The Unit Manager is
                      ultimately responsible for ensuring that all issues
                      arising from inspections are resolved to a satisfactory
                      standard, whenever possible.
                    </p>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <p className="sub-description">
                      4.2 Reactive monitoring
                    </p>
                    <p>
                      Reactive monitoring involves monitoring injuries,
                      ill-health, accidents, and incidents to identify their
                      causes, learn lessons, and promote a reduction in future
                      incidents.
                    </p>
                  </div>
                </div>
                {/* section 5 */}
                <h2 className="sub-description">
                  5. HEALTH & SAFETY AUDIT
                </h2>
                <div className="content-section-container">
                  <div>
                    <p>
                      The Corporate Health and Safety Advisor will conduct
                      audits and inspections of sites across the company to
                      assess the level of compliance with the company's Health
                      and Safety policy and the effectiveness of risk control
                      measures. The audit findings will be reported to each Unit
                      Manager.
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
