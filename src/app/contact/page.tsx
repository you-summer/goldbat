import Header from "@/components/Header/Header";
import style from "./page.module.css";
import ContactForm from "./components/ContactForm";

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
