// types/chat.types.ts
export interface Message {
  id: number;
  message: string;
  isAI: boolean;
  timestamp: string;
}

export interface ChatBubbleProps {
  message: string;
  isAI?: boolean;
  timestamp?: string;
}

export interface PatientNavState {
  currentPage: string;
  aiSideBar: boolean;
}

export interface RootState {
  patientNav: PatientNavState;
}