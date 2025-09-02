import React from "react";
import styles from "./ChatBubble.module.css";

interface ChatBubbleProps {
  message: string;
  isAI?: boolean;
  timestamp?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isAI = false,
  timestamp,
}) => {
  return (
    <div
      className={`${styles.messageContainer} ${
        isAI ? styles.aiMessage : styles.userMessage
      }`}
    >
      <div className={styles.messageBubble}>
        {isAI && (
          <div className={styles.aiAvatar}>
            <iconify-icon
              icon="mdi:robot"
              className={styles.avatarIcon}
            ></iconify-icon>
          </div>
        )}

        <div className={styles.messageContent}>
          <div
            className={`${styles.bubble} ${
              isAI ? styles.aiBubble : styles.userBubble
            }`}
          >
            <p className={styles.messageText}>{message}</p>
          </div>

          {timestamp && (
            <span
              className={`${styles.timestamp} ${
                isAI ? styles.aiTimestamp : styles.userTimestamp
              }`}
            >
              {timestamp}
            </span>
          )}
        </div>

        {!isAI && (
          <div className={styles.userAvatar}>
            <iconify-icon
              icon="mdi:account"
              className={styles.avatarIcon}
            ></iconify-icon>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
