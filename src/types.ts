import { ReactNode } from "react";
import { Timestamp } from "firebase/firestore";

export type NavItem = {
  id: number;
  menu: string;
  url: string;
  icon: ReactNode;
};

export type Comment = {
  content: string;
  createdAt: Timestamp;
};
