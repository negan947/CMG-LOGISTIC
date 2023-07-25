import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { BarLoader } from "react-spinners";
import { Testimonials } from "./components/Testimonials";
import  SuccesPage from "./components/SuccessPage";
//import { Switch, Route } from "react-router-dom";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId;
    let count = 0;

    intervalId = setInterval(() => {
      count += 10;
      setProgress(count);

      if (count >= 100) {
        clearInterval(intervalId);
        setIsLoading(false);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="App">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(to right, #d63384, #6610f2)",
            animation: "fade-out 2s forwards",
          }}
        >
          <BarLoader color="#fff" height={10} width={200} />
          <p style={{ fontSize: "24px", color: "#fff" }}>Loading...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Services />
          <Projects />
          
          <Testimonials />
          <Contact />
          <Footer />
          
          <div style={{ animation: "fade-out 2s forwards" }}></div>
        </>
      )}
    </div>
  );
}

export default App;