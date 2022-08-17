import React from "react";
import styles from './DangNhap.module.css'
import images from '../../images/Final_logo.png'
// import images from '../../images/background.jpg'
import { useNavigate } from "react-router-dom";
function DangNhap() {
  const navigate = useNavigate();

  return (
    <div className={styles.container} >
      {/* <img src={images} alt='images'/> */}
      <form>
        <div className={styles.formInner}>
          <h2>Đăng Nhập</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Tên đăng nhập</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" />
          </div>
          <input onClick={() => {navigate(`/header`);}} type="submit" value="Đăng Nhập " />
        </div>

        <div className={styles.images}>
          <img src={images} alt='images' style={{width: "150px", height : "150px" }}/>
          <h2>KHANH NHAT COMPANY</h2>
        </div>
      </form>



    </div>
  );
}

export default DangNhap;
