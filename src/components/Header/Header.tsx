import style from "./Header.module.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className={style.container}>
      <Nav />

      <div>
        <div>날씨</div>
        <div></div>
      </div>
    </div>
  );
}
