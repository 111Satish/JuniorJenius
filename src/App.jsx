import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signUp';
import AboutPage from './pages/aboutUs';
import Dashboard from './pages/dashboard';
import Level1 from './pages/games/selectLetter/levels/level1';
import Level2 from './pages/games/selectLetter/levels/level2';
import Level3 from './pages/games/selectLetter/levels/level3';
import Level4 from './pages/games/selectLetter/levels/level4';
import Level5 from './pages/games/selectLetter/levels/level5';
import Level6 from './pages/games/selectLetter/levels/level6';

import SelectLetter from './pages/games/selectLetter';

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
        <Route path='/level1' element ={<Level1/>}/>
        <Route path='/level2' element ={<Level2/>}/>
        <Route path='/level3' element ={<Level3/>}/>
        <Route path='/level4' element ={<Level4/>}/>
        <Route path='/level5' element ={<Level5/>}/>
        <Route path='/level6' element ={<Level6/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
