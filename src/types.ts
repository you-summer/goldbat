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

export type Inquiry = {
  email: string;
  message: string;
};

export type GoldItem = {
  basDt: string;
  clpr: string;
  isinCd: string;
  hipr?: string;
  lopr?: string;
  trqu?: string;
};

export type GoldAPIResponse = {
  response: {
    body: {
      items: {
        item: GoldItem[];
      };
    };
  };
};

export type GoldAPIResult =
  | { status: true; gold1kg: GoldItem[] }
  | { status: false; error: string };

export type ChartItem = {
  data: string;
  price: number;
};
