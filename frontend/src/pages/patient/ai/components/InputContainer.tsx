import styles from "./InputContainer.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { Icon } from "@iconify/react";
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
          <Icon icon="material-symbols:mic" className={styles.icon}></Icon>
        </button>
        <button className={styles.sendButton}>
          <Icon icon="iconamoon:send-fill" className={styles.icon}></Icon>
        </button>
      </div>
    </div>
  );
};
