import { Outlet } from "@remix-run/react";
// import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import ExpensesList from '~/components/expenses/ExpensesList';
import expensesStyles from '~/styles/expenses.css';

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

export default function ExpensesLayout() {
  return (
      <>
        <Outlet />
        <main>
          <ExpensesList expenses={DUMMY_EXPENSES} />
        </main>
      </>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: expensesStyles}]
}