import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Masterhead from './components/Masterhead';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';


function App() {
  return (
    <>
        {/* Navigation*/}
        <Navigation />
       
      <Routes>
          <Route path='/' element={<Masterhead/>} />
          <Route path='/workings' element={<HowItWorks/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
       
       </> 
        );
}

export default App;
