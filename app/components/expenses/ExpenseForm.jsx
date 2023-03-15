import { Form, Link, useActionData, useLoaderData, useNavigation } from "@remix-run/react";

function ExpenseForm() {
  const validationErrors = useActionData();
  const expenseData = useLoaderData();
  const { state } = useNavigation();

  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  const isSubmitting = state !== 'idle';
  const submitBtnText = isSubmitting ? 'Saving...' : 'Save Expense';

  const defaultExpense = expenseData
    ? {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date ? expenseData.date.slice(0, 10) : '',
      }
    : {
        title: '',
        amount: '',
        date: '',
      };

  // const submit = useSubmit(); // import from from "@remix-run/react"

  // function submitHandler(event) {
  //   event.preventDefault();

  //   console.log('// you could do some clien-side validation here...');

  //   submit(event.target, {
  //     action: 'expense/add',
  //     method: 'post',
  //   });
  // }

  const { title, amount, date } = defaultExpense;

  return (
    <Form
      method="post"
      className="form"
      id="expense-form"
      // onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" defaultValue={title} required maxLength={30} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            defaultValue={amount}
            min="0"
            step="0.01"
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" defaultValue={date} max={today} required />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{submitBtnText}</button>
        <Link to={-1}>Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
