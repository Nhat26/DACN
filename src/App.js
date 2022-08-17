import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DangNhap from './features/login/DangNhap';
import Navbar from './components/Navbar/header'
function App() {
  return (
   <Router>
      <Routes>
          <Route path='/DangNhap' element={
            <DangNhap></DangNhap>
          }>
          </Route>
          <Route path='/header' element={
            <Navbar/>
          }>
          </Route>
      </Routes>
   </Router>
  );
}

export default App;
