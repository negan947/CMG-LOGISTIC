import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactInfo = () => {
  return (
    <Col lg={12}>
      <div className="contact-bx wow slideInUp">
        <Row>
          <Col lg={6}>
            <h3>Contact Us</h3>
          </Col>
          <Col lg={6} md={6} xl={5}>
            <p className="contact-info"><span className="contact-label">Tel:</span> <span className="contact-value">0772125155</span></p>
            <p className="contact-info"><span className="contact-label">Email:</span> <span className="contact-value">contact@cmg-logistic.com</span></p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ContactInfo;