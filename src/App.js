import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DangNhap from './features/login/DangNhap';
// import Navbar from './components/Navbar/header'
import ChiNhanh from './features/ChiNhanh/ChiNhanh'
import Kho from './features/Kho/Kho'
import ThongKe from './features/ThongKe/ThongKe'
import TaiKhoan from './features/TaiKhoan/TaiKhoan';
import Home from './layout/home/homeindex';
// import Chatclock from './components/chatandclock/chatclock';
import TungChiNhanh from './features/ChiNhanh/TungChiNhanh'
function App() {
  return (
    
    <Router>
      
       <Routes>
        
          <Route path='/DangNhap' element={
            <DangNhap></DangNhap>
          }>
          </Route>
          <Route path='/ChiNhanh'   element={
            <Home>
            <ChiNhanh></ChiNhanh>
          </Home>
          }>
          </Route>
          <Route path='/Kho' element={
            <Home>
              <Kho></Kho>
            </Home>
          }>
          </Route>
          <Route path='/ThongKe' element={
            <Home>
              <ThongKe></ThongKe>
            </Home>
          }>
          </Route>
          <Route path='/NhanVien' element={
            <Home>
              <TaiKhoan></TaiKhoan>
            </Home>
          }>
        
          </Route>
          <Route path='/TungChiNhanh' element={
            <TungChiNhanh/>
          }>
          </Route>
             
      </Routes> 
      </Router>

  );
}

export default App;
