import React, { useState } from "react";
import styles from "./AIChat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store/slices/patientNavSlice";
import AiSideBar from "../ai/components/AiSideBar";
import { InputContainer } from "./components/InputContainer";

const AIChat = () => {
  const [expandPage, setExpandPage] = useState(true);
  const currentPage = useSelector((state: any) => state.patientNav.currentPage);
  const dispatch = useDispatch();

  const handlePage = React.useCallback(
    (e: any) => {
      currentPage === "dashboard"
        ? dispatch(setPage(e))
        : dispatch(setPage("dashboard"));
      setExpandPage(!expandPage);
    },
    [dispatch]
  );
  return (
    <div className={styles.AIChat}>
      <div className={styles.sidebarContainer}>
        <AiSideBar />
      </div>

      <div className={styles.head}>
        <button>
          <iconify-icon
            icon="ri:side-bar-fill"
            className={styles.sidebar}
          ></iconify-icon>
        </button>
        <h4 className={styles.title}>AI Consultant</h4>

        <button
          className={styles.expand}
          onClick={() => handlePage("ai")}
          style={expandPage && { right: "60px" }}
        >
          <iconify-icon
            icon="streamline:line-arrow-expand-window-1-remix"
            className={styles.icon}
          ></iconify-icon>
        </button>
      </div>

      <div className={styles.historyContainer}>
        <p className={styles.contentTitle} id="smallText">
          Ask about a drug, dosage, or symptom...
        </p>

        <div className={styles.chatContent}></div>
        <InputContainer />
      </div>
    </div>
  );
};

export default AIChat;
