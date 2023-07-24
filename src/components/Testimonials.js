import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: 'testimony1.jpg', // Replace with the image path for the first testimonial
      quote: 'Testimonial 1 text',
    },
    {
      id: 2,
      image: 'testimony2.jpg', // Replace with the image path for the second testimonial
      quote: 'Testimonial 2 text',
    },
    {
      id: 3,
      image: 'testimony3.jpg', // Replace with the image path for the third testimonial
      quote: 'Testimonial 3 text',
    },
    // Add more testimonials if needed
  ];

  return (
    <div style={{ background: 'linear-gradient(to right, #3498db, #9b59b6)', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Testimonials</h2>
        <p>Short description about testimonials.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '70%',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                width: '30%',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '10px',
                padding: '20px',
                margin: '0 5px',
              }}
            >
              <img
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <blockquote>{testimonial.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


