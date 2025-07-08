// src/components/Testimonials.tsx
import React, { Component } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  feedback: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Bukola Wright",
    feedback: "My mentor helped me gain clarity in my career. This program truly changed my life.",
    role: "Mentee, Lagos"
  },
  {
    name: "Chidi Okeke",
    feedback: "My mentor helped me gain clarity in my career. This program truly changed my life.",
    role: "Mentee, Anambra"
  },
  {
    name: "Samuel Olorunfemi",
    feedback: "Being a mentor here has been fulfilling. The platform makes it so easy to connect.",
    role: "Mentor, Abuja"
  },
  {
    name: "Ameen Yusuf",
    feedback: "I found the confidence to pursue my goals thanks to my mentor.",
    role: "Mentee, Port Harcourt"
  }
];

class Testimonials extends Component {
  render() {
    return (
      <div className="py-16 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Users Are Saying</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map(function (testimonial, index) {
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <h4 className="font-semibold text-blue-600">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Testimonials;