import Header from "@/components/Header";
import style from "./page.module.css";

export default function Page() {
  return (
    <div className={style.container}>
      <Header />
      <div>위치</div>
    </div>
  );
}
