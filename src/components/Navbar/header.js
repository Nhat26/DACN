import React from 'react'
import styles from './navbar.module.css'
import images from '../../images/Final_logo.png'
const Navbar = () => {
  return (
    <>
        <nav className={styles.mainNav}> 
          <div className={styles.logo}>
          <img src={images} alt='images' style={{width: "70px", height : "70px" }}/>
          </div>

          <div className={styles.menuLink}>
            <ul>
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#">Chi nhánh</a>
              </li>
              <li>
                <a href="#">Kho</a>
              </li>
              <li>
                <a href="#">Thống kê</a>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar;