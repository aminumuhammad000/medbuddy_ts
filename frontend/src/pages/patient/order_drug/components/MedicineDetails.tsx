import React from "react";
import styles from "./MedicineDetails.module.css";

const MedicineDetails: React.FC = () => {
  return (
    <div className={styles.card}>
      {/* Medicine Details */}
      <h2 className={styles.heading}>Medicine Details</h2>
      <div className={styles.detailsGrid}>
        <p>
          <span className={styles.label}>Product Name:</span>{" "}
          <span className={styles.value}>
            Pure Nutrition Magnesium Glycinate with Zinc
          </span>
        </p>
        <p>
          <span className={styles.label}>Dosage:</span>{" "}
          <span className={styles.value}>500mg</span>
        </p>
        <p>
          <span className={styles.label}>Quantity:</span>{" "}
          <span className={styles.value}>2 Packs</span>
        </p>
        <p>
          <span className={styles.label}>Price:</span>{" "}
          <span className={styles.value}>₦ 2500.00</span>
        </p>
        <p>
          <span className={styles.label}>Order ID:</span>{" "}
          <span className={styles.value}>MB-ORD-2025-0187</span>
        </p>
        <p>
          <span className={styles.label}>Order Date:</span>{" "}
          <span className={styles.value}>15th October 2025</span>
        </p>
      </div>

      {/* Delivery Info */}
      <h2 className={styles.heading}>Delivery Information</h2>
      <div className={styles.delivery}>
        <p>
          <strong>Delivery Address:</strong> No J79 Kundila Estate, Kano
        </p>
        <p>
          <strong>Estimated Delivery:</strong> 18th October 2025
        </p>
        <p>
          <strong>Vendor:</strong> Medbuddy Pharmacy
        </p>
      </div>
    </div>
  );
};

export default MedicineDetails;
