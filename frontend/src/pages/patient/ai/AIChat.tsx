import React, { useState } from "react";
import styles from "./AIChat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setAiSideBar } from "../../../store/slices/patientNavSlice";
import AiSideBar from "../ai/components/AiSideBar";
import { InputContainer } from "./components/InputContainer";

const AIChat = () => {
  const [expandPage, setExpandPage] = useState(true);
  const { currentPage, aiSideBar } = useSelector(
    (state: any) => state.patientNav
  );
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

  const handleSideBar = () => {
    dispatch(setAiSideBar(!aiSideBar));
  };
  return (
    <div className={styles.AIChat}>
      {aiSideBar && (
        <div className={styles.sidebarContainer}>
          <AiSideBar />
        </div>
      )}

      <div className={styles.head}>
        {aiSideBar ? (
          <button onClick={handleSideBar} className={styles.btn}>
            <iconify-icon
              icon="ri:side-bar-fill"
              className={styles.sideIcons}
            ></iconify-icon>
          </button>
        ) : (
          <button onClick={handleSideBar} className={styles.btn}>
            <iconify-icon
              icon="material-symbols:tab-recent"
              className={styles.sideIcons2}
            ></iconify-icon>
          </button>
        )}

        <h4 className={styles.title}>AI Consultant</h4>

        <button className={styles.expand} onClick={() => handlePage("ai")}>
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
