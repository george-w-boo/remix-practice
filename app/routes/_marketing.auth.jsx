import { redirect } from '@remix-run/node';
import AuthForm from '~/components/auth/AuthForm';
import { validateCredentials } from '~/data/validation.server';
import authStyles from '~/styles/auth.css';
import { signup } from '../data/auth.server';

export default function AuthenticationPage() {
  return (
    <AuthForm />
  );
}

export function links() {
  return [{rel: 'stylesheet', href: authStyles}]
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  console.log(credentials);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === 'login') {
      // log in logic
    } else {
      await signup(credentials);
      redirect('/expenses');
    }
  } catch (error) {
    if (error.status === 402) {
      return { credentials: error.message }
    }
  }

  return null;
}
