import { ReactNode } from "react";

export type NavItem = {
  id: number;
  menu: string;
  url: string;
  icon: ReactNode;
};

export type Comment = {
  commentNumber: number;
  content: string;
  createdAt: string;
};
