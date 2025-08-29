import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store/slices/doctorNavSlice";
import logo from ".././../../assets/images/logos/logo2.png";
import styles from "./DoctorSidebar.module.css";

const DoctorSidebar: React.FC = () => {
  const currentPage = useSelector((state: any) => state.doctorNav.currentPage);
  const dispatch = useDispatch();

  const handlePage = (page: string) => {
    dispatch(setPage(page));
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Overview",
      icon: (
          <iconify-icon icon="material-symbols:dashboard-rounded"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
      id: "profile",
      label: "My Profile",
      icon: (
        <iconify-icon icon="ph:chalkboard-teacher-fill"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: (
       <iconify-icon icon="mdi:drugs"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
      id: "prescriptions",
      label: "Prescriptions",
      icon: (
         <iconify-icon icon="material-symbols:prescriptions"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
      id: "patients",
      label: "Patients",
      icon: (
        <iconify-icon icon="mdi:patient"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
      id: "reports",
      label: "Reports",
      icon: (
      <iconify-icon icon="icon-park-solid:table-report"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
      id: "messages",
      label: "Messages",
      icon: (
              <iconify-icon icon="flowbite:messages-solid"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {
       id: "settings",
      label: "Settings",
      icon: (
          <iconify-icon icon="material-symbols:settings-rounded"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    },
    {

      id: "logout",
      label: "Logout",
      icon: (
          <iconify-icon icon="majesticons:logout"
           className={styles.menuIcon}>
          </iconify-icon>
      )
    }
    
  ];

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
          
          <div>
            <img
              src={logo} 
              alt="MedBuddy Logo" 
              className={styles.logoImage}
            />
          </div>
      </div>

{/* Navigation Menu */}
<nav className={styles.navigationMenu}>
  <ul className={styles.menuList}>
    {menuItems.map((item) => (
      <li key={item.id} className={styles.menuItem}>
        <button
          onClick={() => handlePage(item.id)}
          className={`${styles.menuButton} ${currentPage === item.id ? styles.active : ''}`}
        >
          <div className={styles.iconContainer}>
            {item.icon}
          </div>
          <h5>{item.label}</h5>
        </button>
      </li>
    ))}
  </ul>
</nav>


      {/* Logout Button */}
      <div className={styles.logoutSection}>
        <button
          onClick={() => {
            console.log("Logout clicked");
          }}
          className={styles.logoutButton}
        >
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/> */}
          {/* Logout */}
        </button>
      </div>
    </div>
  );
};

export default DoctorSidebar;
