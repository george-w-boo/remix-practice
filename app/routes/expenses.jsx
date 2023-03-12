import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
      <main>
        <p>shared element</p>
        <Outlet />
      </main>
  );
}
