import React from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./chinhnhanh.module.css";
import icon from "../../images/icon.png";
function ChiNhanh() {
  const navigate = useNavigate();
  const data = [
    {
      name: "Chi nhanh 1",
    },
    {
      name: "Chi nhanh 2",
    },
    {
      name: "Chi nhanh 3",
    },
    {
      name: "Chi nhanh 4",
    },
    {
      name: "Chi nhanh 5",
    },
  ];

  return (
    <div className={styles.mainHeader} onClick={() => {navigate(`/TungChiNhanh`)}} >
      {data.map((c) => (
        <div className={styles.left}>
          <img
            src={icon}
            alt="images"
            style={{
              width: "150px",
              height: "150px",
              position: "relative",
              left: "50px",
            }}
          />
          <h4 className={styles.mainContent}>{c.name} </h4>
        </div>
      ))}
    </div>
  );
}

export default ChiNhanh;
