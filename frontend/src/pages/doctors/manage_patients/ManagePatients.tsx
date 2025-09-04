import React, { useState } from "react";
import styles from "./ManagePatients.module.css";
import avata from "../../../assets/images/profiles/patient-profile.jpg";
import doctorAvatar from "../../../assets/images/profiles/doctorp.jpg";

const ManagePatients: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Sample patients data matching the UI exactly
  const patients = [
    {
      id: 1,
      name: "Mustapha Hussein",
      patientId: "MED208898680",
      diagnosis: "Diabetes, Blood Disorder",
      status: "Pending",
      avatar: "{avata}"
    },
    {
      id: 2,
      name: "Maryam Sani",
      patientId: "MED208898680",
      diagnosis: "Diabetes, Blood Disorder",
      status: "Completed",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Mustapha Hussein",
      patientId: "MED208898680",
      diagnosis: "Diabetes, Blood Disorder",
      lastVisit: "16th oct, 2025",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "Maryam Sani",
      patientId: "MED208898680",
      diagnosis: "Diabetes, Blood Disorder",
      lastVisit: "16th oct, 2025",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 5,
      name: "Mustapha Hussein",
      patientId: "MED208898680",
      diagnosis: "Diabetes, Blood Disorder",
      status: "Completed",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const getFilteredPatients = () => {
    switch (activeFilter) {
      case "pending":
        return patients.filter(p => p.status === "Pending");
      case "completed":
        return patients.filter(p => p.status === "Completed");
      default:
        return patients;
    }
  };

  const filteredPatients = getFilteredPatients();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return styles.statusPending;
      case "Completed":
        return styles.statusCompleted;
      default:
        return "";
    }
  };

  return (
    <div className={styles.patientsContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton}>
            <iconify-icon icon="material-symbols:arrow-back-rounded" style={{ fontSize: "35px" }}></iconify-icon>
          </button>
          <h1 className={styles.pageTitle}>Patients</h1>
        </div>
        <div className={styles.headerRight}>
           <img 
            src={doctorAvatar}
            alt="Profile" 
            className={styles.profilePicture}
          />
          <div className={styles.notificationIcon}>
            <iconify-icon icon="mdi:bell-notification" style={{ color: "var(--blue-color)", fontSize: "26px" }}></iconify-icon>
          </div>
         
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className={styles.searchFilterSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <iconify-icon icon="tabler:search" className={styles.searchIcon}></iconify-icon>
            <input
              type="text"
              placeholder="Search for patient"
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <iconify-icon icon="mdi:filter" className={styles.filterIcon}></iconify-icon>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          <button
            className={`${styles.filterTab} ${activeFilter === "all" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterTab} ${activeFilter === "pending" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("pending")}
          >
            Pending
          </button>
          <button
            className={`${styles.filterTab} ${activeFilter === "completed" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Patients List */}
      <div className={styles.patientsList}>
        {filteredPatients.map((patient) => (
          <div key={patient.id} className={styles.patientCard}>
            <div className={styles.patientCardContent}>
              <img 
                src={avata} 
                alt={patient.name}
                className={styles.patientAvatar}
              />
              <div className={styles.patientInfo}>
                <h3 className={styles.patientName}>{patient.name}</h3>
                <p className={styles.patientId}>{patient.patientId}</p>
                <p className={styles.diagnosis}>{patient.diagnosis}</p>
              </div>
              <div className={styles.patientStatus}>
                {patient.status && (
                  <span className={`${styles.status} ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                )}
                {patient.lastVisit && (
                  <span className={styles.lastVisit}>{patient.lastVisit}</span>
                )}
                <button className={styles.viewProfileButton}>
                  View profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagePatients;
