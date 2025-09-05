import React, { useState } from "react";
import styles from "./Profile.module.css";
import doctorImage from "../../../assets/images/profiles/doctor.jpg";
import EditProfile from "./EditProfile";
import { Icon } from "@iconify/react";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("availability");
  const [isEditing, setIsEditing] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBackToProfile = () => {
    setIsEditing(false);
  };

  // If editing, show the EditProfile component
  if (isEditing) {
    return <EditProfile onBack={handleBackToProfile} />;
  }

  return (
    <div className={styles.profileContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}> My profile</h1>
        <div className={styles.notificationIcon}>
          <Icon
            icon="mdi:bell-notification"
            style={{ color: "var(--blue-color)", fontSize: "25px" }}
          ></Icon>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabNavigation} id="flexCenter">
        <button
          className={`${styles.tabButton} ${
            activeTab === "basic" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange("basic")}
        >
          Basic Information
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "professional" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange("professional")}
        >
          Professional Information
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "availability" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange("availability")}
        >
          Availability Settings
        </button>
      </div>

      {/* Doctor Summary Card */}
      <div className={styles.doctorSummaryCard}>
        <div className={styles.doctorInfo}>
          <img
            src={doctorImage}
            alt="Dr. Musa Abdullahi"
            className={styles.doctorImage}
          />
          <div className={styles.doctorDetails}>
            <h2 className={styles.doctorName}>
              Musa Abdullahi <span className={styles.status}>MBBS, FWACS</span>
            </h2>
            <p className={styles.doctorSpecialty}>Neurologist</p>
          </div>
        </div>
        <button className={styles.editButton} onClick={handleEditClick}>
          Edit
          <Icon icon="iconamoon:edit-light" style={{ fontSize: "18px" }}></Icon>
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === "basic" && (
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Personal Information</h3>
              <button className={styles.editButton} onClick={handleEditClick}>
                Edit
                <Icon
                  icon="iconamoon:edit-light"
                  style={{ fontSize: "18px" }}
                ></Icon>
              </button>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoColumn}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>First Name</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>Musa</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Email Address</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>dr.musa@medbuddy.com</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Date Of Birth</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>6/10/2025</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Address</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>
                    No.12, Tarauni, Kano, Nigeria
                  </span>
                </div>
              </div>
              <div className={styles.infoColumn}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Last Name</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>Abdullahi</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Phone Number</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>+234 812 345 6789</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Gender</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>Male</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>License ID</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>1234567890</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "professional" && (
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Professional Information</h3>
              <button className={styles.editButton} onClick={handleEditClick}>
                <Icon
                  icon="iconamoon:edit-light"
                  style={{ fontSize: "18px" }}
                ></Icon>
                Edit
              </button>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoColumn}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Specialty</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>Neurologist</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>License Number</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>MDCN/123456</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Certifications</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>MBBS, FWACS</span>
                </div>
              </div>
              <div className={styles.infoColumn}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Years of Experience</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>12 years</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>License Expiry</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>December 2026</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Languages</span>
                  <br />
                  <br />
                  <span className={styles.infoValue}>English, Hausa</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "availability" && (
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Availability settings</h3>
              <button className={styles.editButton} onClick={handleEditClick}>
                <Icon
                  icon="iconamoon:edit-light"
                  style={{ fontSize: "18px" }}
                ></Icon>
                Edit
              </button>
            </div>
            <div className={styles.availabilityGrid}>
              <div className={styles.availabilityRow}>
                <span className={styles.availabilityLabel}>
                  Preferred Consultation Hours
                </span>
                <br />
                <br />
                <span className={styles.availabilityValue}>
                  Mon - Fri, 9 AM - 5 PM
                </span>
              </div>
              <div className={styles.availabilityRow}>
                <span className={styles.availabilityLabel}>
                  Consultation Modes
                </span>
                <br />
                <br />
                <span className={styles.availabilityValue}>
                  Virtual, Physical
                </span>
              </div>
              <div className={styles.availabilityRow}>
                <span className={styles.availabilityLabel}>
                  Max Consultation per Day
                </span>
                <br />
                <br />
                <span className={styles.availabilityValue}>5</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
