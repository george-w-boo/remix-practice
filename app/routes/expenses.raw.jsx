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

export function loader() {
  return DUMMY_EXPENSES;
}
