
import React from 'react';
import { data, Route, Routes } from 'react-router';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';


const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/PageLogin' element={<Dashboard />}/>
   </Routes>
   
   </>
  );
}

export default App;
