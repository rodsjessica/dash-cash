"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import transactionsData from "../transactions.json";
import LineChart from "../components/LineChart";
import { MainContainer, ChartsContainer, ChartWrapper, CardsContainer } from "./styles";

export default function Dashboard() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<any>([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setTransactions(transactionsData);
    }
  }, [router]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainContainer>
        <h1>Dashboard Financeiro</h1>

        <CardsContainer>
          <Card transactions={transactions} />
        </CardsContainer>

        <ChartsContainer>
          <ChartWrapper>
            <Chart transactions={transactions} />
          </ChartWrapper>
          <ChartWrapper>
            <LineChart transactions={transactions} />
          </ChartWrapper>
        </ChartsContainer>
      </MainContainer>
    </div>
  );
}
