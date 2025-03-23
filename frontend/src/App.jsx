import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GetStartedPage from './pages/GetStartedPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import LogoutPage from './pages/LogoutPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/getstarted' element={<GetStartedPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/summary' element={<SummaryPage/>}/>
        </Routes>
      </Router>
  )
}

export default App