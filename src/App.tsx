import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { WebinarHighlights } from './components/WebinarHighlights';
import { JoinButtons } from './components/JoinButtons';
import { CountdownTimer } from './components/CountdownTimer';
import { LearningModules } from './components/LearningModules';
import TrustedBy from './components/TrustedBy';
import popup from './assets/logos/popupimg.png'

function App() {
   const [isOpen, setIsOpen] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
      setIsOpen(false);
    };
  return (
    <div   >
    <div className='bg-[#0e0e0e]'>
     <HeroSection isOpen={isOpen}
  setIsOpen={setIsOpen}
  handleSubmit={handleSubmit}/>

        <TrustedBy />
        </div>
    <div className="min-h-screen w-full bg-[#0e0e0e] flex flex-col items-center gap-16 py-8">
     


      <WebinarHighlights />

       <JoinButtons />

      <CountdownTimer />

      <LearningModules />

     
    </div>
     {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Popup */}
          <div
            className="bg-black rounded-3xl p-12 w-11/12 max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
        className="absolute top-4 right-4 text-white text-2xl "
        onClick={() => setIsOpen(false)}
      >
        &times;
      </button>
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-10">
 
  <img
    src={popup}
    alt="StrykeX Logo"
    className="h-10 w-auto object-contain"
  />
</div>


            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-1">
                Get <span className="text-green-400">2 Months</span>{' '}
                <span className="text-yellow-400">Extra Access</span>
              </h2>
              <h2 className="text-3xl font-bold text-white">
                + Special Discount Code
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-5 relative">
                <label className="absolute -top-3 left-5 bg-gradient-to-r from-green-400 to-yellow-400 text-black px-2 py-1 rounded text-sm font-bold z-10">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-5 bg-transparent border-2 border-green-400 rounded-xl text-gray-400 text-base outline-none focus:border-yellow-400 transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-5 bg-transparent border-2 border-green-400 rounded-xl text-gray-400 text-base outline-none focus:border-yellow-400 transition-colors placeholder-gray-600"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="mb-5">
                <input
                  type="tel"
                  placeholder="Phone No."
                  className="w-full px-5 py-5 bg-transparent border-2 border-green-400 rounded-xl text-gray-400 text-base outline-none focus:border-yellow-400 transition-colors placeholder-gray-600"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-green-400 to-yellow-400 rounded-xl text-xl font-bold text-black hover:scale-105 transition-transform mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
   
    
    </div>
  );
}

export default App;
