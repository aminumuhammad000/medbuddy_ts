import React from "react";
import styles from "../shared/Placeholder.module.css";

const ManagePatients: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={styles.placeholderContainer}>
      <h2 className={styles.pageTitle}>
=======
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#1a1a1a",
          margin: "0 0 20px 0",
        }}
      >
>>>>>>> 00c64dddfe911549ea2937ca096414319179644a
        Manage Patients
      </h2>
      <p className={styles.description}>
        Patient management functionality will be implemented here.
      </p>
    </div>
  );
};

export default ManagePatients;
