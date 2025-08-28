import React from "react";

const Messages: React.FC = () => {
  return (
    <div style={{ 
      background: "white", 
      padding: "30px", 
      borderRadius: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ 
        fontSize: "24px", 
        fontWeight: "600", 
        color: "#1a1a1a", 
        margin: "0 0 20px 0" 
      }}>
        Messages
      </h2>
      <p style={{ color: "#666" }}>
        Messaging functionality will be implemented here.
      </p>
    </div>
  );
};

export default Messages;

