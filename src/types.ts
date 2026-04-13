import { ReactNode } from "react";

export type NavItem = {
  id: number;
  menu: string;
  url: string;
  icon: ReactNode;
};
