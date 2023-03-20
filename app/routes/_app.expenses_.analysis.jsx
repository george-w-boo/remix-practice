import { useLoaderData, useCatch } from "@remix-run/react";

import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import Error from '~/components/util/Error';

import analysisStyles from '~/styles/analysis.css';
import { getExpenses } from '../data/expenses.server';
import { json } from "react-router";

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();

  return (
      <main>
          <Chart expenses={expenses} />
          <ExpenseStatistics expenses={expenses} /> 
      </main>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: analysisStyles}]
}

export async function loader() {
  const expenses = await getExpenses();

  const hasExpenses = expenses && expenses.length > 0;

  if (!hasExpenses) {
    throw json(
      { message: 'No expenses so far...' },
      {
        status: 404,
        statusText: 'Expenses not found',
      }
    )
  }

  return expenses;
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  return <main>
    <Error title={caughtResponse.message}>
      <p>{caughtResponse.data?.message || 'Something went wrong...'}</p>
    </Error>
  </main>
}