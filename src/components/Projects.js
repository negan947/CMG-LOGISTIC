import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.avif";
import projImg2 from "../assets/img/project-img2.avif";
import projImg3 from "../assets/img/project-img3.avif";
import projImg4 from "../assets/img/project-img4.avif";
import projImg5 from "../assets/img/project-img5.avif";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CAR RENTAL 🚗",
      description: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      imgUrl: projImg1,
    },
    {
      title: "COINDOM 🪙",
      description: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      imgUrl: projImg2,
    },
    {
      title: "GYMATE 🏋️",
      description: "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
      imgUrl: projImg3,
    },
    {
      title: "ECOMMERCE 🛒",
      description: "With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
      imgUrl: projImg4,
    },
    {
      title: "ADMIN PANEL 📊",
      description: "Admin panel is a web-based interface that allows users to manage and monitor their website or application.",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>We take pride in presenting you with a collection of stunning websites we have created for our satisfied clients. Each project represents our dedication to delivering exceptional design, functionality, and a seamless user experience. Explore the showcase below and get inspired by our successful collaborations:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                     </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        srcset="colorSharp2-256w.jpg 256w, colorSharp2-667w.jpg 667w, colorSharp2-880w.jpg 880w, colorSharp2-1050w.jpg 1050w, colorSharp2-1240w.jpg 1240w, colorSharp2-1410w.jpg 1410w, colorSharp2-1560w.jpg 1560w, colorSharp2-1690w.jpg 1690w, colorSharp2-1820w.jpg 1820w, colorSharp2-1940w.jpg 1940w, colorSharp2-2048w.jpg 2048w"
        sizes="35vw"
        alt="bgimage"
      />
    </section>
  )
}