import React from "react";
import styles from "../shared/Placeholder.module.css";

const Messages: React.FC = () => {
  return (
    <div className={styles.placeholderContainer}>
      <h2 className={styles.pageTitle}>
        Messages
      </h2>
      <p className={styles.description}>
        Messaging functionality will be implemented here.
      </p>
    </div>
  );
};

export default Messages;

