import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '../data/expenses.server';

export default function AddExpensePage() {
  const navigate = useNavigate();

  const closeModal = () => navigate(-1);

  return (
    <Modal onClose={closeModal}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  console.log('expenseData', expenseData);

  await addExpense(expenseData);

  return redirect('/expenses');
}
