import React, { useState } from "react";
import styles from "./AIChat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setAiSideBar } from "../../../store/slices/patientNavSlice";
import AiSideBar from "../ai/components/AiSideBar";
import { InputContainer } from "./components/InputContainer";
import ChatBubble from "./components/ChatBubble"; // Import the new component
import ChatSidebar from "./components/ChatSidebar";

interface Message {
  id: number;
  message: string;
  isAI: boolean;
  timestamp: string;
}

interface PatientNavState {
  currentPage: string;
  aiSideBar: boolean;
  searchChat: boolean;
}

interface RootState {
  patientNav: PatientNavState;
}

const AIChat: React.FC = () => {
  const [expandPage, setExpandPage] = useState(true);

  // Sample chat messages for demonstration
  const [messages]: any = useState<Message[]>([
    {
      id: 1,
      message:
        "Hello! I'm your AI Consultant. How can I help you with drugs, dosages, or symptoms today?",
      isAI: true,
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      message: "What are the side effects of aspirin?",
      isAI: false,
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      message:
        "Aspirin commonly causes side effects including stomach irritation, heartburn, and increased bleeding risk. More serious side effects can include stomach ulcers and allergic reactions. It's important to take aspirin with food to minimize stomach irritation. Would you like more specific information about any of these effects?",
      isAI: true,
      timestamp: "10:31 AM",
    },
    {
      id: 4,
      message: "Yes, tell me more about the bleeding risk.",
      isAI: false,
      timestamp: "10:32 AM",
    },
    {
      id: 5,
      message:
        "Aspirin increases bleeding risk by irreversibly inhibiting platelet aggregation for 7-10 days. This means even small cuts may bleed longer, and there's increased risk of serious bleeding, especially gastrointestinal bleeding. Patients on blood thinners or with bleeding disorders should avoid aspirin unless specifically prescribed by their doctor.",
      isAI: true,
      timestamp: "10:33 AM",
    },
    {
      id: 6,
      message: "How much ibuprofen is safe to take daily?",
      isAI: false,
      timestamp: "10:35 AM",
    },
    {
      id: 7,
      message:
        "The maximum recommended daily dose of ibuprofen for adults is 3200mg, typically divided into 800mg doses taken 4 times daily. However, for over-the-counter use, the recommended maximum is 1200mg daily (400mg every 6-8 hours). Always take with food to protect your stomach, and don't exceed these limits without medical supervision.",
      isAI: true,
      timestamp: "10:35 AM",
    },
    {
      id: 8,
      message: "What about interactions with other medications?",
      isAI: false,
      timestamp: "10:36 AM",
    },
    {
      id: 9,
      message:
        "Ibuprofen can interact with several medications including blood thinners (warfarin), ACE inhibitors, diuretics, and lithium. It may reduce the effectiveness of blood pressure medications and increase the risk of kidney problems when combined with certain drugs. Always inform your pharmacist about all medications you're taking.",
      isAI: true,
      timestamp: "10:37 AM",
    },
    {
      id: 10,
      message: "Can I take acetaminophen with ibuprofen?",
      isAI: false,
      timestamp: "10:38 AM",
    },
    {
      id: 11,
      message:
        "Yes, acetaminophen and ibuprofen can generally be taken together safely as they work through different mechanisms. Some people alternate between them every 3-4 hours for better pain control. However, always follow dosing instructions for each medication separately and consult a healthcare provider for long-term use.",
      isAI: true,
      timestamp: "10:39 AM",
    },
    {
      id: 12,
      message: "What are the symptoms of a heart attack?",
      isAI: false,
      timestamp: "10:42 AM",
    },
    {
      id: 13,
      message:
        "Heart attack symptoms include chest pain or pressure, shortness of breath, nausea, sweating, and pain radiating to the left arm, jaw, or back. Women may experience more subtle symptoms like fatigue, dizziness, or upper abdominal pain. If you suspect a heart attack, call emergency services immediately - time is critical for treatment.",
      isAI: true,
      timestamp: "10:42 AM",
    },
    {
      id: 14,
      message: "Is chest pain always a sign of heart problems?",
      isAI: false,
      timestamp: "10:44 AM",
    },
    {
      id: 15,
      message:
        "No, chest pain has many causes including muscle strain, acid reflux, anxiety, lung issues, or costochondritis (rib cartilage inflammation). However, chest pain should always be evaluated by a healthcare professional, especially if it's severe, sudden, or accompanied by other symptoms like sweating, nausea, or shortness of breath.",
      isAI: true,
      timestamp: "10:45 AM",
    },
    {
      id: 16,
      message: "What should I do if I have a fever of 102°F?",
      isAI: false,
      timestamp: "10:47 AM",
    },
    {
      id: 17,
      message:
        "A fever of 102°F (38.9°C) should be monitored closely. Stay hydrated, rest, and consider fever reducers like acetaminophen or ibuprofen. Seek medical attention if the fever persists over 3 days, reaches 103°F or higher, or is accompanied by severe symptoms like difficulty breathing, persistent vomiting, or severe headache.",
      isAI: true,
      timestamp: "10:48 AM",
    },
    {
      id: 18,
      message: "Are there any natural remedies for headaches?",
      isAI: false,
      timestamp: "10:50 AM",
    },
    {
      id: 19,
      message:
        "Several natural approaches may help with headaches: staying hydrated, applying cold or heat therapy, gentle neck stretches, peppermint or lavender essential oils, adequate sleep, and stress management techniques. However, frequent or severe headaches warrant medical evaluation to rule out underlying conditions.",
      isAI: true,
      timestamp: "10:51 AM",
    },
    {
      id: 20,
      message: "How do I know if a medication is expired?",
      isAI: false,
      timestamp: "10:53 AM",
    },
    {
      id: 21,
      message:
        "Check the expiration date printed on the medication bottle or packaging. Expired medications may lose potency and effectiveness, and in rare cases could be harmful. Don't use medications past their expiration date. For liquid medications, also check for changes in color, smell, or consistency, which could indicate degradation.",
      isAI: true,
      timestamp: "10:54 AM",
    },
  ]);

  const { currentPage, aiSideBar, searchChat } = useSelector(
    (state: RootState) => state.patientNav
  );
  const dispatch = useDispatch();

  const handlePage = React.useCallback(
    (e: string) => {
      currentPage === "dashboard"
        ? dispatch(setPage(e))
        : dispatch(setPage("dashboard"));
      setExpandPage(!expandPage);
    },
    [dispatch, currentPage, expandPage]
  );

  const handleSideBar = (): void => {
    dispatch(setAiSideBar(!aiSideBar));
  };

  return (
    <div
      className={styles.AIChat}
      style={currentPage === "dashboard" ? { overflow: "hidden" } : {}}
    >
      {searchChat && (
        <div className={styles.Search} id="flexCenter">
          <ChatSidebar
            onChatSelect={(chatId: any) =>
              console.log("Selected chat:", chatId)
            }
            onNewChat={() => console.log("New chat created")}
          />
        </div>
      )}
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
              className={
                currentPage === "dashboard"
                  ? styles.sideIconsDashboard
                  : styles.sideIcons2
              }
            ></iconify-icon>
          </button>
        )}

        <h4 className={styles.title}>AI Consultant</h4>

        {currentPage !== "dashboard" ? (
          <div></div>
        ) : (
          <button className={styles.expand} onClick={() => handlePage("ai")}>
            <iconify-icon
              icon="streamline:line-arrow-expand-window-1-remix"
              className={styles.icon}
            ></iconify-icon>
          </button>
        )}
      </div>

      <div className={styles.historyContainer}>
        <p
          className={styles.contentTitle}
          id="smallText"
          style={currentPage === "ai" ? { marginLeft: "100px" } : {}}
        >
          {messages === "" && "Ask about a drug, dosage, or symptom..."}
        </p>

        <div className={styles.chatContent}>
          {/* Render chat messages */}
          {messages.map((msg: any) => (
            <ChatBubble
              key={msg.id}
              message={msg.message}
              isAI={msg.isAI}
              timestamp={msg.timestamp}
            />
          ))}
        </div>

        <div className={styles.inputWrapper}>
          <InputContainer />
        </div>
      </div>
    </div>
  );
};

export default AIChat;
