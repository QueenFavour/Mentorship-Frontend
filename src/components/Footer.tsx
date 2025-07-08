// src/components/Footer.tsx
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-blue-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          &copy; 2025 Mentorship Matching. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;