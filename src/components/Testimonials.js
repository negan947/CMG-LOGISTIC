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
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          maxWidth: '80%',
          textAlign: 'center',
        }}>
          "This is a quote from someone. It can be a testimonial or a review of your product or service."
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
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          maxWidth: '80%',
          textAlign: 'center',
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
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          maxWidth: '80%',
          textAlign: 'center',
        }}>
          "This is a third quote from someone. It can be a testimonial or a review of your product or service."
        </div>
      </div>
    </div>
  );
};
