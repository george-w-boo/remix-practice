import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export default function AddExpensePage() {
  const navigate = useNavigate();

  const closeModal = () => navigate(-1);

  return (
    <Modal onClose={closeModal}>
      <ExpenseForm />
    </Modal>
  );
}
