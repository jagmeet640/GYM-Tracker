import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Header from './components/Header';
import Signup from './pages/Signup';
import ExcersiseLogTest from './pages/ExcersiseLogTest';
import AddRepsTest from './pages/AddRepsTest';
import RepExcCombTest from './pages/RepExcCombTest';

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path= '/repsTest' element={<AddRepsTest/>} />
      <Route path='/ExcersiseTest' element={<ExcersiseLogTest/>}/>
      <Route path='/combTest' element={<RepExcCombTest/>} />
    </Routes>
  
  </BrowserRouter>
}

export default App;




