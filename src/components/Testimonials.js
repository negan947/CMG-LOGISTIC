import React from 'react';

export const Testimonials = () => {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      flexDirection: 'row',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
      },
      marginTop: '40px',
      marginBottom: '40px',
    }}>
      <div style={{ 
        width: '100%',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}>
        Testimonials
      </div>
      <div style={{ 
        width: '400px', 
        height: '400px', 
        borderRadius: '10px',
        background: "linear-gradient(to bottom right, #d63384, #6610f2)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "20px",
              marginTop: "40px",
              padding: "20px 70px",
              transition:
                "background-color 0.3s ease, transform 0.3s ease",
              backdropFilter: "blur(5px) brightness(65%)",
              transform: "scale(1)",
            }}
            
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            
            }}>
          "This is another quote from someone. It can be a testimonial or a review of your product or service."
        </div>
      </div>
      <div style={{ 
        width: '400px', 
        height: '400px', 
        borderRadius: '10px',
        background: "linear-gradient(to bottom right, #d63384, #6610f2)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "20px",
              marginTop: "40px",
              padding: "20px 70px",
              transition:
                "background-color 0.3s ease, transform 0.3s ease",
              backdropFilter: "blur(5px) brightness(70%)",
              transform: "scale(1)",
            }}
            
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            
            }}>
          "This is another quote from someone. It can be a testimonial or a review of your product or service."
        </div>
      </div>
      <div style={{ 
        width: '400px', 
        height: '400px', 
        borderRadius: '10px',
        background: "linear-gradient(to bottom right, #d63384, #6610f2)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "20px",
              marginTop: "40px",
              padding: "20px 70px",
              transition:
                "background-color 0.3s ease, transform 0.3s ease",
              backdropFilter: "blur(5px) brightness(70%)",
              transform: "scale(1)",
            }}>
          "This is another quote from someone. It can be a testimonial or a review of your product or service."
        </div>
      </div>
    </div>
  );
};
