import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/log-in' element={<Login />} />
      <Route path='/Profile' element={<Profile />} />z
    </Routes>
  
  </BrowserRouter>
}

export default App;




