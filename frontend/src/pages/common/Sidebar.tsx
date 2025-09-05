import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../assets/images/logos/logo2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/slices/patientNavSlice";
import type { RootState } from "../../store/store";
import { Icon } from "@iconify/react";
const Sidebar = () => {
  const page = useSelector((state: RootState) => state.patientNav.currentPage);
  const dispatch = useDispatch();

  const handlePage = React.useCallback(
    (e: any) => {
      dispatch(setPage(e));
    },
    [dispatch]
  );
  return (
    <div className={styles.sidebar} id="flexColumn">
      <div className={styles.logo} id="flexCenter">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <button
              onClick={() => handlePage("dashboard")}
              className={page === "dashboard" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="mingcute:grid-2-fill" className={styles.icon}></Icon>
              <h4>Dashboard</h4>
            </button>
          </li>
          <li className={styles.users}>
            <button
              onClick={() => handlePage("users")}
              className={
                page === "users" || page === "updates" ? styles.active : ""
              }
              id="flexAlignCenter"
            >
              <Icon
                icon="iconamoon:profile-fill"
                className={styles.icon}
              ></Icon>
              <h4>My Profile</h4>
            </button>
          </li>
          <li className={styles.drugs}>
            <button
              onClick={() => handlePage("drugs")}
              className={page === "drugs" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="mdi:drugs" className={styles.icon}></Icon>
              <h4>Order Drug</h4>
            </button>
          </li>
          <li className={styles.passbooks}>
            <button
              onClick={() => handlePage("consult")}
              className={page === "consult" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="fa6-solid:user-doctor" className={styles.icon}></Icon>
              <h4>Consult</h4>
            </button>
          </li>
          <li className={styles.passbooks}>
            <button
              onClick={() => handlePage("passbooks")}
              className={page === "passbooks" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="solar:book-bold" className={styles.icon}></Icon>
              <h4>Passbooks</h4>
            </button>
          </li>
          <li className={styles.settings}>
            <button
              onClick={() => handlePage("settings")}
              className={page === "settings" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="fontisto:history" className={styles.icon}></Icon>{" "}
              <h4>Med History</h4>
            </button>
          </li>
          <li className={styles.settings}>
            <button
              onClick={() => handlePage("settings")}
              className={page === "settings" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="mdi:cart" className={styles.icon}></Icon>{" "}
              <h4>My Cart</h4>
            </button>
          </li>

          <li className={styles.settings}>
            <button
              onClick={() => handlePage("ai")}
              className={page === "ai" ? styles.active : ""}
              id="flexAlignCenter"
            >
              <Icon icon="hugeicons:ai-dna" className={styles.icon}></Icon>{" "}
              <h4>AI Consultant</h4>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
