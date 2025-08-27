import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/slices/authReducer";
import style from "./Dashboard.module.css";
import Sidebar from "../common/Sidebar";
import Overview from "./dashboard/components/Overview";
import OrderMedicine from "./order_drug/OrderMedicine";
import ConsultBooking from "./consult/ConsultBooking";
import Profile from "./profile/Profile";
import Updates from "./profile/Updates";
import { setPage, setInformation } from "../../store/slices/patientNavSlice";
import AIChat from "./ai/AIChat";
import type { RootState, AppDispatch } from "../../store/store"; // adjust path if needed

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isLogged } = useSelector((state: RootState) => state.auth);
  const currentPage = useSelector(
    (state: RootState) => state.patientNav.currentPage
  );
  const userInformation = useSelector(
    (state: RootState) => state.patientNav.userInformation
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !isLogged) {
      navigate("/auth");
      return;
    }

    dispatch(getProfile())
      .unwrap()
      .catch((err: any) => {
        if (err?.status !== 304) {
          console.error("Profile fetch error:", err);
        }
      });
  }, [dispatch, isLogged, navigate]);

  const handleBack = () => {
    if (userInformation === "basic") {
      dispatch(setPage("users"));
      dispatch(setInformation("basic"));
    } else if (userInformation === "medical") {
      dispatch(setPage("users"));
      dispatch(setInformation("medical"));
    } else {
      dispatch(setPage("users"));
    }
  };

  return (
    <div className={style.MainDashboard} id="flexColumnCenter">
      <div className={style.nav} id="flexBetween">
        {currentPage === "ai" ? (
          ""
        ) : (
          <>
            <h1 className={style.heading} id="flexCenter">
              {currentPage === "updates" && (
                <button
                  style={{ marginRight: "11px", marginTop: "7px" }}
                  onClick={handleBack}
                >
                  <iconify-icon
                    icon="uil:arrow-left"
                    style={{ color: "#1771b7", fontSize: "60px" }}
                  />
                </button>
              )}

              {currentPage === "dashboard"
                ? ""
                : currentPage === "users"
                ? "My profile"
                : currentPage === "drugs"
                ? "Order Medicine"
                : currentPage === "consult"
                ? "Consult"
                : "Edit Profile"}
            </h1>

            <div className={style.notification}>
              <iconify-icon
                icon="mdi:bell"
                className={style.icon}
                id="text40"
              ></iconify-icon>
            </div>
          </>
        )}
      </div>

      <Sidebar />

      <>
        {currentPage === "dashboard" && <Overview />}
        {currentPage === "users" && <Profile />}
        {currentPage === "updates" && <Updates />}
        {currentPage === "drugs" && <OrderMedicine />}
        {currentPage === "consult" && <ConsultBooking />}
        {currentPage === "ai" && (
          <div className={style.aiContainer}>
            <AIChat />
          </div>
        )}
      </>
    </div>
  );
};

export default Dashboard;
