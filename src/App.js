import React from 'react';
import Navbar from "./component/NavBar.js";
import Dashboard from './page/Dashboard.js';
import Profile from './page/Profile.js';
import Favorite from './page/Favorite.js';
import LogIn from './page/LogIn.js';
import SignUp from './page/SignUp.js';
import AuthProvider from './helper/Authentication.js';
import ProtectedRoute from './helper/ProtectedRoute.js';
import GeneralConst from "./resource/General.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export const AuthContext = React.createContext(null);

function App() {
  return (
    <div className="App-container">
      <BrowserRouter basename='/5_recipe_explorer_FE'>      
        <AuthProvider> 
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Navbar 
                 activeNavBar={GeneralConst.DASHBOARD}
                />
                <Dashboard />
              </ProtectedRoute> 
            }/>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Navbar 
                 activeNavBar={GeneralConst.DASHBOARD}
                />
                <Dashboard />
              </ProtectedRoute> 
            }/>
            <Route path="/profile" element={
              <ProtectedRoute>
                <Navbar 
                 activeNavBar={GeneralConst.PROFILE}
                />
                <Profile />
              </ProtectedRoute> 
            }/>
            <Route path="/favorite" element={
              <ProtectedRoute>
                <Navbar 
                 activeNavBar={GeneralConst.FAVORITE}
                />
                <Favorite />
              </ProtectedRoute> 
            }/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
