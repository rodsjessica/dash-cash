import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  flex-wrap: wrap; 
  margin-top: 20px;
`;

export const ChartWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 800px;
  display: flex;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;
