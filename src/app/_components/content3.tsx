import style from "./content3.module.css";
import GoldAPI from "@/actions/goldAPI";
import CountUp from "@/components/CountUp";

export default async function Content3() {
  const response = await GoldAPI();
  if (!response.status) {
    return <div>{response.error}</div>;
  }

  const gold1kg = response.gold1kg;

  const price = Math.floor((Number(gold1kg[0].clpr) * 162000) / 100000000);

  console.log("content3", gold1kg);

  // 황금 박쥐상 순금 무게 162kg

  return (
    <div className={style.container}>
      <div className={style.textSection}>
        <div className={style.goldBat}>황금박쥐상</div>
        <div className={style.weight}>순금 162kg</div>
        <div className={style.referDate}>
          {gold1kg[0].basDt.slice(0, 4)}.{gold1kg[0].basDt.slice(4, 6)}.
          {gold1kg[0].basDt.slice(6, 8)} 기준
        </div>
        <div className={style.price}>
          약{" "}
          <CountUp
            from={0}
            to={price}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
          억
        </div>
      </div>
      <div className={style.chartSection}>여기가 차트섹션</div>
    </div>
  );
}
