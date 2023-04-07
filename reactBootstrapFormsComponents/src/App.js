import React from "react";
import './assets/css/styles.css';
import CustomNavbar from "./components/Navbar";
import CarouselComponent from './components/Carousel';
import Alert from './components/Alert';
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

function App() {
  return (
      <div className="App">
          <CustomNavbar />
          <div className="container" id="alert-section">
              <Alert message="Recruitment is now open for aspiring Kendokas." />
          </div>
          <div className="container" id="carousel-section">
              <CarouselComponent />
          </div>
          <div className="container" id="gallery-section">
              <Gallery />
          </div>
          <div className="container" id="contact-section">
              <ContactForm />
          </div>
      </div>
  );
}

export default App;
