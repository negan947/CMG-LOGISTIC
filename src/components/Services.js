import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { Stripe } from "stripe";


const stripe = new Stripe("sk_test_51Gn4IkL3vxi3m0Vhu2oHz9OMpH1h5ZLzmbbyyzIWUjr26R6EmS5UZKETAuPBbqJenWtNeaBcoUQYIfMIsPpq5Br600Bcp7Xfzf");



export const Services = () => {
  const handleCheckout = async () => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Service Name",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://yourwebsite.com/success",
      cancel_url: "https://yourwebsite.com/cancel",
    });
    window.location.href = session.url;
  };




  return (
    <div id="services">
      <h2 style={{ 
        fontSize: "86px",
        marginBottom: "20px",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #d63384, #6610f2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    
       }}>
        Services
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center", // Center items vertically in mobile view
        }}
      >
        <div
          style={{
            // Styles for desktop and mobile view
            background: "linear-gradient(to bottom right, #d63384, #6610f2)",
            borderRadius: "25px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            margin: "20px",
            padding: "20px",
            textAlign: "center",
            width: "380px",
            height: "780px",
          }}
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
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Responsive Design
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              User-Friendly Interface
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Essential Pages
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Contact Form
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Branding Integration
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Image Gallery
            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Custom Design
            </li>


            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Interactive Elements

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Advanced Functionality

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Content Management System (CMS)

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Testimonials and Reviews

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Social Media Integration

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              E-commerce Integration

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Custom Forms

            </li>



            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Blog Integration

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              SEO Optimization

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Analytics and Reporting

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Multi-language Support

            </li>
            
          </ul>
          <button
            onClick={handleCheckout}


            
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "20px",
              marginTop: "40px",
              padding: "20px 70px",
              transition:
                "background-color 0.3s ease, transform 0.3s ease",
              backdropFilter: "blur(5px) brightness(70%)",
              transform: "scale(1)",
            }}
            
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
          style={{
            // Styles for desktop and mobile view
            background: "linear-gradient(to bottom right, #d63384, #6610f2)",
            borderRadius: "25px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            margin: "20px",
            padding: "20px",
            textAlign: "center",
            width: "380px",
            height: "780px",
          }}
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
              <FaCheck style={{ marginRight: "10px" }} />
              Responsive Design
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Responsive Design
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              User-Friendly Interface
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Essential Pages
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Contact Form
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Branding Integration
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Image Gallery
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Custom Design
            </li>


            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Interactive Elements

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Advanced Functionality

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Content Management System (CMS)

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Testimonials and Reviews

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Social Media Integration

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              E-commerce Integration

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Custom Forms

            </li>



            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Blog Integration

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              SEO Optimization

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Analytics and Reporting

            </li>
            <li>
              <FaTimes style={{ marginRight: "10px" }} />
              Multi-language Support

            </li>
          </ul>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "20px",
              marginTop: "40px",
              padding: "20px 70px",
              transition:
                "background-color 0.3s ease, transform 0.3s ease",
              backdropFilter: "blur(5px) brightness(70%)",
              transform: "scale(1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Select Plan
          </button>
        </div>
        <div
          style={{
            // Styles for desktop and mobile view
            background: "linear-gradient(to bottom right, #d63384, #6610f2)",
            borderRadius: "25px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            margin: "20px",
            padding: "20px",
            textAlign: "center",
            width: "380px",
            height: "780px",
          }}
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
        
              <FaCheck style={{ marginRight: "10px" }} />
              Responsive Design
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              User-Friendly Interface
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Essential Pages
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Contact Form
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Branding Integration
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Image Gallery
            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Custom Design
            </li>


            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Interactive Elements

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Advanced Functionality

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Content Management System (CMS)

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Testimonials and Reviews

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Social Media Integration

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              E-commerce Integration

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Custom Forms

            </li>



            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Blog Integration

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              SEO Optimization

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Analytics and Reporting

            </li>
            <li>
              <FaCheck style={{ marginRight: "10px" }} />
              Multi-language Support

            </li>
          </ul>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "20px",
              marginTop: "40px",
              padding: "20px 70px",
              transition:
                "background-color 0.3s ease, transform 0.3s ease",
              backdropFilter: "blur(5px) brightness(70%)",
              transform: "scale(1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

