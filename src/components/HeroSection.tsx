// src/components/HeroSection.tsx
import React, { Component } from "react";
import { motion } from "framer-motion";

class HeroSection extends Component {
  render() {
    return (
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/mentor-bg.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get Matched to a Trusted Mentor Today
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We’ve helped over 5,000 mentees build confidence and thrive through mentorship.
          </p>
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-300 inline-block"
          >
            Want to get matched? Sign up now
          </a>
        </motion.div>
      </div>
    );
  }
}

export default HeroSection;