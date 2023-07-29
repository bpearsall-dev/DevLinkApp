import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import Header from './Header';
import Hero from './Hero';
import FeaturedFreelancers from './FeaturedFreelancers';
import FeaturedCustomers from './FeaturedCustomers';
import Login from './Login';
import CreateAccount from './CreateAccount';
import SignUp from './SignUp';
import Footer from './Footer';
import JobPage from './Jobs';
import { Navigate, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDJAbwJa4IHTfSKTCXnkrlC8TMHhajtnMM",
  authDomain: "devlink-8eb2e.firebaseapp.com",
  projectId: "devlink-8eb2e",
  storageBucket: "devlink-8eb2e.appspot.com",
  messagingSenderId: "1055542916079",
  appId: "1:1055542916079:web:565dbb7938081c24f13c1a",
  measurementId: "G-7CYWJW7LFR"
};

initializeApp(firebaseConfig);

function ProtectedRoute({ element }) {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  return (
    currentUser 
      ? element 
      : <Navigate to="/login" state={{ from: location }} />
  );
}

function UserGreeting() {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <h1 style={{ position: 'absolute', right: 0, marginTop: '01px',fontSize: '1rem' }}>
      Welcome, {currentUser ? currentUser.email : "Guest"}
    </h1>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <UserGreeting />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-dev" element={<ProtectedRoute element={<FeaturedFreelancers />} />} />
          <Route path="/find-jobs" element={<ProtectedRoute element={<JobPage />} />} />
          <Route path="/jobs" element={<ProtectedRoute element={<JobPage />} />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

function Home() {
  return (
    <>
      <UserGreeting /> /
      <Hero />
      <FeaturedFreelancers />
      <FeaturedCustomers />
      <SignUp />
    </>
  );
}

export default App;
