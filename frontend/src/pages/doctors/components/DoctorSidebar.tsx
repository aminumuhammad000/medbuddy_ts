import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store/slices/doctorNavSlice";
import logo from ".././../../assets/images/logos/logo2.png";

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
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
      id: "profile",
      label: "My Profile",
      icon: (
        <iconify-icon icon="ph:chalkboard-teacher-fill"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: (
       <iconify-icon icon="mdi:drugs"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
      id: "prescriptions",
      label: "Prescriptions",
      icon: (
         <iconify-icon icon="material-symbols:prescriptions"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
      id: "patients",
      label: "Patients",
      icon: (
        <iconify-icon icon="mdi:patient"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
      id: "reports",
      label: "Reports",
      icon: (
      <iconify-icon icon="icon-park-solid:table-report"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
      id: "messages",
      label: "Messages",
      icon: (
              <iconify-icon icon="flowbite:messages-solid"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {
       id: "settings",
      label: "Settings",
      icon: (
          <iconify-icon icon="material-symbols:settings-rounded"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    },
    {

      id: "logout",
      label: "Logout",
      icon: (
          <iconify-icon icon="majesticons:logout"
           style={{ color: "var(--white-color)" }}>
          </iconify-icon>
      )
    }
    
  ];

  return (
    <div style={{
      position: "fixed",
      left: 0,
      top: 0,
      width: "200px",
      height: "100vh",
      background: "var(--blue-color)",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      padding: "23px 0 10px 0px",
      borderTopRightRadius: "50px",
      borderBottomRightRadius: "50px",
    }}>
      {/* Logo Section */}
      <div style={{
        padding: "0 24px 20px 30px",
      }}>
          
          <div>
            <img
              src={logo} 
              alt="MedBuddy Logo" 
              style={{ width: "140px", height: "29px", top:"12px", left:"30px" }} 
            />
          </div>
      </div>

{/* Navigation Menu */}
<nav style={{
  flex: 1,
  padding: "24px 0"
}}>
  <ul style={{
    listStyle: "none",
    margin: 0,
    padding: 0
  }}>
    {menuItems.map((item) => (
      <li key={item.id} style={{
        margin: "0 16px 8px 16px",
      }}>
        <button
          onClick={() => handlePage(item.id)}
          style={{
            width: "100%",
            padding: "12px 16px",
            background: currentPage === item.id
              ? "linear-gradient(180deg, #668cc1ff 0%, transparent 100%)" // active gradient
              : "transparent",
            border: currentPage === item.id
              ? ""
              : "none",
            borderRadius: "15px",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            fontSize: "14px",
            fontWeight: currentPage === item.id ? "600" : "500",
            boxShadow: currentPage === item.id
              ? "0px 4px 8px rgba(0, 0, 0, 0.2)" // shadow for active
              : "none",
            backdropFilter: currentPage !== item.id ? "blur(6px)" : "none",
            WebkitBackdropFilter: currentPage !== item.id ? "blur(6px)" : "none",
          }}
          onMouseEnter={(e) => {
            if (currentPage !== item.id) {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== item.id) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          <div style={{
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {item.icon}
          </div>
          {item.label}
        </button>
      </li>
    ))}
  </ul>
</nav>


      {/* Logout Button */}
      <div style={{
        padding: "24px",
      }}>
        <button
          onClick={() => {
            console.log("Logout clicked");
          }}
          style={{
            width: "100%",
            padding: "12px 16px",
            background: "transparent",
            border: "none",
            borderRadius: "8px",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontSize: "14px",
            fontWeight: "500"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/>
          </svg> */}
          {/* Logout */}
        </button>
      </div>
    </div>
  );
};

export default DoctorSidebar;
