import React from 'react';
import { Navbar, Main, Footer } from '../components';
import {Route, Routes} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/*' element={<Main />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Home
