import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DangNhap from './features/login/DangNhap';
import './index.css';

function App() {
  return (
   <Router>
      <Routes>
          <Route path='/DangNhap' element={
            <DangNhap></DangNhap>
          }>
          </Route>
      </Routes>
   </Router>
  );
}

export default App;
