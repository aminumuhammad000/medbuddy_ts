import React from "react";
import styles from "./BankTransferDetails.module.css";
import { Icon } from "@iconify/react";
interface BankTransferDetailsProps {
  amount: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  referenceCode: string;
}

const BankTransferDetails: React.FC<BankTransferDetailsProps> = ({
  amount,
  bankName,
  accountName,
  accountNumber,
  referenceCode,
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };

  return (
    <div className={styles.container}>
      <p>
        <span className={styles.label}>Amount to pay:</span>{" "}
        <span className={styles.value}>{amount}</span>
      </p>

      <p>
        <span className={styles.label}>Bank Name:</span>{" "}
        <span className={styles.value}>{bankName}</span>
      </p>

      <p>
        <span className={styles.label}>Account Name:</span>{" "}
        <span className={styles.value}>{accountName}</span>
      </p>

      <p className={styles.copyRow}>
        <span className={styles.label}>Account Number:</span>{" "}
        <span className={styles.value}>{accountNumber}</span>
        <button
          type="button"
          className={styles.copyBtn}
          onClick={() => copyToClipboard(accountNumber)}
        >
          Copy
          <Icon icon="stash:copy-light" className={styles.icon}></Icon>
        </button>
      </p>

      <p className={styles.copyRow}>
        <span className={styles.label}>Reference Code:</span>{" "}
        <span className={styles.value}>{referenceCode}</span>
        <button
          type="button"
          className={styles.copyBtn}
          onClick={() => copyToClipboard(referenceCode)}
        >
          Copy
          <Icon icon="stash:copy-light" className={styles.icon}></Icon>
        </button>
      </p>

      <p className={styles.note}>
        You must include your reference code in the transfer
        narration/description for payment confirmation
      </p>

      <p className={styles.confirmText}>
        Once you’ve transferred, click below to confirm payment
      </p>

      <div className={styles.btnContainer}>
        <button type="submit" className={styles.payButton}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default BankTransferDetails;
