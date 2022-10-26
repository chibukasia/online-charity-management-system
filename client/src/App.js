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
import DonationRequestPage from './components/DonationRequestPage';
import DonationRequestForm from './components/DonationRequestForm';
import NgoRegistrationForm from './components/NgoRegistrationForm';
import DonorPage from './components/DonorPage';
import PageNotFound from './components/PageNotFound';
import DonorDashboard from './components/DonorDashboard';
import UserProfile from './components/UserProfile';


function App() {

  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)

  // Get the user who is is session
  useEffect(() => {
      fetch("/user_me").then((res) => {
        if (res.ok) {
          res.json().then((data) => setUser(data));
        }
      })   
  },[]) 

  // Get the admin in session
  useEffect(()=>{
      fetch("/admin").then((res) => {
        if (res.ok) {
          res.json().then((data) => setUser(data));
        }
      })
  },[])

  return (
    <div className='body'>
        {/* Navigation*/}
      <nav style={{marginBottom: "90px"}}>
        <Navigation user={user} setUser={setUser} admin={admin}/>
      </nav>

       {/* navigation routes */}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/ngo_dashboard' element={<NgoDashbord user={user}/>} />
          <Route path='/login' element={<Login onLogin = {setUser}/>} />
          <Route path='/adminsignup' element={<AdminSignUp setAdmin = {setAdmin}/>} />
          <Route exact path='/adminlogin' element={<AdminLogin setAdmin = {setAdmin}/>} />
          <Route exact path='/how_it_works' element={<HowItWorks/>} />
          <Route exact path='/aboutus' element={<AboutUs/>} />
          <Route exact path='/donor_page' element={<DonorPage/>} />
          <Route exact path='/donation_request_page' element={<DonationRequestPage/>} />
          <Route exact path='/ngo_registration' element={<NgoRegistrationForm/>}/>
          <Route exact path='/donation_request_form' element={<DonationRequestForm/>} user={user}/>
          <Route exact path='/donor_dashboard' element={<DonorDashboard/>} />
          <Route exact path='/user_profile' element={<UserProfile/>} />
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
       </div>
        );
}

export default App;
