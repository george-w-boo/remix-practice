import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { deleteExpense, updateExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';
// import { getExpense } from '~/data/expenses.server';

export default function ViewEditExpensePage() {
  const navigate = useNavigate();

  const closeModal = () => navigate(-1);

  return (
    <Modal onClose={closeModal}>
      <ExpenseForm />
    </Modal>
  );
}

// export async function loader({ params }) {
//   const expenseId = params.id;

//   const expense = await getExpense(expenseId);

//   return expense;
// }

export async function action({ params, request }) {
  const expenseId = params.id;

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
  
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }
  
    await updateExpense(expenseId, expenseData);
  
    return redirect('/expenses');
  } else if (request.method === 'DELETE') {
    await deleteExpense(expenseId);

    return redirect('/expenses');
    // return { deletedId: expenseId };
  }
}
