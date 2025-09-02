import React from "react";
import styles from "./ConsultDetails.module.css";

interface MedicineDetailsProps {
  service: string;
  doctor: string;
  dateTime: string;
  clinic: string;
}

const MedicineDetails: React.FC<MedicineDetailsProps> = ({
  service,
  doctor,
  dateTime,
  clinic,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Medicine Details</h3>

      <div className={styles.row}>
        <span className={styles.label}>Service:</span>
        <span className={styles.value}>{service}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Doctor:</span>
        <span className={styles.value}>{doctor}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Date &amp; Time:</span>
        <span className={styles.value}>{dateTime}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Clinic (If In-clinic):</span>
        <span className={styles.value}>{clinic}</span>
      </div>
    </div>
  );
};

export default MedicineDetails;
