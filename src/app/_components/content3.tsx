import style from "./content3.module.css";
import GoldAPI from "@/actions/goldAPI";

export default async function Content3() {
  const response = await GoldAPI();
  if (!response.status) {
    return <div>{response.error}</div>;
  }
  const gold1kg = response.gold1kg;

  console.log("content3", gold1kg);

  // 황금 박쥐상 순금 무게 162kg

  return (
    <div className={style.container}>
      <div>
        <div>황금박쥐상의 순금무게 162kg</div>
        <div>
          {gold1kg[0].basDt.slice(0, 4)}.{gold1kg[0].basDt.slice(4, 6)}.
          {gold1kg[0].basDt.slice(6, 8)} 기준
        </div>
        <div> 약 {String(Number(gold1kg[0].clpr) * 162000).slice(0, 3)}억</div>
      </div>
      <div>여기가 차트섹션</div>
    </div>
  );
}
