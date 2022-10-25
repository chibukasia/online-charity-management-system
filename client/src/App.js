import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import AdminSignUp from './components/AdminSignUp';
import Footer from './components/Footer'
import AdminLogin from './components/AdminLogin';
import NgoDashbord from './components/NgoDashbord';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';


function App() {

  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)

  // Get the user who is is session
  useEffect(() => {
    if (user){
      fetch("/user_me").then((res) => {
        if (res.ok) {
          res.json().then((data) => setUser(data));
        }
      })
    }
    
  },[]) 

  // Get the admin in session
  useEffect(()=>{
    if (admin){
      fetch("/admin").then((res) => {
        if (res.ok) {
          res.json().then((data) => setUser(data));
        }
      })
    }
  },[])

  return (
    <div className='body'>
        {/* Navigation*/}
      <Navigation user={user} setUser={setUser} admin={admin}/>

       {/* navigation routes */}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/ngo_dashboard' element={<NgoDashbord/>} />
          <Route path='/login' element={<Login onLogin = {setUser}/>} />
          <Route path='/adminsignup' element={<AdminSignUp setAdmin = {setAdmin}/>} />
          <Route exact path='/adminlogin' element={<AdminLogin setAdmin = {setAdmin}/>} />
          <Route exact path='/how_it_works' element={<HowItWorks/>} />
          <Route exact path='/aboutus' element={<AboutUs/>} />
      </Routes>
      <Footer/>
       </div>
        );
}

export default App;
