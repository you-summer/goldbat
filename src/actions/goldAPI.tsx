"use server";

export default async function GoldAPI() {
  try {
    const SERVER_KEY = process.env.GOLD_API_KEY!;

    const url = process.env.NEXT_PUBLIC_GOLD_API_URL;

    const params = new URLSearchParams({
      serviceKey: SERVER_KEY,
      pageNo: "1",
      numOfRows: "10",
      resultType: "json",
    });

    //basDt = 날짜
    //clpr = 종가, 정규시장의 매매시간 종료까지 형성되는 최종가격
    //hipr = 고가, 하루 중 가격의 최고가격
    //lopr = 저가, 하루 중 가격의 최저가격
    //trqu = 거래량

    const response = await fetch(`${url}?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result = await response.json();
    // console.log(result.response.body.items);

    const data = result.response.body.items;

    // console.log("data", data);
    // console.log("data.item", data.item);
    // console.log("타입", typeof data.item);

    const gold1kg = data.item.filter((item) => {
      // 금 1kg만 조회되게 가공
      return item.isinCd === "KRD040200002";
    });

    // console.log("gold1kg", gold1kg);

    return {
      status: true,
      gold1kg,
    };
  } catch (err) {
    return {
      status: false,
      error: `금 시세 조회 실패 : ${err}`,
    };
  }
}
