import React from "react";
import styles from "../shared/Placeholder.module.css";

const Settings: React.FC = () => {
  return (
    <div className={styles.placeholderContainer}>
      <h2 className={styles.pageTitle}>
        Settings
      </h2>
      <p className={styles.description}>
        Settings functionality will be implemented here.
      </p>
    </div>
  );
};

export default Settings;

