import WeatherAPI from "@/actions/weatherAPI";
import style from "./Weather.module.css";

export default async function Weather() {
  const response = await WeatherAPI();
  // console.log(response);
  if (!response.status) {
    return <div>{response.error}</div>;
  }

  return (
    <div className={style.container}>
      <div>
        지금 <span className={style.hampyoeng}>함평군</span>
      </div>
      <div>
        날씨는? <span className={style.temp}>{response.temp}°C</span>
      </div>
    </div>
  );
}
