import React from "react";
import styles from "../shared/Placeholder.module.css";

const ManagePatients: React.FC = () => {
  return (
    <div className={styles.placeholderContainer}>
      <h2 className={styles.pageTitle}>
        Manage Patients
      </h2>
      <p className={styles.description}>
        Patient management functionality will be implemented here.
      </p>
    </div>
  );
};

export default ManagePatients;

