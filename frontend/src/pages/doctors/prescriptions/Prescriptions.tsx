import React, { useState } from "react";
import styles from "./Prescriptions.module.css";

const Prescriptions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list"); // "list", "detail", "edit"
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleViewPrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
    setViewMode("detail");
  };

  const handleBackToList = () => {
    setViewMode("list");
    setSelectedPrescription(null);
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  const handleEdit = () => {
    setViewMode("edit");
  };

  const handleBackToDetail = () => {
    setViewMode("detail");
  };

  // Sample prescriptions data matching the UI
  const prescriptions = [
    {
      id: 1,
      patientName: "Mustapha Hussein",
      dateIssued: "16 Oct 2025",
      medicine: "Metformin 500mg",
      duration: "30 days",
      status: "Active"
    },
    {
      id: 2,
      patientName: "Aminu Muhammad",
      dateIssued: "15 Oct 2025",
      medicine: "Amoxicillin 250mg",
      duration: "7 days",
      status: "Completed"
    },
    {
      id: 3,
      patientName: "Mustapha Hussein",
      dateIssued: "10 Oct 2025",
      medicine: "Paracetamol 500mg",
      duration: "5 days",
      status: "Expired"
    },
    {
      id: 4,
      patientName: "Aminu Muhammad",
      dateIssued: "12 Oct 2025",
      medicine: "Ibuprofen 400mg",
      duration: "10 days",
      status: "Active"
    },
    {
      id: 5,
      patientName: "Mustapha Hussein",
      dateIssued: "08 Oct 2025",
      medicine: "Omeprazole 20mg",
      duration: "14 days",
      status: "Completed"
    }
  ];

  // Sample prescription detail data
  const prescriptionDetail = {
    patientName: "Mustapha Hussein",
    age: "42",
    gender: "Male",
    patientId: "208898680",
    diagnosis: "Diabetes, Blood Disorder",
    prescriptionId: "RX-2025-016",
    dateIssued: "16 Oct 2025",
    doctorName: "Dr. Musa Abdullahi",
    medications: [
      {
        name: "Metformin 500mg",
        dosage: "1 tablet, twice daily",
        duration: "30 days",
        notes: "Take with meals"
      },
      {
        name: "Amoxicillin 250mg",
        dosage: "1 capsule, three times daily",
        duration: "7 days",
        notes: "Complete the dose"
      },
      {
        name: "Paracetamol 500mg",
        dosage: "1 tablet, as needed",
        duration: "5 days",
        notes: "For headache only"
      }
    ],
    doctorMessage: "Drink plenty of water and avoid alcohol while on medication."
  };

  // Sample edit prescription data
  const editPrescriptionData = {
    patientName: "Aminu Muhammad",
    age: "42",
    gender: "Male",
    patientId: "208898680",
    diagnosis: "Diabetes, Blood Disorder",
    prescriptionId: "RX-2025-016",
    dateIssued: "16 Oct 2025",
    doctorName: "Dr. Musa Abdullahi",
    medicines: [
      {
        name: "",
        dosage: "",
        frequency: "",
        duration: ""
      }
    ],
    doctorMessage: ""
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return styles.statusActive;
      case "Completed":
        return styles.statusCompleted;
      case "Expired":
        return styles.statusExpired;
      default:
        return "";
    }
  };

  const getFilteredPrescriptions = () => {
    switch (activeFilter) {
      case "active":
        return prescriptions.filter(p => p.status === "Active");
      case "completed":
        return prescriptions.filter(p => p.status === "Completed");
      case "expired":
        return prescriptions.filter(p => p.status === "Expired");
      default:
        return prescriptions;
    }
  };

  const filteredPrescriptions = getFilteredPrescriptions();

  // Share Modal Component
  const ShareModal = () => (
    <div className={styles.modalOverlay} onClick={handleCloseShareModal}>
      <div className={styles.shareModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Share</h3>
          <button className={styles.closeButton} onClick={handleCloseShareModal}>
            <iconify-icon icon="mdi:close" style={{ fontSize: "20px" }}></iconify-icon>
          </button>
        </div>
        <div className={styles.shareOptions}>
          <div className={styles.shareOption}>
            <div className={styles.shareIconButton}>
              <iconify-icon icon="mdi:send" style={{ fontSize: "24px" }}></iconify-icon>
            </div>
            <span className={styles.shareLabel}>Send to patient</span>
          </div>
          <div className={styles.shareOption}>
            <div className={styles.shareIconButton}>
              <iconify-icon icon="mdi:file-document-arrow-right" style={{ fontSize: "24px" }}></iconify-icon>
            </div>
            <span className={styles.shareLabel}>Copy link</span>
          </div>
          <div className={styles.shareOption}>
            <div className={styles.shareIconButton}>
              <iconify-icon icon="mdi:download" style={{ fontSize: "20px" }}></iconify-icon>
            </div>
            <span className={styles.shareLabel}>Download</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Edit Mode
  if (viewMode === "edit") {
    return (
      <div className={styles.prescriptionsContainer}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <div className={styles.headerLeft}>
            <button className={styles.backButton} onClick={handleBackToDetail}>
              <iconify-icon icon="mdi:arrow-left" style={{ fontSize: "24px" }}></iconify-icon>
            </button>
            <h1 className={styles.pageTitle}>Add new prescription</h1>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.notificationIcon}>
              <iconify-icon icon="mdi:bell-notification" style={{ color: "#ef4444", fontSize: "24px" }}></iconify-icon>
            </div>
          </div>
        </div>

        {/* Edit Form Content */}
        <div className={styles.editFormContent}>
          {/* Patient Information Section */}
          <div className={styles.infoSection}>
            <h3 className={styles.sectionTitle}>Patient Information</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Patient Name:</span>
                <span className={styles.infoValue}>{editPrescriptionData.patientName}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Age / Gender:</span>
                <span className={styles.infoValue}>{editPrescriptionData.age} / {editPrescriptionData.gender}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Patient ID:</span>
                <span className={styles.infoValue}>{editPrescriptionData.patientId}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Diagnosis:</span>
                <span className={styles.infoValue}>{editPrescriptionData.diagnosis}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Prescription ID:</span>
                <span className={styles.infoValue}>{editPrescriptionData.prescriptionId}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Date Issued:</span>
                <span className={styles.infoValue}>{editPrescriptionData.dateIssued}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Doctor's Name:</span>
                <span className={styles.infoValue}>{editPrescriptionData.doctorName}</span>
              </div>
            </div>
          </div>

          {/* Medicine Details Section */}
          <div className={styles.medicineSection}>
            <h3 className={styles.sectionTitle}>Medicine Details</h3>
            <div className={styles.medicineForm}>
              <div className={styles.medicineRow}>
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>Medicine Name</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="Enter or select medicine name"
                      className={styles.textInput}
                    />
                    <iconify-icon icon="mdi:chevron-down" className={styles.dropdownIcon}></iconify-icon>
                  </div>
                </div>
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>Dosage</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="Enter or select dosage"
                      className={styles.textInput}
                    />
                    <iconify-icon icon="mdi:chevron-down" className={styles.dropdownIcon}></iconify-icon>
                  </div>
                </div>
              </div>
              
              <button className={styles.addMedicineButton}>
                <iconify-icon icon="mdi:plus" style={{ fontSize: "18px" }}></iconify-icon>
                Add medicine +
              </button>

              <div className={styles.medicineRow}>
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>Frequency</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="Enter or select Frequency"
                      className={styles.textInput}
                    />
                    <iconify-icon icon="mdi:chevron-down" className={styles.dropdownIcon}></iconify-icon>
                  </div>
                </div>
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>Duration</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="Select duration"
                      className={styles.textInput}
                    />
                    <iconify-icon icon="mdi:chevron-down" className={styles.dropdownIcon}></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor's Message Section */}
          <div className={styles.messageSection}>
            <h3 className={styles.sectionTitle}>Doctor's Message</h3>
            <textarea
              placeholder="Type note"
              className={styles.messageTextarea}
              rows={4}
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className={styles.editActionButtons}>
            <button className={styles.saveSendButton}>
              Save & Send
            </button>
            <button className={styles.saveDraftButton}>
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Detail View
  if (viewMode === "detail") {
    return (
      <div className={styles.prescriptionsContainer}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <div className={styles.headerLeft}>
            <button className={styles.backButton} onClick={handleBackToList}>
              <iconify-icon icon="mdi:arrow-left" style={{ fontSize: "24px" }}></iconify-icon>
            </button>
            <h1 className={styles.pageTitle}>Prescriptions</h1>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.notificationIcon}>
              <iconify-icon icon="mdi:bell-notification" style={{ color: "#ef4444", fontSize: "24px" }}></iconify-icon>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.editButton} onClick={handleEdit}>Edit</button>
              <button className={styles.renewButton}>Renew</button>
            </div>
          </div>
        </div>

        {/* Prescription Detail Content */}
        <div className={styles.detailContent}>
          {/* Patient Information Section */}
          <div className={styles.infoSection}>
            <h3 className={styles.sectionTitle}>Patient Information</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Patient Name:</span>
                <span className={styles.infoValue}>{prescriptionDetail.patientName}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Age / Gender:</span>
                <span className={styles.infoValue}>{prescriptionDetail.age} / {prescriptionDetail.gender}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Patient ID:</span>
                <span className={styles.infoValue}>{prescriptionDetail.patientId}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Diagnosis:</span>
                <span className={styles.infoValue}>{prescriptionDetail.diagnosis}</span>
              </div>
            </div>
          </div>

          {/* Prescription Details Section */}
          <div className={styles.infoSection}>
            <h3 className={styles.sectionTitle}>Prescription Details</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Prescription ID:</span>
                <span className={styles.infoValue}>{prescriptionDetail.prescriptionId}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Date Issued:</span>
                <span className={styles.infoValue}>{prescriptionDetail.dateIssued}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Doctor's Name:</span>
                <span className={styles.infoValue}>{prescriptionDetail.doctorName}</span>
              </div>
            </div>
          </div>

          {/* Medication Table */}
          <div className={styles.medicationSection}>
            <h3 className={styles.sectionTitle}>Medication Details</h3>
            <div className={styles.medicationTable}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Medicine Name</div>
                <div className={styles.headerCell}>Dosage & Frequency</div>
                <div className={styles.headerCell}>Duration</div>
                <div className={styles.headerCell}>Notes</div>
              </div>
              <div className={styles.tableBody}>
                {prescriptionDetail.medications.map((med, index) => (
                  <div key={index} className={styles.tableRow}>
                    <div className={styles.tableCell}>{med.name}</div>
                    <div className={styles.tableCell}>{med.dosage}</div>
                    <div className={styles.tableCell}>{med.duration}</div>
                    <div className={styles.tableCell}>
                      <span className={styles.notes}>{med.notes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Doctor's Message Section */}
          <div className={styles.messageSection}>
            <h3 className={styles.sectionTitle}>Doctor's Message</h3>
            <div className={styles.doctorMessage}>
              "{prescriptionDetail.doctorMessage}"
            </div>
          </div>

          {/* Share Button */}
          <div className={styles.shareSection}>
            <button className={styles.shareButton} onClick={handleShare}>
              <iconify-icon icon="mdi:share-variant" style={{ fontSize: "20px" }}></iconify-icon>
              Share
            </button>
          </div>
        </div>

        {/* Share Modal */}
        {showShareModal && <ShareModal />}
      </div>
    );
  }

  // List View
  return (
    <div className={styles.prescriptionsContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton}>
            <iconify-icon icon="mdi:arrow-left" style={{ fontSize: "24px" }}></iconify-icon>
          </button>
          <h1 className={styles.pageTitle}>Prescriptions</h1>
        </div>
        <div className={styles.notificationIcon}>
          <iconify-icon icon="mdi:bell-notification" style={{ color: "#ef4444", fontSize: "24px" }}></iconify-icon>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className={styles.searchFilterSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <iconify-icon icon="mdi:magnify" className={styles.searchIcon}></iconify-icon>
            <input
              type="text"
              placeholder="Search by patient name, ID, or prescription..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterIcon}>
            <iconify-icon icon="mdi:filter-variant" style={{ fontSize: "20px" }}></iconify-icon>
          </div>
        </div>
      </div>

      {/* Filter Tabs and Add New Button */}
      <div className={styles.filterSection}>
        <div className={styles.filterTabs}>
          <button
            className={`${styles.filterTab} ${activeFilter === "all" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterTab} ${activeFilter === "active" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`${styles.filterTab} ${activeFilter === "completed" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
          <button
            className={`${styles.filterTab} ${activeFilter === "expired" ? styles.activeFilterTab : ""}`}
            onClick={() => handleFilterChange("expired")}
          >
            Expired
          </button>
        </div>
        <button className={styles.addNewButton}>
          <iconify-icon icon="mdi:plus" style={{ fontSize: "18px" }}></iconify-icon>
          Add new +
        </button>
      </div>

      {/* Prescriptions Table */}
      <div className={styles.prescriptionsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Patient Name</div>
          <div className={styles.headerCell}>Date Issued</div>
          <div className={styles.headerCell}>Medicine(s)</div>
          <div className={styles.headerCell}>Duration</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}>Actions</div>
        </div>
        
        <div className={styles.tableBody}>
          {filteredPrescriptions.map((prescription) => (
            <div key={prescription.id} className={styles.tableRow}>
              <div className={styles.tableCell}>
                <span className={styles.patientName}>{prescription.patientName}</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.dateIssued}>{prescription.dateIssued}</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.medicine}>{prescription.medicine}</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.duration}>{prescription.duration}</span>
              </div>
              <div className={styles.tableCell}>
                <span className={`${styles.status} ${getStatusColor(prescription.status)}`}>
                  {prescription.status}
                </span>
              </div>
              <div className={styles.tableCell}>
                <div className={styles.actionButtons}>
                  <button 
                    className={styles.viewButton}
                    onClick={() => handleViewPrescription(prescription)}
                  >
                    View
                  </button>
                  <button className={styles.editButton}>Edit</button>
                  <button className={styles.cancelButton}>Cancel</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;

