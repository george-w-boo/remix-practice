import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { getExpense } from '~/data/expenses.server';

export default function ViewEditExpensePage() {
  const navigate = useNavigate();

  const closeModal = () => navigate(-1);

  return (
    <Modal onClose={closeModal}>
      <ExpenseForm />
    </Modal>
  );
}

export async function loader({ params }) {
  const expenseId = params.id;

  const expense = await getExpense(expenseId);

  return expense;
}
