import React, { useState } from "react";
import styles from "./PaymentForm.module.css";
import BankTransferDetails from "../../../common/BankTransferDetails";
import { useDispatch } from "react-redux";
import { setDrugStep } from "../../../../store/slices/patientNavSlice";

const PaymentForm: React.FC = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<"card" | "bank">("card");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setDrugStep("success"));
  };
  return (
    <div className={styles.card}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "card" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("card")}
        >
          Card Payment
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "bank" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("bank")}
        >
          Bank Transfer
        </button>
      </div>

      {/* Card Payment Form */}

      <form onSubmit={handleFormSubmit}>
        {activeTab === "card" && (
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Cardholder’s Name</label>
                <input type="text" placeholder="Enter cardholder’s Name" />
              </div>
              <div className={styles.field}>
                <label>Card Number</label>
                <div className={styles.cardInput}>
                  <input type="text" placeholder="Enter Card Number" />
                  <div className={styles.cardBrand}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                      alt="Mastercard"
                    />
                    <span className={styles.dropdown}>▼</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className={styles.field}>
                <label>CVV</label>
                <input type="password" placeholder="CVV" />
              </div>
            </div>

            <div className={styles.checkboxRow}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Card</label>
            </div>

            <button type="submit" className={styles.payButton}>
              Pay Now
            </button>
          </div>
        )}

        {/* Bank Transfer Placeholder */}
        {activeTab === "bank" && (
          <>
            <div className={styles.bankSection}>
              <BankTransferDetails
                amount="₦5000"
                bankName="GT Bank"
                accountName="MEDBUDDY TECHNOLOGIES"
                accountNumber="1234567890"
                referenceCode="MB-USER2025-0001"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
