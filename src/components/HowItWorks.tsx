// src/components/HowItWorks.tsx
import React, { Component } from "react";

class HowItWorks extends Component {
  render() {
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-2">3 simple steps to get started</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600">Create a free account as a mentee or mentor.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Get Matched</h3>
            <p className="text-gray-600">We'll pair you with someone based on your goals.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Start Mentorship</h3>
            <p className="text-gray-600">Begin your mentorship journey and grow.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;