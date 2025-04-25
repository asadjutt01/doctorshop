import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface TabsComponentProps {
  product?: any; // Ideally, replace `any` with a proper Product type
  selectedVariant?:any;
setSelectedVariant?:any;
}
const TabsComponent: React.FC<TabsComponentProps> = ({ product,
  selectedVariant,
setSelectedVariant,
 }) => {
  const [activeKey, setActiveKey] = useState("description");
console.log("selectedVariant",selectedVariant);
  return (
    <Tab.Container activeKey={activeKey} onSelect={(k: any) => setActiveKey(k)}>
      <div className="tabs-container">
        {/* Navigation Tabs */}
        <Nav variant="tabs" className="custom-tabs">
          {selectedVariant?.description && (
            <Nav.Item>
              <Nav.Link eventKey="description">Description</Nav.Link>
            </Nav.Item>
          )}
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">Additional Information</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="shippingAndReturns">Shipping and Returns</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">Reviews</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tab Content */}
        <Tab.Content className="custom-tab-content">
          {selectedVariant?.description && (
            <Tab.Pane eventKey="description">
              <div dangerouslySetInnerHTML={{ __html: selectedVariant?.description }} />
              {/* <div>
                <p>
                  <b>The name of your business or website:</b>
                </p>
                <p>The industry or field you're in.</p>
                <p>
                  <b>Your target audience:</b> The key services or products you offer.
                </p>
                <p>
                  Any particular tone or style you prefer (e.g., professional, friendly,
                  modern, traditional).
                </p>
                <p>
                  With this information, I can craft a slogan and a paragraph that best suit your needs.
                </p>
                <p>
                  <b>Great!</b> Could you provide a bit more detail about your medical
                  website, such as:
                </p>
                <ul>
                  <li><b>The name of your website.</b></li>
                  <li>
                    <b>The specific services or products you offer</b> (e.g., telemedicine,
                    healthcare information, medical supplies).
                  </li>
                  <li>
                    <b>Your target audience</b> (e.g., patients, healthcare professionals,
                    general public).
                  </li>
                  <li>
                    <b>Any specific message or tone you want to convey</b> (e.g., trust,
                    innovation, compassion).
                  </li>
                </ul>
                <p>
                  This will help me create a more tailored and effective slogan and
                  paragraph for your site.
                </p>
                <p>
                  <b>Thank you for the details!</b> Here’s a slogan and a paragraph for your
                  medical website, <b>Doctor Shop</b>, which specializes in X-ray machines.
                </p>
                <blockquote>
                  <b>"Precision in Every Scan, Trust in Every Purchase"</b>
                </blockquote>
                <p>
                  <b>Paragraph:</b>
                </p>
                <p>
                  Welcome to <b>Doctor Shop</b>, your trusted source for high-quality X-ray
                  machines. We understand the critical role that precise imaging plays in
                  diagnosing and treating patients effectively. That’s why we are dedicated
                  to providing state-of-the-art X-ray equipment that ensures accuracy,
                  reliability, and safety. Our expert team is committed to supporting
                  healthcare professionals with the best technology available, making every
                  scan count. At <b>Doctor Shop</b>, we combine innovation with trust,
                  ensuring you receive the best tools for delivering exceptional patient
                  care. Explore our range of X-ray machines and discover why <b>Doctor
                  Shop</b> is the preferred choice for medical imaging solutions.
                </p>
              </div> */}
            </Tab.Pane>
          )}

          <Tab.Pane eventKey="additionalInfo">
            <div>
              <h3>Great! Could you provide a bit more detail about your medical website, such as:</h3>
              <ul>
                <li>The name of your website.</li>
                <li>The specific services or products you offer.</li>
                <li>Your target audience.</li>
                <li>The tone or message you want to convey.</li>
              </ul>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="shippingAndReturns">
            <div>
              <h3>Thank you for the details!</h3>
              <p>Here's a slogan for your website:</p>
              <blockquote>"Precision in Every Scan, Trust in Every Purchase"</blockquote>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="reviews">
            <div>
              <h3>Paragraph</h3>
              <p>Welcome to Doctor Shop, your trusted source for high-quality X-ray machines.</p>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
};

export default TabsComponent;