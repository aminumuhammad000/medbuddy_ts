import React from "react";
import styles from "./PaymentReceipt.module.css";
import { Icon } from "@iconify/react";
const PaymentReceipt: React.FC = () => {
  return (
    <div className={styles.receiptCard}>
      {/* Header */}
      <h2 className={styles.title}>Payment Receipt</h2>

      <div className={styles.sectionWrapper}>
        {/* Customer Info */}
        <div className={styles.section}>
          <h3>Customer Information</h3>
          <p>
            <strong>Name:</strong> Mustapha Hussein
          </p>
          <p>
            <strong>Phone Number:</strong> +234 81 234 567
          </p>
          <p>
            <strong>Email:</strong> Mustyoseni060@gmail.com
          </p>
          <p>
            <strong>Delivery Address:</strong> No J79 Kundila Estate, Kano
          </p>
        </div>

        {/* Order Details */}
        <div className={styles.section}>
          <h3>Order Details</h3>
          <p>
            <strong>Medicine:</strong> Amoxilin
          </p>
          <p>
            <strong>Dosage:</strong> 500mg
          </p>

          <h3 style={{ marginTop: "50px" }}>Delivery Information</h3>
          <p>
            <strong>Vendor:</strong> Medbuddy Pharmacy
          </p>
          <p>
            <strong>Estimated Delivery:</strong> 18th October 2025
          </p>
          <p>
            <strong>Tracking ID:</strong> MD-TRACK-009874
          </p>
          <p>
            <strong>Track Order Link:</strong> <a href="#">Track Delivery</a>
          </p>
        </div>
      </div>

      {/* Payment Info */}
      <div className={styles.section}>
        <h3>Payment Information</h3>
        <p>
          <strong>Sub-total:</strong> ₦5,250
        </p>
        <p>
          <strong>Delivery Fee:</strong> ₦500
        </p>
        <p>
          <strong>Total Paid:</strong> ₦5,500
        </p>
        <p>
          <strong>Method:</strong> Bank Transfer
        </p>
        <p>
          <strong>Transaction ID:</strong> TXN-9034728
        </p>
        <p>
          <strong>Receipt No:</strong> MB-REC-000245
        </p>
        <p>
          <strong>Date Issued:</strong> 15th October 2025
        </p>
        <p>
          <strong>Payment Status:</strong>{" "}
          <span className={styles.success}>Successful</span>
        </p>
      </div>

      {/* Footer Note */}
      <p className={styles.note}>
        All medicines are NAFDAC-approved and sealed. Store in a cool, dry
        place. For any issues, please contact Medbuddy Support.
      </p>

      {/* Action Buttons */}
      <div className={styles.buttonGroup}>
        <button className={styles.pdfBtn}>
          Download PDF <Icon icon="tabler:download"></Icon>
        </button>
        <button className={styles.dashboardBtn}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
