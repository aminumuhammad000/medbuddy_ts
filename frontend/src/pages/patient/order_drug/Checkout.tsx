// import React from "react";
import MedicineDetails from "./components/MedicineDetails";
import PaymentForm from "./components/PaymentForm";
import styles from "./Checkout.module.css";
import PaymentSuccess from "../../components/PaymentSuccess";
import PaymentReceipt from "./components/PaymentReceipt";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store"; // adjust path if needed

export const Checkout = () => {
  const { drugStep } = useSelector((state: RootState) => state.patientNav);
  //   const dispatch = useDispatch();

  return (
    <div className={styles.Checkout}>
      {drugStep === "form" ? (
        <>
          <MedicineDetails />
          <PaymentForm />
        </>
      ) : drugStep === "success" ? (
        <>
          <MedicineDetails />
          <PaymentForm />
        </>
      ) : (
        ""
      )}

      {drugStep === "success" && (
        <div className={styles.alertContainer}>
          <PaymentSuccess />{" "}
        </div>
      )}

      {drugStep === "receipt" && <PaymentReceipt />}
    </div>
  );
};
