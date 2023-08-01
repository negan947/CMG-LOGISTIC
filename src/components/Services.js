import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Stripe } from "stripe";
import SuccessPage from "./SuccessPage";


const stripe = new Stripe("sk_test_51NZJ5yH9OcFHqU1KeMQdfzMCMhnmKhWjDco29vXYKQQB7c1G6MyKYXcJtxB5kHmq6Ef1jpn8Lxgdw77ZKcD8uxHS00nyO59uRQ");



export const Services = () => {
  const handleCheckout = async (productName, price) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: productName,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/",
    });
    window.location.href = session.url;
  };




  return (
    <div id="services">
      <h2 className="servicestitle" >
        Services
      </h2>
      
      <div className="containerservices"
        
      >
        <div className="containerservicesbox"
          
        >
          <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "white" }}>
            Basic
          </h3>
          <p style={{ fontSize: "56px", marginBottom: "20px" }}>$680</p>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              color: "#dcaadf",
            }}
          >
            Perfect starting point for establishing your online presence. Kickstart your online journey with this budget-friendly option.
          </h3>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              textAlign: "left",
              color: "#dcaadf",
              fontSize: "17px",
            }}
          >
            <div className="enfeatures">
    <li>
    <FaCheck className="icon" />
    <span className="text">Secure SSL certificate</span>
  </li>
    <li>
    <FaCheck className="icon" />
    <span className="text">Fast Loading Speed</span>
  </li>
    <li>
    <FaCheck className="icon" />
    <span className="text">Custom Domain Name</span>
  </li>
  <li>
    <FaCheck className="icon" />
    <span className="text">Responsive Design</span>
  </li>
  <li>
    <FaCheck className="icon" style={{ marginRight: "10px" }} />
    <span className="text">User-Friendly Interface</span>
  </li>
  <li>
    <FaCheck className="icon" style={{ marginRight: "10px" }} />
    <span className="text">Essential Pages</span>
  </li>
  <li>
    <FaCheck className="icon" style={{ marginRight: "10px" }} />
    <span className="text">Contact Form</span>
  </li>
  <li>
    <FaCheck className="icon" style={{ marginRight: "10px" }} />
    <span className="text">Branding Integration</span>
  </li>
  <li>
    <FaCheck className="icon" style={{ marginRight: "10px" }} />
    <span className="text">Image Gallery</span>
  </li>

  

<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">Advanced Functionality</span>
</li>

<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">Testimonials and Reviews</span>
</li>
<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">Social Media Integration</span>
</li>
<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">E-commerce Integration</span>
</li>
<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">Custom Forms</span>
</li>

<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">SEO Optimization</span>
</li>
<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">Analytics and Reporting</span>
</li>
<li>
  <FaTimes className="icon2" style={{ marginRight: "10px" }} />
  <span className="text2">Multi-language Support</span>
</li>
</div>
          </ul>
          <button
            className="buttonservices"
            onClick={() => handleCheckout("Basic Package", 68000)}


            
            
            
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Buy Basic
          </button>
        </div>
        <div
          className="containerservicesbox2"
        >
          <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Premium</h3>
          <p style={{ fontSize: "56px", marginBottom: "20px" }}>$1180</p>
          <h3 style={{
              fontSize: "18px",
              marginBottom: "10px",
              color: "#dcaadf",
            }}>
            Elevate your brand and leave a lasting impression on your audience with this top-tier service.
          </h3>
          <ul style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              textAlign: "left",
              color: "#dcaadf",
              fontSize: "17px",
            }}>

<li>
    <FaCheck className="icon" />
    <span className="text">Secure SSL certificate</span>
  </li>

<li>
    <FaCheck className="icon" />
    <span className="text">Fast Loading Speed</span>
  </li>
<li>
    <FaCheck className="icon" />
    <span className="text">Custom Domain Name</span>
  </li>
          
          <li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Responsive Design</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">User-Friendly Interface</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Essential Pages</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Contact Form</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Branding Integration</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Image Gallery</span>
</li>


<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Advanced Functionality</span>
</li>

<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Testimonials and Reviews</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Social Media Integration</span>
</li>
<li>
  <span className="icon2"><FaTimes /></span>
  <span className="text2">E-commerce Integration</span>
</li>
<li>
  <span className="icon2"><FaTimes /></span>
  <span className="text2">Custom Forms</span>
</li>

<li>
  <span className="icon2"><FaTimes /></span>
  <span className="text2">SEO Optimization</span>
</li>
<li>
  <span className="icon2"><FaTimes /></span>
  <span className="text2">Analytics and Reporting</span>
</li>
<li>
  <span className="icon2"><FaTimes /></span>
  <span className="text2">Multi-language Support</span>
</li>
          
          </ul>
          <button
            className="buttonservices2"
            onClick={() => handleCheckout("Premium Package", 118000)}
            
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Buy Premium
          </button>
        </div>
        <div
          className="containerservicesbox3"
        >
          <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Business</h3>
          <p style={{ fontSize: "56px", marginBottom: "20px" }}>$1720</p>
          <h3 style={{
              fontSize: "18px",
              marginBottom: "10px",
              color: "#dcaadf",
            }}>
            This robust solution will not only impress your visitors but also support your business growth and expansion.
          </h3>
          <ul style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              textAlign: "left",
              color: "#dcaadf",
              fontSize: "17px",
            }}>

<li>
    <FaCheck className="icon" />
    <span className="text">Secure SSL certificate</span>
  </li>
<li>
    <FaCheck className="icon" />
    <span className="text">Fast Loading Speed</span>
  </li>
<li>
    <FaCheck className="icon" />
    <span className="text">Custom Domain Name</span>
  </li>
          <li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Responsive Design</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">User-Friendly Interface</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Essential Pages</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Contact Form</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Branding Integration</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Image Gallery</span>
</li>




<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Advanced Functionality</span>
</li>

<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Testimonials and Reviews</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Social Media Integration</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">E-commerce Integration</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Custom Forms</span>
</li>




<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">SEO Optimization</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Analytics and Reporting</span>
</li>
<li>
  <span className="icon"><FaCheck /></span>
  <span className="text">Multi-language Support</span>
</li>
          </ul>
          <button
            className="buttonservices3"
            onClick={() => handleCheckout("Business Package", 172000)}
            
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Buy Business
          </button>
        </div>
      </div>
    </div>
  );
};

