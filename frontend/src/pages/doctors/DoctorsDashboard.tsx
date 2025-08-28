import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/slices/authReducer";
import style from "./DoctorsDashboard.module.css";
import DoctorSidebar from "./components/DoctorSidebar";
import Overview from "./dashboard/components/Overview";
import ManagePatients from "./manage_patients/ManagePatients";
import Appointments from "./appointments/Appointments";
import Profile from "./profile/Profile";
import Updates from "./profile/Updates";
import Prescriptions from "./prescriptions/Prescriptions";
import Reports from "./reports/Reports";
import Messages from "./messages/Messages";
import Settings from "./settings/Settings";
import { setPage, setInformation } from "../../store/slices/doctorNavSlice";
import type { RootState, AppDispatch } from "../../store/store";

const DoctorsDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const currentPage = useSelector(
    (state: RootState) => state.doctorNav.currentPage
  );
  const userInformation = useSelector(
    (state: RootState) => state.doctorNav.userInformation
  );

  const handleBack = () => {
    if (userInformation === "basic") {
      dispatch(setPage("patients"));
      dispatch(setInformation("basic"));
    } else if (userInformation === "medical") {
      dispatch(setPage("patients"));
      dispatch(setInformation("medical"));
    } else {
      dispatch(setPage("patients"));
    }
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Navigate to home page
    navigate("/");
  };

  return (
    <div style={{ 
      display: "flex", 
      minHeight: "100vh",
      background: "#f5f5f5"
    }}>
      {/* Sidebar */}
      <DoctorSidebar />
      
      {/* Main Content Area */}
      <div style={{ 
        flex: 1, 
        marginLeft: "280px", // Account for sidebar width
        padding: "20px",
        background: "#f5f5f5"
      }}>
        {/* Page Header */}
        {currentPage !== "dashboard" && (
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            gap: "16px"
          }}>
            {currentPage === "updates" && (
              <button
                onClick={handleBack}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="#1771b7"/>
                </svg>
              </button>
            )}
            
            <h1 style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "600",
              color: "#1a1a1a"
            }}>
              {currentPage === "patients"
                ? "Manage Patients"
                : currentPage === "appointments"
                ? "Appointments"
                : currentPage === "updates"
                ? "Updates"
                : currentPage === "profile"
                ? "Edit Profile"
                : currentPage === "prescriptions"
                ? "Prescriptions"
                : currentPage === "reports"
                ? "Reports"
                : currentPage === "messages"
                ? "Messages"
                : currentPage === "settings"
                ? "Settings"
                : "Dashboard"}
            </h1>
          </div>
        )}

        {/* Page Content */}
        <div>
          {currentPage === "dashboard" && <Overview />}
          {currentPage === "patients" && <ManagePatients />}
          {currentPage === "appointments" && <Appointments />}
          {currentPage === "updates" && <Updates />}
          {currentPage === "profile" && <Profile />}
          {currentPage === "prescriptions" && <Prescriptions />}
          {currentPage === "reports" && <Reports />}
          {currentPage === "messages" && <Messages />}
          {currentPage === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default DoctorsDashboard;