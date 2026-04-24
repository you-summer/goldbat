"use server";

import { GoldAPIResponse, GoldAPIResult } from "@/types";

export default async function GoldAPI(): Promise<GoldAPIResult> {
  try {
    const SERVER_KEY = process.env.GOLD_API_KEY!;

    const url = process.env.NEXT_PUBLIC_GOLD_API_URL;

    const params = new URLSearchParams({
      serviceKey: SERVER_KEY,
      pageNo: "1",
      numOfRows: "14",
      resultType: "json",
    });

    //basDt = 날짜
    //clpr = 종가, 정규시장의 매매시간 종료까지 형성되는 최종가격
    //hipr = 고가, 하루 중 가격의 최고가격
    //lopr = 저가, 하루 중 가격의 최저가격
    //trqu = 거래량

    const response = await fetch(`${url}?${params.toString()}`, {
      next: { revalidate: 3600 }, // 1시간마다 호출
      // 데이터 갱신은 기준일자로부터 영업일 하루 뒤 오후 1시 이후에 업데이트
      // 예를 들어, 금요일 데이터는 차주 월요일에 제공됩니다. (월요일이 공휴일인 경우, 다음 영업일에 제공됩니다)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result: GoldAPIResponse = await response.json();
    // console.log(result.response.body.items);

    const data = result.response.body.items;

    // console.log("data", data);
    // console.log("data.item", data.item);
    // console.log("타입", typeof data.item);

    const gold1kg = data.item.filter((item: any) => {
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
