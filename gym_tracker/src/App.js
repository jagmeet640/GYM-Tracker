import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/Log-in' element={<Login />} />
    </Routes>
  </BrowserRouter>
}

export default App;




