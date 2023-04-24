import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import {  Login, Register } from './components';

const App = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/*' element={<Home />}/>
    </Routes>
  )
}

export default App
