import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";

function App() {
  const [user, setUser] = useState(null);

  // Get the user who is is session
  useEffect(() => {
    fetch("/user_me").then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
      }
    });
  }, []);

  return (
    <>
      {/* Navigation*/}
      <Navigation user={user} setUser={setUser} />

      {/* navigation routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
      </Routes>
      <HowItWorks />
      <Footer/>
    </>
  );
}

export default App;
