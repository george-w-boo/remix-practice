import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css';

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

  // TODO: validate user input

  if (authMode === 'login') {
    // log in logic
  } else {
    // sign up logic
  }
}
