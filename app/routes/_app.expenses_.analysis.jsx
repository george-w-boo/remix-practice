import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';

import analysisStyles from '~/styles/analysis.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'first expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'second expense',
    amount: 4.99,
    date: new Date().toISOString(),
  },
]

export default function ExpensesAnalysisPage() {
  return (
      <main>
        <Chart expenses={DUMMY_EXPENSES} />
        <ExpenseStatistics expenses={DUMMY_EXPENSES} />
      </main>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: analysisStyles}]
}