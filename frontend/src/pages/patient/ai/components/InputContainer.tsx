import styles from "./InputContainer.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";

export const InputContainer = () => {
  const { currentPage } = useSelector((state: RootState) => state.patientNav);

  return (
    <div
      className={styles.inputContainer}
      style={currentPage === "ai" ? { marginLeft: "100px" } : {}}
      id="flexAlignCenter"
    >
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
