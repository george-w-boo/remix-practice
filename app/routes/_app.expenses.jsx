import { Link, Outlet } from "@remix-run/react";
import { FaPlus, FaDownload } from 'react-icons/fa'
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
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <main>
          <ExpensesList expenses={DUMMY_EXPENSES} />
        </main>
      </>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: expensesStyles}]
}