import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const navbarRef = useRef(null);
  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const onToggle = () => {
    setExpanded(!expanded);
    if (containerRef.current) {
      containerRef.current.style.height = expanded ? 'auto' : `${containerRef.current.getBoundingClientRect().height}px`;
    }
    if (expanded) {
      navbarRef.current.style.height = '100px';
    } else {
      navbarRef.current.style.height = '300px';
    }
  }
  return (
    <Router>
      <Navbar  expand="md" style={{
        height: "100px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
      }} className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={onToggle} ref={navbarRef}>
        <Container ref={containerRef} fluid={expanded} style={{ height: expanded ? 'auto' : '0px', width: '100%' }}>
          <Navbar.Brand href="/#home">
            <img className="logodev" src={logo} alt="Logodev1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#testimonials" className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonials')}>Testimonials</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/alex-busuioc-1598a821b/" target="_blank"><img src={navIcon1} alt="" /></a>
                <Nav.Link href="tel:+40772125155"><FaPhone style={{color: 'white'}} /></Nav.Link>
                <Nav.Link href="mailto:contact@cmg-logistic.com?subject=Inquiry About Your Website Creation Services"><MdEmail style={{color: 'white'}} /></Nav.Link>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}