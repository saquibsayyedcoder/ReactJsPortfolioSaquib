import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // We keep Router for potential future use (e.g., /resume)

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import SkillCard from './Components/SkillCards';
import WorkExperience from './Components/WorkExpreince';
import Projects from './Components/Projects';
import Resume from './Components/Resume'; // Keep this for /resume route
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
//import Client from './Components/Client';

function App() {
  return (
    <>
    <ThemeProvider>
  <Router>
      <Navbar />

      {/* ✅ Only render all sections on HOME route */}
      {/* ✅ Other routes (like /resume) can still exist separately */}

      <Routes>
        {/* ✅ Main SPA Page — includes ALL scrollable sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <SkillCard />
              <WorkExperience />
              <Projects />
              {/* <Client/> */}
              <Contact />
            </>
          }
        />

        {/* ✅ Keep standalone pages if needed (e.g., full-page resume) */}
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
      <Toaster />
    </Router>
    </ThemeProvider>
    
    </>
  
  );
}

export default App;