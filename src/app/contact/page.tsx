import Header from "@/components/Header/Header";
import style from "./page.module.css";
import ContactForm from "./components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "황금박쥐 - 문의하기",
  description: "제작자에게 문의남기기",
  openGraph: {
    title: "황금박쥐 - 문의하기",
    description: "제작자에게 문의남기기",
    images: ["/thumbnail.png"],
  },
};

export default function Page() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <ContactForm />
      </div>
    </div>
  );
}
