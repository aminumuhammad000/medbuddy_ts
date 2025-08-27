import React, { useState } from "react";
import styles from "./AiSideBar.module.css";

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

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <button className={styles.newChat}>📝 New chat</button>
        <input
          className={styles.search}
          type="text"
          placeholder="Search chat"
        />
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
