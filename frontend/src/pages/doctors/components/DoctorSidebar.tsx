import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store/slices/doctorNavSlice";
import logo from ".././../../assets/images/logos/logo2.png";
import styles from "./DoctorSidebar.module.css";
import { Icon } from "@iconify/react";

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
        <Icon
          icon="material-symbols:dashboard-rounded"
          className={styles.menuIcon}
        ></Icon>
      ),
    },
    {
      id: "profile",
      label: "My Profile",
      icon: (
        <Icon
          icon="ph:chalkboard-teacher-fill"
          className={styles.menuIcon}
        ></Icon>
      ),
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: <Icon icon="mdi:drugs" className={styles.menuIcon}></Icon>,
    },
    {
      id: "prescriptions",
      label: "Prescriptions",
      icon: (
        <Icon
          icon="material-symbols:prescriptions"
          className={styles.menuIcon}
        ></Icon>
      ),
    },
    {
      id: "patients",
      label: "Patients",
      icon: <Icon icon="mdi:patient" className={styles.menuIcon}></Icon>,
    },
    {
      id: "reports",
      label: "Reports",
      icon: (
        <Icon
          icon="icon-park-solid:table-report"
          className={styles.menuIcon}
        ></Icon>
      ),
    },
    {
      id: "messages",
      label: "Messages",
      icon: (
        <Icon icon="flowbite:messages-solid" className={styles.menuIcon}></Icon>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <Icon
          icon="material-symbols:settings-rounded"
          className={styles.menuIcon}
        ></Icon>
      ),
    },
    {
      id: "logout",
      label: "Logout",
      icon: <Icon icon="majesticons:logout" className={styles.menuIcon}></Icon>,
    },
  ];

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div>
          <img src={logo} alt="MedBuddy Logo" className={styles.logoImage} />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={styles.navigationMenu}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menuItem}>
              <button
                onClick={() => handlePage(item.id)}
                className={`${styles.menuButton} ${
                  currentPage === item.id ? styles.active : ""
                }`}
              >
                <div className={styles.iconContainer}>{item.icon}</div>
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
