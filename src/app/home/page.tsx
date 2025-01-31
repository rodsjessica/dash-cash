"use client";

import Sidebar from "../components/Sidebar";
import { Container, Title, Description } from "./styles"; // Importe os componentes estilizados

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
        <Title>Bem-vindo à DashCash</Title>
        <Description>
          Esta é a página inicial do seu DashCash.
        </Description>
      </Container>
    </div>
  );
}