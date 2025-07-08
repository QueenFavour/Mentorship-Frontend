// src/components/Contact.tsx
import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            We'd love to hear from you. Reach out and we'll get back to you shortly.
          </p>
          <a
            href="mailto:favourfolade@gmail.com"
            className="text-blue-600 underline font-medium"
          >
            favourfolade@gmail.com
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;