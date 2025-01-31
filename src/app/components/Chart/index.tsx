import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Transaction {
  transaction_type: 'deposit' | 'withdraw';
  amount: string;
}

export default function Chart({ transactions }: { transactions: Transaction[] }) {
  const deposits = transactions.filter((f) => f.transaction_type === 'deposit').length;
  const withdrawals = transactions.filter((f) => f.transaction_type === 'withdraw').length;

  const data = {
    labels: ['Entradas', 'Despesas'],
    datasets: [
      {
        label: 'Transações',
        data: [deposits, withdrawals],
        backgroundColor: ['#4CAF50', '#F44336'],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Transações Financeiras',
      },
    },
  };

  return <Bar data={data} options={options} />;
}
