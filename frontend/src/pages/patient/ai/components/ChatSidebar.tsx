import React, { useState } from "react";
import styles from "./ChatSidebar.module.css";
import { useDispatch } from "react-redux";
import { setSearchChat } from "../../../../store/slices/patientNavSlice";

interface ChatItem {
  id: number;
  title: string;
  timestamp: string;
}

interface ChatSidebarProps {
  onChatSelect?: (chatId: number) => void;
  onNewChat?: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  onChatSelect,
  onNewChat,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const chatHistory: ChatItem[] = [
    { id: 1, title: "MEDBUDDY Homepage Design", timestamp: "Yesterday" },
    { id: 2, title: "MEDBUDDY Homepage Design", timestamp: "Yesterday" },
    { id: 3, title: "MEDBUDDY Homepage Design", timestamp: "Previous 7 days" },
    { id: 4, title: "MEDBUDDY Homepage Design", timestamp: "Previous 7 days" },
    { id: 5, title: "MEDBUDDY Homepage Design", timestamp: "Previous 7 days" },
    { id: 6, title: "MEDBUDDY Homepage Design", timestamp: "Previous 7 days" },
  ];

  const filteredChats = chatHistory.filter((chat) =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedChats = filteredChats.reduce((groups, chat) => {
    const timeGroup = chat.timestamp;
    if (!groups[timeGroup]) {
      groups[timeGroup] = [];
    }
    groups[timeGroup].push(chat);
    return groups;
  }, {} as Record<string, ChatItem[]>);

  const dispatch = useDispatch();

  const handleChatClick = (chatId: number): void => {
    onChatSelect?.(chatId);
  };

  const handleNewChatClick = (): void => {
    onNewChat?.();
  };

  const handleClose = () => {
    dispatch(setSearchChat(false));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <input
          type="text"
          placeholder="Search Chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleClose} className={styles.closeButton}>
          <iconify-icon
            icon="mdi:close"
            className={styles.closeIcon}
          ></iconify-icon>
        </button>
      </div>

      <div className={styles.content}>
        <button onClick={handleNewChatClick} className={styles.newChatButton}>
          <iconify-icon
            icon="mdi:plus"
            className={styles.newChatIcon}
          ></iconify-icon>
          New chat
        </button>

        <div className={styles.chatList}>
          {Object.entries(groupedChats).map(([timeGroup, chats]) => (
            <div key={timeGroup} className={styles.timeGroup}>
              <h3 className={styles.timeGroupTitle}>{timeGroup}</h3>
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => handleChatClick(chat.id)}
                  className={styles.chatItem}
                >
                  <iconify-icon
                    icon="mdi:message-outline"
                    className={styles.chatIcon}
                  ></iconify-icon>
                  <span className={styles.chatTitle}>{chat.title}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
