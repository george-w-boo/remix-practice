import { Link, useSearchParams } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

function AuthForm() {
  const [searchParams] = useSearchParams();

  const authMode = searchParams.get('mode') || 'login';

  const authIcon = authMode === 'login' ? <FaLock /> : <FaUserPlus />;

  const submitBtnText = authMode === 'login' ? 'Login' : 'Sign Up';

  const toggleLinkPath = authMode === 'login' ? '?mode=signup' : '?mode=login';
  const toggleLinkText = authMode === 'login' ?  'Create new user' : 'Log in with existing user';


  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authIcon}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitBtnText}</button>
        <Link to={toggleLinkPath}>{toggleLinkText}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
