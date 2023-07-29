import Img2 from "../assets/img/pfp1.webp";
import Img3 from "../assets/img/pfp2.webp";

export function Testimonials() {
  return (
    <>
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <div className="testimonial-text-container"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}>
                <p>
                "I am beyond impressed with the website services provided by CMG LOGISTIC. They created a stunning website that perfectly represents my brand. The team was professional, responsive, and took the time to understand my business needs. I received numerous compliments from my clients, and the website has significantly boosted my online presence. I highly recommend CMG LOGISTIC for anyone looking to elevate their business with an exceptional website."
                </p>
                </div>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Rares Dulea</h4>
                      <p>Pipera</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <div className="testimonial-text-container"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}>
                <p>
                "I can't thank CMG LOGISTIC enough for the incredible website they built for my business. The attention to detail and creativity showcased in the design are outstanding. The team went above and beyond to ensure that the website was not only visually captivating but also user-friendly. They were always available to address my queries and made the entire process smooth and enjoyable. Thanks to CMG LOGISTIC, my online sales have skyrocketed, and I couldn't be happier with the results. Highly recommended!"
                </p>
                </div>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Alexa Dumitru</h4>
                      <p>Bucharest</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

