import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.webp"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>We possess a diverse range of skills that are key to unlocking online success for your business. With expertise in SEO (Search Engine Optimization), SMMA (Social Media Marketing Agency), and web development, we have the tools and knowledge to elevate your digital presence and drive impressive results.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>SEO</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SMMA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img src={colorSharp} srcset="
  colorSharp-256w.jpg 256w,
  colorSharp-776w.jpg 776w,
  colorSharp-1010w.jpg 1010w,
  colorSharp-1200w.jpg 1200w,
  colorSharp-1380w.jpg 1380w,
  colorSharp-1540w.jpg 1540w,
  colorSharp-1680w.jpg 1680w,
  colorSharp-1810w.jpg 1810w,
  colorSharp-1930w.jpg 1930w,
  colorSharp-2048w.jpg 2048w
" sizes="(max-width: 1280px) 100vw, 40vw" alt="Image" />
    </section>
  )
}
