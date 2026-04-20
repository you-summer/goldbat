import style from "./Header.module.css";
import Nav from "./Nav";
import Weather from "./Weather";

export default function Header() {
  return (
    <div className={style.container}>
      <Nav />
      <Weather />
    </div>
  );
}
