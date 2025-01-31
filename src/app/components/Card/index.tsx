import { CardContainer, CardItem } from './styles';

interface Transaction {
  transaction_type: 'deposit' | 'withdraw';
  amount: string;
}

export default function Card({ transactions }: { transactions: Transaction[] }) {
  console.log('=======', transactions.map((t) => t.transaction_type));

  const totalDeposit = transactions
    .filter((t) => t.transaction_type === 'deposit')
    .reduce((acc, t) => acc + parseFloat(t.amount) / 100, 0);

  const totalExpenses = transactions
    .filter((t) => t.transaction_type === 'withdraw')
    .reduce((acc, t) => acc + parseFloat(t.amount) / 100, 0);

  const saldoTotal = totalDeposit - totalExpenses;

  return (
    <CardContainer>
      <CardItem>Entradas: R$ {totalDeposit.toFixed(2)}</CardItem>
      <CardItem>Despesas: R$ {totalExpenses.toFixed(2)}</CardItem>
      <CardItem>Saldo: R$ {saldoTotal.toFixed(2)}</CardItem>
    </CardContainer>
  );
}