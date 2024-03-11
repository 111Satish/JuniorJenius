import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signUp';
import AboutPage from './pages/aboutUs';
import Dashboard from './pages/dashboard';
import SelectLetter from './pages/games/selectLetter/selectLetter';
import MatchLetters from './pages/games/matchLetter/matchLetters';
import LearningDashboard from './pages/learning';
import Games from './pages/games';
import Profile from './pages/profile';
import ABC from './pages/learning/abc';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/selectLetter' element ={<SelectLetter/>}/>
        <Route path='/matchLetters' element ={<MatchLetters/>}/>
        <Route path='/Learning' element= {<LearningDashboard/>}/>
        <Route path= '/Games' element= {<Games/>}/>
        <Route path= '/profile' element= {<Profile/>}/>
        <Route path= '/learnabc' element={<ABC/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
