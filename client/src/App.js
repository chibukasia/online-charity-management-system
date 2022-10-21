import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Masterhead from './components/Masterhead';
import {Portfolio} from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';


function App() {
  return (
    <>
        {/* Navigation*/}
        <Navigation />
        
        {/* Masthead*/}
        <Masterhead />
        {/* Services*/}
        <HowItWorks />
        {/* Portfolio Grid*/}
      <Routes>
          <Route path='portfolio' element={<Portfolio />} />
      </Routes>
        
        {/* About*/}
        <About />
        {/* Footer*/}
        <Footer/>
       </> 
        );
}

export default App;
