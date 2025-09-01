import React, { useState } from "react";
import styles from "./AiSideBar.module.css";
import { setSearchChat } from "../../../../store/slices/patientNavSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store"; // adjust path if needed

const chats = [
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
  "MEDBUDDY Homepage Design",
];

const Sidebar = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const dispatch = useDispatch();
  const { searchChat } = useSelector((state: RootState) => state.patientNav);

  const handleSeachContainer = () => {
    dispatch(setSearchChat(!searchChat));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <button className={styles.newChat}>
          <iconify-icon
            icon="jam:write-f"
            className={styles.icons}
          ></iconify-icon>
          New chat
        </button>
        <button className={styles.newChat} onClick={handleSeachContainer}>
          <iconify-icon
            icon="mingcute:search-line"
            className={styles.icons}
          ></iconify-icon>
          Search chat
        </button>
      </div>

      <div className={styles.chatList}>
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`${styles.chatItem} ${
              selectedChat === index ? styles.selected : ""
            }`}
            onClick={() => setSelectedChat(index)}
          >
            {chat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
