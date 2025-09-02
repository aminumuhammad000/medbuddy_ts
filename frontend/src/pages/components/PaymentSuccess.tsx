import React from "react";
import styles from "./PaymentSuccess.module.css";
import { useDispatch } from "react-redux";
import { setDrugStep } from "../../store/slices/patientNavSlice";

const PaymentSuccess: React.FC = () => {
  const dispatch = useDispatch();

  const handleCLose = () => {
    dispatch(setDrugStep("receipt"));
  };

  return (
    <div className={styles.card}>
      {/* Close Button */}
      <button className={styles.closeBtn} onClick={handleCLose}>
        ✕
      </button>

      {/* Success Icon */}
      <div className={styles.iconWrapper}>
        <Iconify-icon
          icon="icon-park-solid:success"
          className={styles.successIcon}
        ></Iconify-icon>
      </div>

      {/* Title */}
      <h2 className={styles.title}>Payment Successful</h2>

      {/* Message */}
      <p className={styles.text}>
        Your payment of ₦5,250 has been received successfully.
      </p>
      <p className={styles.text}>
        Your consultation with <strong>Dr. Musa Abdullahi</strong> is now
        confirmed for
        <strong> 15th October at 10:00 AM</strong>.
      </p>
      <p className={styles.text}>
        A confirmation email and receipt have been sent to your inbox.
      </p>
    </div>
  );
};

export default PaymentSuccess;
