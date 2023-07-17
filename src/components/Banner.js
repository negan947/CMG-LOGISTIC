import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({headerImg}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Expose Your Business Online", "Amplify Your Online Presence!", "Build Your Digital Home" ];
  const period = 1000;

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
};

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to CMG Logistic</span>
                <h1>{`Hi! We are here to`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Expose Your Business Online", "Amplify Your Online Presence!", "Build Your Digital Home" ]'><span className="wrap">{text[index]}</span></span></h1>
                  <p>At CMG Logistic, we specialize in creating exceptional websites that showcase your business in the best possible light. Our expert team of web designers and developers is here to transform your vision into a stunning reality. We understand the importance of a strong online presence, which is why we focus on crafting websites that are visually captivating, user-friendly, and optimized for success.</p>
                  <button onClick={() => console.log('connect')}><a href="#connect" style={{textDecoration: 'none', color: 'white'}}>Let’s Connect</a> <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
