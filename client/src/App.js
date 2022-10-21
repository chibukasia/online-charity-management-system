import './App.css';
import Navigation from './components/Navigation';
import Masterhead from './components/Masterhead';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';


function App() {
  return (
    <div className="App">
    <div>
        {/* Navigation*/}
        <Navigation />
        
        {/* Masthead*/}
        <Masterhead />
        {/* Services*/}
        <HowItWorks />
        {/* Portfolio Grid*/}
        <Portfolio />
        {/* About*/}
        <About />
        {/* Footer*/}
        <Footer/>
       </div> 
       </div> );
}

export default App;
