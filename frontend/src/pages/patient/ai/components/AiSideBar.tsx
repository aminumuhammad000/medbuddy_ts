import { useState } from "react";
import styles from "./AiSideBar.module.css";
import { setSearchChat } from "../../../../store/slices/patientNavSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store"; // adjust path if needed
import { Icon } from "@iconify/react";
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
  const [selectedChat, setSelectedChat] = useState<number | string>();
  const dispatch = useDispatch();
  const { searchChat } = useSelector((state: RootState) => state.patientNav);

  const handleSeachContainer = () => {
    dispatch(setSearchChat(!searchChat));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <button className={styles.newChat}>
          <Icon icon="jam:write-f" className={styles.icons}></Icon>
          New chat
        </button>
        <button className={styles.newChat} onClick={handleSeachContainer}>
          <Icon icon="mingcute:search-line" className={styles.icons}></Icon>
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
