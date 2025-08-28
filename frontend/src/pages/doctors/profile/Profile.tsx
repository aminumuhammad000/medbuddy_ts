import React, { useState } from "react";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("availability");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingProfessional, setIsEditingProfessional] = useState(false);
  const [isEditingAvailability, setIsEditingAvailability] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: "Musa",
    lastName: "Abdullahi",
    email: "dr.musa@medbuddy.com",
    phone: "+234 812 345 6789",
    dateOfBirth: "6/10/1985",
    gender: "Male",
    address: "No.12, Tarauni, Kano, Nigeria",
    licenseId: "MDCN/123456",
    qualifications: "MBBS, FWACS",
    specialization: "Neurologist",
    yearsOfExperience: "12 years",
    licenseExpiry: "December 2026",
    languages: "English, Hausa",
    preferredHours: "Mon - Fri, 9 AM - 5 PM",
    consultationModes: "Virtual, Physical",
    maxConsultationsPerDay: "5"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    console.log("Profile updated:", profileData);
  };

  const handleSavePersonal = () => {
    setIsEditingPersonal(false);
    console.log("Personal info updated:", profileData);
  };

  const handleSaveProfessional = () => {
    setIsEditingProfessional(false);
    console.log("Professional info updated:", profileData);
  };

  const handleSaveAvailability = () => {
    setIsEditingAvailability(false);
    console.log("Availability settings updated:", profileData);
  };

  return (
    <div style={{ 
      padding: "32px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      background: "#f8fafc"
    }}>
      {/* Page Title */}
      <h1 style={{ 
        fontSize: "32px", 
        fontWeight: "700", 
        color: "#1e293b", 
        margin: "0 0 32px 0" 
      }}>
        My profile
      </h1>

      {/* Tabs */}
      <div style={{ 
        display: "flex", 
        gap: "0", 
        marginBottom: "32px",
        borderBottom: "1px solid #e2e8f0"
      }}>
        <button
          onClick={() => setActiveTab("basic")}
          style={{
            padding: "16px 24px",
            background: "transparent",
            border: "none",
            borderBottom: activeTab === "basic" ? "3px solid #3b82f6" : "3px solid transparent",
            color: activeTab === "basic" ? "#3b82f6" : "#64748b",
            fontSize: "16px",
            fontWeight: activeTab === "basic" ? "600" : "500",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          Basic Information
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          style={{
            padding: "16px 24px",
            background: "transparent",
            border: "none",
            borderBottom: activeTab === "professional" ? "3px solid #3b82f6" : "3px solid transparent",
            color: activeTab === "professional" ? "#3b82f6" : "#64748b",
            fontSize: "16px",
            fontWeight: activeTab === "professional" ? "600" : "500",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          Professional Information
        </button>
        <button
          onClick={() => setActiveTab("availability")}
          style={{
            padding: "16px 24px",
            background: "transparent",
            border: "none",
            borderBottom: activeTab === "availability" ? "3px solid #3b82f6" : "3px solid transparent",
            color: activeTab === "availability" ? "#3b82f6" : "#64748b",
            fontSize: "16px",
            fontWeight: activeTab === "availability" ? "600" : "500",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          Availability Settings
        </button>
      </div>

      {/* Basic Information Tab Content */}
      {activeTab === "basic" && (
        <div>
          {/* Profile Summary Section */}
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "16px", 
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
              <h2 style={{ 
                fontSize: "20px", 
                fontWeight: "600", 
                color: "#1e293b", 
                margin: 0 
              }}>
                Profile Summary
              </h2>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                </svg>
                Edit
              </button>
            </div>

            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "24px" 
            }}>
              {/* Profile Picture */}
              <div style={{ position: "relative" }}>
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "50%", 
                  background: "#e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "#64748b",
                  fontWeight: "bold",
                  border: "4px solid #f8fafc"
                }}>
                  MA
                </div>
                {/* Camera Icon */}
                <div style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  width: "32px",
                  height: "32px",
                  background: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid white",
                  cursor: "pointer"
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM20 5H17L15.8 3H8.2L7 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5Z" fill="white"/>
                  </svg>
                </div>
              </div>

              {/* Profile Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b", 
                  margin: "0 0 8px 0" 
                }}>
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b", 
                  margin: "0 0 4px 0",
                  fontWeight: "500"
                }}>
                  {profileData.qualifications}
                </p>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b", 
                  margin: 0,
                  fontWeight: "500"
                }}>
                  {profileData.specialization}
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information Section */}
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
              <h2 style={{ 
                fontSize: "20px", 
                fontWeight: "600", 
                color: "#1e293b", 
                margin: 0 
              }}>
                Personal Information
              </h2>
              <button
                onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                </svg>
                Edit
              </button>
            </div>

            {/* Personal Information Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(2, 1fr)", 
              gap: "24px" 
            }}>
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Date Of Birth
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  License ID
                </label>
                <input
                  type="text"
                  name="licenseId"
                  value={profileData.licenseId}
                  onChange={handleInputChange}
                  disabled={!isEditingPersonal}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingPersonal ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingPersonal ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>
            </div>

            {/* Save/Cancel Buttons for Personal Info */}
            {isEditingPersonal && (
              <div style={{ 
                display: "flex", 
                gap: "12px", 
                marginTop: "24px",
                justifyContent: "flex-end"
              }}>
                <button
                  onClick={() => setIsEditingPersonal(false)}
                  style={{
                    padding: "10px 20px",
                    background: "transparent",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    color: "#64748b",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePersonal}
                  style={{
                    padding: "10px 20px",
                    background: "#3b82f6",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3b82f6";
                  }}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Professional Information Tab Content */}
      {activeTab === "professional" && (
        <div>
          {/* Profile Summary Section */}
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "16px", 
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
              <h2 style={{ 
                fontSize: "20px", 
                fontWeight: "600", 
                color: "#1e293b", 
                margin: 0 
              }}>
                Profile Summary
              </h2>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                </svg>
                Edit
              </button>
            </div>

            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "24px" 
            }}>
              {/* Profile Picture */}
              <div style={{ position: "relative" }}>
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "50%", 
                  background: "#e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "#64748b",
                  fontWeight: "bold",
                  border: "4px solid #f8fafc"
                }}>
                  MA
                </div>
                {/* Camera Icon */}
                <div style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  width: "32px",
                  height: "32px",
                  background: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid white",
                  cursor: "pointer"
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM20 5H17L15.8 3H8.2L7 5H4C2.9 5 2 5.9 2 5V19C2 6.1 2.9 7 4 7H20C21.1 7 22 6.1 22 5V19C22 5.9 21.1 5 20 5Z" fill="white"/>
                  </svg>
                </div>
              </div>

              {/* Profile Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b", 
                  margin: "0 0 8px 0" 
                }}>
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b", 
                  margin: "0 0 4px 0",
                  fontWeight: "500"
                }}>
                  {profileData.qualifications}
                </p>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b", 
                  margin: 0,
                  fontWeight: "500"
                }}>
                  {profileData.specialization}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
              <h2 style={{ 
                fontSize: "20px", 
                fontWeight: "600", 
                color: "#1e293b", 
                margin: 0 
              }}>
                Professional Information
              </h2>
              <button
                onClick={() => setIsEditingProfessional(!isEditingProfessional)}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                </svg>
                Edit
              </button>
            </div>

            {/* Professional Information Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(2, 1fr)", 
              gap: "24px" 
            }}>
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Specialty
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={profileData.specialization}
                  onChange={handleInputChange}
                  disabled={!isEditingProfessional}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingProfessional ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingProfessional ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="yearsOfExperience"
                  value={profileData.yearsOfExperience}
                  onChange={handleInputChange}
                  disabled={!isEditingProfessional}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingProfessional ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingProfessional ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  License Number
                </label>
                <input
                  type="text"
                  name="licenseId"
                  value={profileData.licenseId}
                  onChange={handleInputChange}
                  disabled={!isEditingProfessional}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingProfessional ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingProfessional ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  License Expiry
                </label>
                <input
                  type="text"
                  name="licenseExpiry"
                  value={profileData.licenseExpiry}
                  onChange={handleInputChange}
                  disabled={!isEditingProfessional}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingProfessional ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingProfessional ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Certifications
                </label>
                <input
                  type="text"
                  name="qualifications"
                  value={profileData.qualifications}
                  onChange={handleInputChange}
                  disabled={!isEditingProfessional}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingProfessional ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingProfessional ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Languages
                </label>
                <input
                  type="text"
                  name="languages"
                  value={profileData.languages}
                  onChange={handleInputChange}
                  disabled={!isEditingProfessional}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingProfessional ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingProfessional ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>
            </div>

            {/* Save/Cancel Buttons for Professional Info */}
            {isEditingProfessional && (
              <div style={{ 
                display: "flex", 
                gap: "12px", 
                marginTop: "24px",
                justifyContent: "flex-end"
              }}>
                <button
                  onClick={() => setIsEditingProfessional(false)}
                  style={{
                    padding: "10px 20px",
                    background: "transparent",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    color: "#64748b",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfessional}
                  style={{
                    padding: "10px 20px",
                    background: "#3b82f6",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3b82f6";
                  }}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Availability Settings Tab Content */}
      {activeTab === "availability" && (
        <div>
          {/* Profile Summary Section */}
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "16px", 
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
              <h2 style={{ 
                fontSize: "20px", 
                fontWeight: "600", 
                color: "#1e293b", 
                margin: 0 
              }}>
                Profile Summary
              </h2>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                </svg>
                Edit
              </button>
            </div>

            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "24px" 
            }}>
              {/* Profile Picture */}
              <div style={{ position: "relative" }}>
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "50%", 
                  background: "#e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "#64748b",
                  fontWeight: "bold",
                  border: "4px solid #f8fafc"
                }}>
                  MA
                </div>
                {/* Camera Icon */}
                <div style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  width: "32px",
                  height: "32px",
                  background: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid white",
                  cursor: "pointer"
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM20 5H17L15.8 3H8.2L7 5H4C2.9 5 2 5.9 2 5V19C2 6.1 2.9 7 4 7H20C21.1 7 22 6.1 22 5V19C22 5.9 21.1 5 20 5Z" fill="white"/>
                  </svg>
                </div>
              </div>

              {/* Profile Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b", 
                  margin: "0 0 8px 0" 
                }}>
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b", 
                  margin: "0 0 4px 0",
                  fontWeight: "500"
                }}>
                  {profileData.qualifications}
                </p>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b", 
                  margin: 0,
                  fontWeight: "500"
                }}>
                  {profileData.specialization}
                </p>
              </div>
            </div>
          </div>

          {/* Availability Settings Section */}
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
              <h2 style={{ 
                fontSize: "20px", 
                fontWeight: "600", 
                color: "#1e293b", 
                margin: 0 
              }}>
                Availability settings
              </h2>
              <button
                onClick={() => setIsEditingAvailability(!isEditingAvailability)}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                </svg>
                Edit
              </button>
            </div>

            {/* Availability Information Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(2, 1fr)", 
              gap: "24px" 
            }}>
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Preferred Consultation Hours
                </label>
                <input
                  type="text"
                  name="preferredHours"
                  value={profileData.preferredHours}
                  onChange={handleInputChange}
                  disabled={!isEditingAvailability}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingAvailability ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingAvailability ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Consultation Modes
                </label>
                <input
                  type="text"
                  name="consultationModes"
                  value={profileData.consultationModes}
                  onChange={handleInputChange}
                  disabled={!isEditingAvailability}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingAvailability ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingAvailability ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "500", 
                  color: "#64748b",
                  fontSize: "14px"
                }}>
                  Max Consultation per Day
                </label>
                <input
                  type="text"
                  name="maxConsultationsPerDay"
                  value={profileData.maxConsultationsPerDay}
                  onChange={handleInputChange}
                  disabled={!isEditingAvailability}
                  style={{ 
                    width: "100%", 
                    padding: "12px 16px", 
                    border: isEditingAvailability ? "1px solid #cbd5e1" : "1px solid #e2e8f0", 
                    borderRadius: "8px", 
                    fontSize: "16px",
                    background: isEditingAvailability ? "white" : "#f8fafc",
                    color: "#1e293b",
                    transition: "all 0.2s ease"
                  }}
                />
              </div>
            </div>

            {/* Save/Cancel Buttons for Availability Settings */}
            {isEditingAvailability && (
              <div style={{ 
                display: "flex", 
                gap: "12px", 
                marginTop: "24px",
                justifyContent: "flex-end"
              }}>
                <button
                  onClick={() => setIsEditingAvailability(false)}
                  style={{
                    padding: "10px 20px",
                    background: "transparent",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    color: "#64748b",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAvailability}
                  style={{
                    padding: "10px 20px",
                    background: "#3b82f6",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3b82f6";
                  }}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
