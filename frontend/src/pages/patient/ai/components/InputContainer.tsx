import React from "react";
import styles from "./InputContainer.module.css";

export const InputContainer = () => {
  return (
    <div className={styles.inputContainer} id="flexAlignCenter">
      <input
        type="text"
        placeholder="Consult me!"
        className={styles.inputField}
      />
      <div className={styles.buttonsContainer} id="flexCenter">
        <button className={styles.recordButton}>
          <iconify-icon
            icon="material-symbols:mic"
            className={styles.icon}
          ></iconify-icon>
        </button>
        <button className={styles.sendButton}>
          <iconify-icon
            icon="iconamoon:send-fill"
            className={styles.icon}
          ></iconify-icon>
        </button>
      </div>
    </div>
  );
};
