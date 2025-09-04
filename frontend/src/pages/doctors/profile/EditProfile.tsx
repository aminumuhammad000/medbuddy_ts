import React, { useState, useEffect } from "react";
import styles from "./EditProfile.module.css";
import doctorImage from "../../../assets/images/profiles/doctor.jpg";

interface EditProfileProps {
  onBack: () => void;
  section?: "basic" | "professional" | "availability";
}

const EditProfile: React.FC<EditProfileProps> = ({ onBack, section = "basic" }) => {
  const [activeTab, setActiveTab] = useState(section);
  
  useEffect(() => {
    setActiveTab(section);
  }, [section]);
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "Musa",
    lastName: "Abdullahi",
    email: "dr.musa@medbuddy.com",
    phone: "8156789034",
    countryCode: "+243",
    dateOfBirth: "6/10/2025",
    gender: "Male",
    licenseId: "1234567890",
    address: "No.12, Tarauni, Kano, Nigeria",
    
    // Professional Information
    specialty: "Neurologist",
    experience: "12",
    professionalLicenseId: "MDCN/123456",
    licenseExpiry: "Dec 2026",
    certifications: "MBBS, FWACS",
    languages: "English, Hausa",
    
    // Availability Settings
    consultationDays: "Mon, Thur, Fri",
    consultationStartTime: "9 AM",
    consultationEndTime: "5 PM",
    consultationMode: "Virtual, Physical",
    maxConsultationsPerDay: "5",
    licenseExpiryDate: "Dec 2026"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Saving changes:", formData);
    // After saving, go back to profile view
    onBack();
  };


  return (
    <div className={styles.editProfileContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack}>
            <iconify-icon icon="mdi:arrow-left" style={{ fontSize: "24px" }}></iconify-icon>
          </button>
          <h1 className={styles.pageTitle}>Edit profile</h1>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.notificationIcon}>
            <iconify-icon icon="mdi:bell-notification" style={{ color: "#ef4444", fontSize: "24px" }}></iconify-icon>
          </div>
          <button className={styles.saveButton} onClick={handleSaveChanges}>
            Save changes
          </button>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className={styles.profilePictureSection}>
        <div className={styles.profilePictureContainer}>
          <img src={doctorImage} alt="Profile" className={styles.profilePicture} />
          <div className={styles.cameraIcon}>
            <iconify-icon icon="mdi:camera" style={{ fontSize: "20px" }}></iconify-icon>
          </div>
        </div>
        <div className={styles.imageButtons}>
          <button className={styles.uploadButton}>
            Upload new image
          </button>
          <button className={styles.removeButton}>
            Remove image
          </button>
        </div>
        <button className={styles.saveChangesButton}>
          Save changes
        </button>
      </div>



      {/* Form Content */}
      {activeTab === "basic" && (
        <div className={styles.editForm}>
          {/* Personal Information Form */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Personal Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formColumn}>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Date Of Birth</label>
                    <input
                      type="text"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>House Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                </div>
                <div className={styles.formColumn}>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>First Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Phone Number</label>
                    <div className={styles.phoneInputContainer}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => handleInputChange("countryCode", e.target.value)}
                        className={styles.countryCodeSelect}
                      >
                        <option value="+243">+243</option>
                        <option value="+234">+234</option>
                        <option value="+1">+1</option>
                      </select>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={styles.phoneInput}
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>License ID</label>
                    <input
                      type="text"
                      value={formData.licenseId}
                      onChange={(e) => handleInputChange("licenseId", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {activeTab === "professional" && (
        <div className={styles.editForm}>
          {/* Professional Information Form */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Professional Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formColumn}>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Specialty</label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => handleInputChange("specialty", e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="Neurologist">Neurologist</option>
                      <option value="Cardiologist">Cardiologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                      <option value="Pediatrician">Pediatrician</option>
                    </select>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>License ID</label>
                    <input
                      type="text"
                      value={formData.professionalLicenseId}
                      onChange={(e) => handleInputChange("professionalLicenseId", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Certifications</label>
                    <select
                      value={formData.certifications}
                      onChange={(e) => handleInputChange("certifications", e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="MBBS, FWACS">MBBS, FWACS</option>
                      <option value="MD, PhD">MD, PhD</option>
                      <option value="MBChB">MBChB</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formColumn}>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Year of Experience</label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      className={styles.textInput}
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>License Expiry</label>
                    <div className={styles.dateInputContainer}>
                      <input
                        type="text"
                        value={formData.licenseExpiry}
                        onChange={(e) => handleInputChange("licenseExpiry", e.target.value)}
                        className={styles.textInput}
                      />
                      <iconify-icon icon="mdi:calendar" className={styles.calendarIcon}></iconify-icon>
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Languages</label>
                    <select
                      value={formData.languages}
                      onChange={(e) => handleInputChange("languages", e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="English, Hausa">English, Hausa</option>
                      <option value="English, French">English, French</option>
                      <option value="English, Arabic">English, Arabic</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {activeTab === "availability" && (
        <div className={styles.editForm}>
          {/* Availability Settings Form */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Availability Settings</h3>
              <div className={styles.availabilityForm}>
                <div className={styles.availabilityRow}>
                  <div className={styles.availabilityField}>
                    <label className={styles.fieldLabel}>Preferred Consultation Hours</label>
                    <div className={styles.consultationHoursContainer}>
                      <select
                        value={formData.consultationDays}
                        onChange={(e) => handleInputChange("consultationDays", e.target.value)}
                        className={styles.selectInput}
                      >
                        <option value="Mon, Thur, Fri">Mon, Thur, Fri</option>
                        <option value="Mon, Tue, Wed">Mon, Tue, Wed</option>
                        <option value="Mon, Tue, Wed, Thu, Fri">Mon, Tue, Wed, Thu, Fri</option>
                      </select>
                      <input
                        type="text"
                        value={formData.consultationStartTime}
                        onChange={(e) => handleInputChange("consultationStartTime", e.target.value)}
                        className={styles.timeInput}
                        placeholder="9 AM"
                      />
                      <input
                        type="text"
                        value={formData.consultationEndTime}
                        onChange={(e) => handleInputChange("consultationEndTime", e.target.value)}
                        className={styles.timeInput}
                        placeholder="5 PM"
                      />
                    </div>
                  </div>
                  
                  <div className={styles.availabilityField}>
                    <label className={styles.fieldLabel}>Consultation Mode</label>
                    <select
                      value={formData.consultationMode}
                      onChange={(e) => handleInputChange("consultationMode", e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="Virtual, Physical">Virtual, Physical</option>
                      <option value="Virtual Only">Virtual Only</option>
                      <option value="Physical Only">Physical Only</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.availabilityRow}>
                  <div className={styles.availabilityField}>
                    <label className={styles.fieldLabel}>Max Consultation per Day</label>
                    <select
                      value={formData.maxConsultationsPerDay}
                      onChange={(e) => handleInputChange("maxConsultationsPerDay", e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                  
                  <div className={styles.availabilityField}>
                    <label className={styles.fieldLabel}>License Expiry</label>
                    <div className={styles.dateInputContainer}>
                      <input
                        type="text"
                        value={formData.licenseExpiryDate}
                        onChange={(e) => handleInputChange("licenseExpiryDate", e.target.value)}
                        className={styles.textInput}
                      />
                      <iconify-icon icon="mdi:calendar" className={styles.calendarIcon}></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default EditProfile;

