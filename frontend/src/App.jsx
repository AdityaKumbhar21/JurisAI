import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GetStartedPage from './pages/GetStartedPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import LogoutPage from './pages/LogoutPage';
import {useAuthStore} from "./store/useAuthStore";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const {checkAuth, authUser, isCheckingAuth} = useAuthStore();

  useEffect(() => {
      checkAuth();
  }, [checkAuth])

  console.log(authUser);
  
  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={authUser ? <HomePage /> : <LandingPage/>}/>
          <Route path='/getstarted' element={authUser ? <HomePage /> : <GetStartedPage/>}/>
          <Route path='/signup' element={authUser ? <HomePage /> :<SignupPage/>}/>
          <Route path='/login' element={authUser ? <HomePage /> :<LoginPage/>}/>
          <Route path='/home' element={!authUser ? <LandingPage/> : <HomePage/>}/>
          <Route path='/summary/:id' element={!authUser ? <LandingPage/> :<SummaryPage/>}/>
        </Routes>
      </Router>


      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '1.2rem',
            padding: '16px 24px',
            borderRadius: '12px',
          },
        }}
      />
      </>
  )
}

export default App