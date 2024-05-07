import React from 'react';
import Layout from './component/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signUp';
import AboutPage from './pages/aboutUs';
//import Dashboard from './pages/dashboard';
import SelectLetter from './pages/games/selectLetter/selectLetter';
import MatchLetters from './pages/games/matchLetter/matchLetters';
import LearningDashboard from './pages/learning';
import Games from './pages/games';
import Profile from './pages/profile';
import ABC from './pages/learning/abc';
import Hindi from './pages/learning/hindi';
import Bangla from './pages/learning/bangla';
import Tamil from './pages/learning/tamil';
import Telugu from './pages/learning/telugu';
import Gujrati from './pages/learning/gujrati';
import EnglishPhonics from './pages/learning/englishPhonics.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        // {
        //   path: "/dashboard",
        //   element: <Dashboard />,
        // },
        {
          path: "/selectLetter",
          element: <SelectLetter />,
        },
        {
          path: "/matchLetters",
          element: <MatchLetters />,
        },
        {
          path: "/games",
          element: <Games />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/learning",
          element: <LearningDashboard/>,
        },
        {
          path: "/learning/hindi",
          element: <Hindi />,
        },
        {
          path: "/learning/bangla",
          element: <Bangla />,
        },
        {
          path: "/learning/tamil",
          element: <Tamil />,
        },
        {
          path: "/learning/telugu",
          element: <Telugu />,
        },
        {
          path: "/learning/gujrati",
          element: <Gujrati />,
        },
        {
          path: "/learning/abc",
          element: <ABC />,
        },
        {
          path: "/learning/englishphonics",
          element:<EnglishPhonics/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;


