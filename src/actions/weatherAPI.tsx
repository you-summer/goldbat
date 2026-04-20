"use server";

export default async function WeatherAPI() {
  function getBaseDate() {
    const now = new Date();
    return now.toISOString().slice(0, 10).replace(/-/g, "");
  }

  function getBaseTime() {
    const now = new Date();
    const hour = now.getHours();
    return String(hour - 1).padStart(2, "0") + "00";
  }

  try {
    const SERVER_KEY = decodeURIComponent(process.env.WEATHER_API_KEY!);
    const url = process.env.NEXT_PUBLIC_WEATHER_API_URL;

    const params = new URLSearchParams({
      serviceKey: SERVER_KEY,
      pageNo: "1",
      numOfRows: "10",
      dataType: "JSON",
      base_date: getBaseDate(),
      base_time: getBaseTime(),
      nx: "52",
      ny: "71",
    });

    console.log("요청 URL:", `${url}/getUltraSrtNcst?${params.toString()}`);

    const response = await fetch(
      `${url}/getUltraSrtNcst?${params.toString()}`,
      {
        next: { revalidate: 360 },
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result = await response.json();
    const items = result.response.body.items.item;

    // 👉 T1H만 찾기
    const tempItem = items.find((item: any) => item.category === "T1H");

    console.log("오류?", tempItem);

    return {
      status: true,
      temp: tempItem?.obsrValue ?? null,
    };
  } catch (err) {
    return {
      status: false,
      error: `날씨 조회 실패 : ${err}`,
    };
  }
}
