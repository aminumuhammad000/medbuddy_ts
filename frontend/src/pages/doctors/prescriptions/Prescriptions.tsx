import React, { useState } from "react";
import styles from "./Prescriptions.module.css";
import { Icon } from "@iconify/react";

const Prescriptions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list"); // "list", "detail", "edit", "editExisting"
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
    setViewMode("editExisting");
  };

  const handleAddNew = () => {
    setViewMode("edit");
  };

  const handleEditPrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
    setViewMode("editExisting");
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
      status: "Active",
    },
    {
      id: 2,
      patientName: "Aminu Muhammad",
      dateIssued: "15 Oct 2025",
      medicine: "Amoxicillin 250mg",
      duration: "7 days",
      status: "Completed",
    },
    {
      id: 3,
      patientName: "Mustapha Hussein",
      dateIssued: "10 Oct 2025",
      medicine: "Paracetamol 500mg",
      duration: "5 days",
      status: "Expired",
    },
    {
      id: 4,
      patientName: "Aminu Muhammad",
      dateIssued: "12 Oct 2025",
      medicine: "Ibuprofen 400mg",
      duration: "10 days",
      status: "Active",
    },
    {
      id: 5,
      patientName: "Mustapha Hussein",
      dateIssued: "08 Oct 2025",
      medicine: "Omeprazole 20mg",
      duration: "14 days",
      status: "Completed",
    },
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
        notes: "Take with meals",
      },
      {
        name: "Amoxicillin 250mg",
        dosage: "1 capsule, three times daily",
        duration: "7 days",
        notes: "Complete the dose",
      },
      {
        name: "Paracetamol 500mg",
        dosage: "1 tablet, as needed",
        duration: "5 days",
        notes: "For headache only",
      },
    ],
    doctorMessage:
      "Drink plenty of water and avoid alcohol while on medication.",
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
        duration: "",
      },
    ],
    doctorMessage: "",
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
        return prescriptions.filter((p) => p.status === "Active");
      case "completed":
        return prescriptions.filter((p) => p.status === "Completed");
      case "expired":
        return prescriptions.filter((p) => p.status === "Expired");
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
          <button
            className={styles.closeButton}
            onClick={handleCloseShareModal}
          >
            <Icon icon="mdi:close" style={{ fontSize: "20px" }}></Icon>
          </button>
        </div>
        <div className={styles.shareOptions}>
          <div className={styles.shareOption}>
            <div className={styles.shareIconButton}>
              <Icon
                icon="bitcoin-icons:share-filled"
                style={{ fontSize: "25px" }}
              ></Icon>
            </div>
            <span className={styles.shareLabel}>Send to patient</span>
          </div>
          <div className={styles.shareOption}>
            <div className={styles.shareIconButton}>
              <Icon
                icon="mingcute:copy-fill"
                style={{ fontSize: "25px" }}
              ></Icon>
            </div>
            <span className={styles.shareLabel}>Copy link</span>
          </div>
          <div className={styles.shareOption}>
            <div className={styles.shareIconButton}>
              <Icon
                icon="material-symbols:download-rounded"
                style={{ fontSize: "25px" }}
              ></Icon>
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
              <Icon icon="mdi:arrow-left" style={{ fontSize: "24px" }}></Icon>
            </button>
            <h1 className={styles.pageTitle}>Add new prescription</h1>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.notificationIcon}>
              <Icon icon="mdi:bell-notification" style={{ color: "var(--blue-color)", fontSize: "24px" }}></Icon>
            </div>
          </div>
        </div>

        {/* Edit Form Content */}
        <div className={styles.editFormContent}>
          {/* Patient Information Section */}
          <div className={styles.patientInfoCard}>
            <h3 className={styles.patientInfoTitle}>Patient Information</h3>
            <div className={styles.patientInfoGrid}>
              <div className={styles.patientInfoColumn}>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Patient Name:</span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.patientName}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Age / Gender:</span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.age} / {editPrescriptionData.gender}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Patient ID:</span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.patientId}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Diagnosis:</span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.diagnosis}
                  </span>
                </div>
              </div>
              <div className={styles.patientInfoColumn}>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>
                    Prescription ID:
                  </span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.prescriptionId}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Date Issued:</span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.dateIssued}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>
                    Doctor's Name:
                  </span>
                  <span className={styles.patientInfoValue}>
                    {editPrescriptionData.doctorName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Medicine Details Section */}
          <div className={styles.medicineDetailsCard}>
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
                    <Icon
                      icon="mdi:chevron-down"
                      className={styles.dropdownIcon}
                    ></Icon>
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
                    <Icon
                      icon="mdi:chevron-down"
                      className={styles.dropdownIcon}
                    ></Icon>
                  </div>
                </div>
              </div>

              <button className={styles.addMedicineButton}>
                Add medicine +
                <Icon icon="ri:add-fill" style={{ fontSize: "18px" }}></Icon>
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
                    <Icon
                      icon="mdi:chevron-down"
                      className={styles.dropdownIcon}
                    ></Icon>
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
                    <Icon
                      icon="mdi:chevron-down"
                      className={styles.dropdownIcon}
                    ></Icon>
                  </div>
                </div>
              </div>

                          <label className={styles.additionalInfoLabel}>Additional Information</label>

            </div>
          </div>

          {/* Additional Information Section */}
          <div className={styles.additionalInfoCard}>
            <label className={styles.additionalInfoLabel}>
              Additional Information
            </label>

            <textarea
              placeholder="Type note"
              className={styles.additionalInfoTextarea}
              rows={4}
            ></textarea>
            </div>
          </div>


          {/* Action Buttons */}
          <div className={styles.actionButtonsContainer}>
            <button className={styles.saveSendButton}>Save & Send</button>
            <button className={styles.saveDraftButton}>Save as Draft</button>
          </div>
       </div>
    );
  }

  // Edit Existing Prescription Mode
  if (viewMode === "editExisting") {
  return (
    <div className={styles.prescriptionsContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={handleBackToList}>
            <Icon icon="mdi:arrow-left" style={{ fontSize: "24px" }} />
          </button>
          <h1 className={styles.pageTitle}>Edit Prescription</h1>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.notificationIcon}>
            <Icon icon="mdi:bell-notification" style={{ color: "var(--blue-color)", fontSize: "24px" }} />
          </div>
        </div>
      </div>

      {/* Patient Information Section */}
      <div className={styles.patientInfoCard}>
        <h3 className={styles.patientInfoTitle}>Patient Information</h3>
        <div className={styles.patientInfoGrid}>
          <div className={styles.patientInfoColumn}>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Patient Name:</span>
              <span className={styles.patientInfoValue}>
                {selectedPrescription?.patientName || "Mustapha Hussein"}
              </span>
            </div>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Age / Gender:</span>
              <span className={styles.patientInfoValue}>42 / Male</span>
            </div>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Patient ID:</span>
              <span className={styles.patientInfoValue}>208898680</span>
            </div>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Diagnosis:</span>
              <span className={styles.patientInfoValue}>Diabetes, Blood Disorder</span>
            </div>
          </div>
          <div className={styles.patientInfoColumn}>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Prescription ID:</span>
              <span className={styles.patientInfoValue}>RX-2025-016</span>
            </div>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Date Issued:</span>
              <span className={styles.patientInfoValue}>
                {selectedPrescription?.dateIssued || "16 Oct 2025"}
              </span>
            </div>
            <div className={styles.patientInfoRow}>
              <span className={styles.patientInfoLabel}>Doctor's Name:</span>
              <span className={styles.patientInfoValue}>Dr. Musa Abdullahi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Current Medications Section */}
      <div className={styles.currentMedicationsCard}>
        <h3 className={styles.sectionTitle}>Current Medications</h3>
        <div className={styles.medicationTable}>
          <div className={styles.tableHeadered}>
            <div className={styles.headerCell}>Medicine Name</div>
            <div className={styles.headerCell}>Dosage & Frequency</div>
            <div className={styles.headerCell}>Duration</div>
            <div className={styles.headerCell}>Notes</div>
            <div className={styles.headerCell}>Actions</div>
          </div>
          <div className={styles.tableBody}>
            <div className={styles.tableRowed}>
              <div className={styles.tableCell}>Metformin 500mg</div>
              <div className={styles.tableCell}>1 tablet, twice daily</div>
              <div className={styles.tableCell}>30 days</div>
              <div className={styles.tableCell}>
                <span className={styles.notes}>Take with meals</span>
              </div>
              <div className={styles.tableCell}>
                <button className={styles.removeButton}>Remove</button>
              </div>
            </div>
            <div className={styles.tableRowed}>
              <div className={styles.tableCell}>Amoxicillin 250mg</div>
              <div className={styles.tableCell}>1 capsule, three times daily</div>
              <div className={styles.tableCell}>7 days</div>
              <div className={styles.tableCell}>
                <span className={styles.notes}>Complete the dose</span>
              </div>
              <div className={styles.tableCell}>
                <button className={styles.removeButton}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Medicine Section */}
      <div className={styles.addMedicineCard}>
        <h3 className={styles.sectionTitle}>Add New Medicine</h3>
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
                <Icon icon="mdi:chevron-down" className={styles.dropdownIcon} />
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
                <Icon icon="mdi:chevron-down" className={styles.dropdownIcon} />
              </div>
            </div>
          </div>

          <div className={styles.medicineRow}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Frequency</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Enter or select Frequency"
                  className={styles.textInput}
                />
                <Icon icon="mdi:chevron-down" className={styles.dropdownIcon} />
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
                <Icon icon="mdi:chevron-down" className={styles.dropdownIcon} />
              </div>
            </div>
          </div>

          <label className={styles.additionalInfoLabel}>Additional Information</label>
          <textarea
            placeholder="Type note"
            className={styles.additionalInfoTextarea}
            rows={4}
            defaultValue="Drink plenty of water and avoid alcohol while on medication."
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtonsContainer}>
        <button className={styles.saveSendButton}>Update & Send</button>
        <button className={styles.saveDraftButton}>Save as Draft</button>
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
              <Icon icon="mdi:arrow-left" style={{ fontSize: "24px" }}></Icon>
            </button>
            <h1 className={styles.pageTitle}>Prescriptions</h1>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.notificationIcon}>
              <Icon
                icon="mdi:bell-notification"
                style={{ color: "#ef4444", fontSize: "24px" }}
              ></Icon>
            </div>
          </div>
        </div>

        {/* Prescription Detail Content */}
        <div className={styles.detailContent}>
          {/* Patient Information Section */}
          <div className={styles.patientInfoCarded}>
            <h3 className={styles.patientInfoTitle}>Patient Information</h3>
            <div className={styles.patientInfoGrid}>
              <div className={styles.patientInfoColumn}>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Patient Name:</span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.patientName}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Age / Gender:</span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.age} / {prescriptionDetail.gender}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Patient ID:</span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.patientId}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Diagnosis:</span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.diagnosis}
                  </span>
                </div>
              </div>
              <div className={styles.patientInfoColumn}>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>
                    Prescription ID:
                  </span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.prescriptionId}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>Date Issued:</span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.dateIssued}
                  </span>
                </div>
                <div className={styles.patientInfoRow}>
                  <span className={styles.patientInfoLabel}>
                    Doctor's Name:
                  </span>
                  <span className={styles.patientInfoValue}>
                    {prescriptionDetail.doctorName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Medication Table */}
          <div className={styles.medicationSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Medication Details</h3>
              <div className={styles.actionButtons}>
                <button className={styles.editButton} style={{background:"var(--blue-color)", color:"white"}} onClick={handleEdit}>Edit</button>
                <button className={styles.renewButton} style={{color:"var(--blue-color)", border:" 0.2px solid var(--blue-color)"}} >Renew</button>
              </div>
            </div>
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
              Share
              <Icon icon="mi:share" style={{ fontSize: "20px" }}></Icon>
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
            <Icon
              icon="material-symbols:arrow-back-rounded"
              style={{ fontSize: "30px" }}
            ></Icon>
          </button>
          <h1 className={styles.pageTitle}>Prescriptions</h1>
        </div>
        <div className={styles.notificationIcon}>
          <Icon
            icon="mdi:bell-notification"
            style={{ color: "var(--blue-color)", fontSize: "26px" }}
          ></Icon>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className={styles.searchFilterSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <Icon icon="tabler:search" className={styles.searchIcon}></Icon>
            <input
              type="text"
              placeholder="Search by patient name, ID, or prescription..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterIcon}>
            <Icon icon="mdi:filter" style={{ fontSize: "25px" }}></Icon>
          </div>
        </div>
      </div>

      {/* Filter Tabs and Add New Button */}
      <div className={styles.filterSection}>
        <div className={styles.filterTabs}>
          <button
            className={`${styles.filterTab} ${
              activeFilter === "all" ? styles.activeFilterTab : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterTab} ${
              activeFilter === "active" ? styles.activeFilterTab : ""
            }`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`${styles.filterTab} ${
              activeFilter === "completed" ? styles.activeFilterTab : ""
            }`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
          <button
            className={`${styles.filterTab} ${
              activeFilter === "expired" ? styles.activeFilterTab : ""
            }`}
            onClick={() => handleFilterChange("expired")}
          >
            Expired
          </button>
        </div>
        <button className={styles.addNewButton} onClick={handleAddNew}>
          Add new
          <Icon
            icon="ic:sharp-add"
            style={{ fontSize: "18px", color: "white" }}
          ></Icon>
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
                <span className={styles.patientName}>
                  {prescription.patientName}
                </span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.dateIssued}>
                  {prescription.dateIssued}
                </span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.medicine}>{prescription.medicine}</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.duration}>{prescription.duration}</span>
              </div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.status} ${getStatusColor(
                    prescription.status
                  )}`}
                >
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
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditPrescription(prescription)}
                  >
                    Edit
                  </button>
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
