import React from "react";
import styles from './DangNhap.module.css'
import images from '../../images/logo.jpg'
// import images from '../../images/background.jpg'
function DangNhap() {
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
          <input type="submit" value="Đăng Nhập " />
        </div>

        <div className={styles.images}>
          <img src={images} alt='images' style={{width: "150px", height : "150px" }}/>
          <p>KHANH NHAT COMPANY</p>
        </div>

      </form>



    </div>
  );
}

export default DangNhap;
