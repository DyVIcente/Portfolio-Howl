import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Apropos, Projets, Contact, Reco, Footer } from './components';

function App() {

  return (
    <BrowserRouter>
    
      <div className="relative z-0 bg-white">
     
        <div className="bg-bgImage bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Apropos />
        <Projets />
        <Reco />
        <Contact />
        <Footer />
      
      </div>
    </BrowserRouter> 
  )
}

export default App
