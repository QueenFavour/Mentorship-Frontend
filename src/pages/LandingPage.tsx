// src/pages/LandingPage.tsx
import { Component } from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <Testimonials />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;