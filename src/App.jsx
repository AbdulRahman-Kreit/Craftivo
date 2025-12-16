import { useEffect, useState } from "react" 
import { HashRouter, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import ToTopButton from './components/ToTopButton'
import Landing from './sections/Landing'
import About from './sections/About'
import Resume from './sections/Resume'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'

// To Navigate to the specific section
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

function App() {
  const [activeHash, setActiveHash] = useState('#home'); 

  const handleSetActiveHash = (hash) => {
    setActiveHash(hash);
  };

  return (
    <main className="w-full bg-zinc-900 overflow-x-hidden">
      <HashRouter> 
        <ScrollToSpecificSection />
        
        <Navbar 
          activeHash={activeHash} 
          setActiveHash={handleSetActiveHash} 
        />
        
        <Landing />
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />
        
        <Footer />
        <ToTopButton setActiveHash={handleSetActiveHash} />
      </HashRouter>
    </main>
  )
}

export default App