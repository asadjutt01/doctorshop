import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [isClient, setIsClient] = useState(false);

  // Ensure that certain logic runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Avoid rendering content that depends on the window or document object
  if (!isClient) {
    return null; // Render nothing while client-side JavaScript is loading
  }

  return (
    <div>

      <HeaderWithCat />
      <div className="policy-parent">
        <div className="policy-content-header">
          <h1 className="policy-heading">Privacy Policy</h1>
        </div>
      </div>
      <div className="lg-container content-container">
        <div className="page-padding">
          <div className="custom-card-container-wrapper">
            <div className="custom-card-container">
              <div className="content-section">
                <h2 className="content-section-heading">1. Introduction</h2>

                <div className="content-section-container">
                  <p className="simple-description">
                    My Doctor Shop Ltd is committed to protecting your privacy
                    and ensuring the security of your personal data. This
                    privacy policy applies to www.mydoctorshop.com (the
                    "Site") and governs the collection and use of personal
                    data by My Doctor Shop Ltd (registered number 9614874) of
                    10 Church Street, Paddock, Huddersfield, West Yorkshire,
                    HD1 4TR, ("we," "us," or "our").
                  </p>
                </div>

                <h2 className="content-section-heading">2. Your Consent to This Privacy Policy</h2>
                <div className="content-section-container">

                  <p className="simple-description">
                    By using the Site, you consent to the terms of this
                    privacy policy. If you do not agree with any term in this
                    policy, please refrain from using the Site.
                  </p>
                </div>

                <h2 className="content-section-heading">3. Information That We Collect About You</h2>
                <div className="content-section-container">

                  <p className="simple-description">
                    In this privacy policy, "personal data" refers to
                    information or pieces of information that can directly or
                    indirectly identify you.</p>
                  <p className="simple-description">
                    We may collect personal data about you from various
                    sources, including:
                  </p>

                  <ul className="content-section-list-none">
                    <li>(i) Directly from you;</li>
                    <li>(ii) When you visit the Site; and <br /></li>
                    <li>(iii) From other sources</li>
                  </ul>

                </div>

                <div className="content-section-container">
                  <div>
                    <div className="region-title">3.1 Types of personal data we collect directly from you</div>
                    <p className="simple-description">The personal data we may collect directly from you includes:</p>
                    <ul className="content-section-list-none">
                      <li>- Name</li>
                      <li>- Postal address</li>
                      <li>- Email address</li>
                      <li>- Phone number or mobile number</li>
                      <li>- Password</li>
                      <li>- Order History/Wishlist</li>
                      <li>- Payment History</li>
                      <li>- Age</li>
                      <li>- Date of Birth</li>
                      <li>- Gender</li>
                    </ul>
                  </div>
                </div>

                <div className="content-section-container">
                  <div>
                    <div className="region-title">3.2 Types of personal data we collect when you visit the
                      Site (cookies)</div>
                    <p className="simple-description">We use cookies and similar technologies to collect data
                      about you when you visit the Site. Cookies are files that
                      store information on your computer's hard drive or browser,
                      allowing us to recognize that you have visited our Site
                      before. For more information about the types of cookies we
                      use and how we use them, please refer to our Cookies Policy.
                      The data we may collect when you visit the Site includes:</p>
                    <ul className="content-section-list-none">
                      <li>- Information about the type of browser you use</li>
                      <li>- Details of the web pages you have viewed</li>
                      <li>- Your IP address</li>
                      <li>- The hyperlinks you have clicked</li>
                      <li>- The websites you visited before arriving at our Site</li>
                    </ul>
                  </div>
                </div>
                <div className="content-section-container">
                  <div>
                    <div className="region-title">3.3 Types of personal data we collect from other sources</div>
                    <p className="simple-description">We may receive personal data about you from other sources,
                      such as publicly available databases and data aggregators,
                      to the extent permitted by applicable Data Protection Laws.
                      The data we may collect from these sources includes:</p>
                    <ul className="content-section-list-none">
                      <li>- Name</li>
                      <li>- Street address</li>
                      <li>- Age</li>
                      <li>- Shopping habits</li>
                      <li>- Preferences and information about your lifestyles, hobbies, and interests</li>
                      <li>- Publicly available information such as user-generated content, blogs, and postings</li>
                    </ul>
                  </div>
                </div>

                <h2 className="content-section-heading">4. Information That We Collect About You</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    We may receive personal data about you from other sources,
                    such as publicly available databases and data aggregators,
                    to the extent permitted by applicable Data Protection
                    Laws. The data we may collect from these sources includes:
                  </p>
                  <ul className="content-section-list-none">
                    <li>- Processing your application</li>
                    <li>- Providing the requested services</li>
                    <li>- Responding to your queries or comments</li>
                    <li>- Conducting promotions, prize draws, or competitions you have entered</li>
                    <li>- Sending you requested products or samples</li>
                    <li>- Evaluating the use of our Site, products, and services and understanding your browsing and shopping habits</li>
                    <li>- Making product recommendations</li>
                    <li>- Carrying out analytics and market research</li>
                    <li>- Analyzing the effectiveness of our advertisements</li>
                    <li>- Profiling your purchases of products, including health products both in-store and online</li>
                    <li>- eventing or detecting fraud, other crimes, and verifying your identity  - Verifying/checking your credit/payment status</li>
                    <li>- Processing payment instructions</li>
                  </ul>
                  <p className="note-description">
                    We may supplement the personal data you provide to us with other information we hold or receive from third parties for marketing purposes to provide you with more targeted products and services.
                  </p>
                </div>

                <h2 className="content-section-heading">5. Marketing Messages</h2>
                <div className="content-section-container">
                  <p className="simple-description">
                    We may send you details of products, services, special
                    offers, promotions, and other information that we believe
                    may be of interest to you based on your previous purchases
                    and information you have given us. Third parties, working
                    on our behalf, may also market to you via social media
                    channels. We may also contact you for customer research
                    purposes. You can unsubscribe from such communications at
                    any time by changing your communication preferences in the
                    'My Account' section of the Site or using the unsubscribe
                    link provided in every marketing email we send. However,
                    unsubscribing may result in missing out on offers.
                  </p>

                </div>


                <h2 className="content-section-heading">6. Processing Your Information</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    We may share your personal data with other companies within My Doctor Shop Ltd and third parties that directly support our promotional activities and Site administration. We may use third parties to process and analyse your personal data, provide insights to improve our products and services, and track the effectiveness of promotions or campaigns. If you order a product or service from us, we may share your personal data with our suppliers and other third parties to facilitate delivery. These suppliers or third parties are not authorized to use your personal data in any other way and are required to implement measures to protect it. Please note that we may disclose your personal data if required by law, warrant, subpoena, or court order.

                  </p>
                  <p className="simple-description">
                    We will delete your personal data if there has been no account activity for 3 years.
                  </p>

                </div>


                <h2 className="content-section-heading">7. Protecting Your Personal Data</h2>
                <div className="content-section-container">
                  <p className="simple-description padding-bottom-primary">
                    We maintain appropriate administrative, technical, and physical safeguards to protect the personal data you provide to us against accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, use, or other unlawful forms of processing.</p>
                  <p className="simple-description">
                    The Site may contain hyperlinks to third-party websites. We do not control these websites or the content they contain. Once you leave our website, we are not responsible for the protection and privacy of any information you provide. Please exercise caution and review the privacy statement of the visited website.
                  </p>


                </div>
                <h2 className="content-section-heading">8. Changes in Our Privacy Policy</h2>
                <div className="content-section-container">

                  <p className="simple-description">
                    We may update this privacy policy from time to time by posting the revised version on our Site. We encourage you to visit this page frequently to stay informed.</p>


                </div>
                <h2 className="content-section-heading">9. Your Rights & Who to Contact</h2>
                <div className="content-section-container">

                  <p className="simple-description">
                    If you have any questions, comments, or concerns about this privacy policy, please contact us. You have the right to:</p>
                  <ul className="content-section-list-none">
                    <li>- Decline future contact from us</li>
                    <li>- Obtain a copy of the personal data we hold about you</li>
                    <li>- Request corrections or updates to your personal data in our records</li>
                    <li>- Report any violations of this privacy policy</li>

                  </ul>
                  <p className="note-description">
                    You can reach the My Doctor Shop Customer Services Team by sending an email to <Link href="mailto:info@mydoctorshop.co.uk.">
                      <span className="underline mail">info@mydoctorshop.co.uk.</span>
                    </Link>
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
