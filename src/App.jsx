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
import Hindi from './pages/learning/hindi';
import Bangla from './pages/learning/bangla';
import Tamil from './pages/learning/tamil';
import Telgu from './pages/learning/telgu';
import Gujrati from './pages/learning/gujrati';

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
        <Route path= '/learning/hindi' element={<Hindi/>}/>
        <Route path= '/learning/bangla' element={<Bangla/>}/>
        <Route path= '/learning/tamil' element={<Tamil/>}/>
        <Route path= '/learning/telgu' element={<Telgu/>}/>
        <Route path= '/learning/gujrati' element={<Gujrati/>}/>
        <Route path= '/learning/abc' element={<ABC/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
