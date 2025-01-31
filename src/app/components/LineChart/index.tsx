import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

interface Transaction {
  transaction_type: "deposit" | "withdraw";
  amount: string;
  date: number;
}

export default function LineChart({ transactions }: { transactions: Transaction[] }) {
  const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

  const groupedData = months.reduce((acc, month) => {
    acc[month] = { deposits: 0, withdrawals: 0 };
    return acc;
  }, {} as Record<string, { deposits: number; withdrawals: number }>);

  transactions.forEach(({ transaction_type, amount, date }) => {
    const formattedDate = new Date(date);
    const monthIndex = formattedDate.getMonth();
    const month = months[monthIndex];

    if (month) {
      const value = parseFloat(amount);
      if (transaction_type === "deposit") {
        groupedData[month].deposits += value;
      } else if (transaction_type === "withdraw") {
        groupedData[month].withdrawals += value;
      }
    }
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "Entradas",
        data: months.map((month) => groupedData[month].deposits),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#4CAF50",
        tension: 0.4,
      },
      {
        label: "Despesas",
        data: months.map((month) => groupedData[month].withdrawals),
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#F44336",
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h3>Fluxo Financeiro</h3>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
}
