"use client";

import { ChartItem } from "@/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function LineChart({ formattData }: { formattData: ChartItem[] }) {
  const sortedData = [...formattData].sort(
    (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime(),
  );
  const prices = sortedData.map((item) => {
    return item.price;
  });
  const labels = sortedData.map((item) => {
    return item.data;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "가격(g/원)",
        data: prices,
        borderColor: "gold", // 선 색
        backgroundColor: "gold", // 채우기
        pointBackgroundColor: "gold", // 점 색
        pointBorderColor: "gray", // 점 테두리
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};
