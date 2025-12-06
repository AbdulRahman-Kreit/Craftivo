import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import ToTopButton from './components/ToTopButton'
import Landing from './sections/Landing'
import About from './sections/About'
import Resume from './sections/Resume'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'

function ScrollToSpecificSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
  }, [location]);
  
  return null;
}

function AllSections() {
  return (
    <>
      <Landing />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      <ToTopButton />
    </>
  )
}

function App() {
  
  return (
    <main className="w-full bg-zinc-900">
      <Router>
        <ScrollToSpecificSection />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<AllSections />} />
        </Routes>
        
        <Footer />
      </Router>
    </main>
  )
}

export default App