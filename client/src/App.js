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
import EditUserProfile from './components/Update_User';
import DonorTable from './components/DonorTable';
import NgoRequests from './components/NgoRequests';
import NgoApprovedRequests from './components/NgoApprovedRequests';
import NgoPendingRequests from './components/NgoPendingRequests.';
import NgoRejectedRequests from './components/NgoRejectedRequests';
import NgoReports from './components/NgoReports';
import RequestDetails from './components/RequestDetails';
import NgoDonations from './components/NgoDonations'
import EditNgo from './components/EditNgo';
import AdminApprovedRequests from './components/AdminApprovedRequests';
import AdminDashboard from './components/AdminDashboard';
import AdminTable from './components/AdminTable';
import AdminAllRequests from './components/AdminAllRequests';
import AdminPendingRequests from './components/AdminPendingRequests';
import AdminRejectedRequests from './components/AdminRejectedRequests';
import AdminReports from './components/AdminReports';
import AdminNewCategoryForm from './components/AdminNewCategoryForm'



function App() {

  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)
  const [ngoRequests, setNgoRequests] = useState([]);
  const [donationRequests, setDonationRequests] = useState([])
  const [donations, setDonations] = useState([])
  const [errors, setErrors] = useState([]);
  const [ngo, setNgo] = useState(null) 
  const [categories, setCategories] = useState([])

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

  // Get all donation requests of a logged in NGO
  useEffect(() => {
    fetch("/ngo_requests").then((res) => {
      if (res.ok) {
        res.json().then((data) => setNgoRequests(data));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }, [categories, user]);

  // Get the NGO associated with the user
  useEffect(()=>{
    fetch('/session_ngo')
    .then(res=>{
        if (res.ok){
            res.json().then(data=>setNgo(data))
        }else{
            res.json().then(err=>setErrors(err.errors))
        }
    })
  },[user])

  // Get all the donations 
  useEffect(()=>{
    fetch("/donations")
    .then(res=>{
      if (res.ok){
        res.json().then(data=>setDonations(data))
      }else{
        res.json().then(err=>setErrors(err.errors))
      }
    })
  },[categories, user, donationRequests])
  
  // Get all categories 
  useEffect(()=>{
    fetch("/categories")
    .then(res=>{
      if (res.ok){
        res.json().then(data=>setCategories(data))
      }else{
        res.json().then(err=>setErrors(err.errors))
      }
    })
  },[])
  // Get all the donation requets
  useEffect(() => {
    fetch("/donation_requests").then((res) => {
      if (res.ok) {
        res.json().then((data) => setDonationRequests(data));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }, [ngoRequests, user, categories]);
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

          <Route exact path='/ngo_dashboard' element={<NgoDashbord user={user} ngoRequests={ngoRequests}/>}>
            <Route exact path='ngo_donations' element={<NgoDonations donations={donations} user={user} ngo={ngo} ngoRequests={ngoRequests}/>}/>
            <Route exact path='donar_table' element={<DonorTable/>}/>
            <Route exact path='ngo_requests' element={<NgoRequests ngoRequests={ngoRequests}/>}/>
            <Route exact path='approved' element={<NgoApprovedRequests ngoRequests={ngoRequests}/>} />
            <Route exact path='pending' element={<NgoPendingRequests ngoRequests={ngoRequests}/>}/>
            <Route exact path='rejected' element={<NgoRejectedRequests ngoRequests={ngoRequests}/>}/>
            <Route exact path='ngo_reports' element={<NgoReports />}/>
            <Route exact path='donation_request_form' element={<DonationRequestForm user={user} ngoRequests={ngoRequests} setNgoRequests={setNgoRequests} ngo={ngo} setNgo={setNgo}/>} />
            <Route exact path='edit_ngo' element={<EditNgo ngo={ngo} setNgo={setNgo} user={user}/>}/>
          </Route>

          <Route exact path='/donor_dashboard' element={<DonorDashboard user={user}/>}>
            <Route exact path='user_profile' element={<UserProfile user={user}/>} />
            <Route exact path='edit_user_profile' element={<EditUserProfile user={user} setUser={setUser}/>} />
            <Route exact path='donor_table' element={<DonorTable donations={donations} user={user}/>}/>

          </Route>

          <Route exact path='/admin' element={<AdminDashboard user={admin}/>}>
            <Route exact path='admin_table' element={<AdminTable donations={donations}/>}/>
            <Route exact path='all_requests' element={<AdminAllRequests donationRequests={donationRequests} setDonationRequests={setDonationRequests}/>}/>
            <Route exact path='admin_approved' element={<AdminApprovedRequests donationRequests={donationRequests} setDonationRequests={setDonationRequests}/>} />
            <Route exact path='admin_pending' element={<AdminPendingRequests  donationRequests={donationRequests} setDonationRequests={setDonationRequests}/>}/>
            <Route exact path='admin_rejected' element={<AdminRejectedRequests donationRequests={donationRequests} setDonationRequests={setDonationRequests}/>}/>
            <Route exact path='admin_reports' element={<AdminReports />}/>
            <Route exact path='new_category_form' element={<AdminNewCategoryForm categories={categories} setCategories={setCategories}/>} />
          </Route>

          <Route path='/login' element={<Login onLogin = {setUser}/>} />
          <Route path='/adminsignup' element={<AdminSignUp setAdmin = {setAdmin}/>} />
          <Route exact path='/adminlogin' element={<AdminLogin setAdmin = {setAdmin}/>} />
          <Route exact path='/how_it_works' element={<HowItWorks/>} />
          <Route exact path='/aboutus' element={<AboutUs/>} />
          <Route exact path='/donor_page' element={<DonorPage/>} />
          <Route exact path='/donation_request_details/:id' element={<DonationRequestPage ngoRequests={donationRequests} donations={donations} setDonations={setDonations} donationRequests={donationRequests} setDonationRequests={setDonationRequests}/>} />
          <Route exact path='/ngo_registration' element={<NgoRegistrationForm/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
       </div>
        );
}

export default App;
