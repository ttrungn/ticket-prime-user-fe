import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import LoadingContainer from '../LoadingContainer/LoadingContainer'; // assuming path
import { signInUser } from '../../api/auth';

const AuthForm = ({ isLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isRoleChoosen, setIsRoleChoosen] = useState(false);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email) && email.length <= 320;

  const handleRoleChange = selectedRole => {
    setRole(selectedRole);
    setIsRoleChoosen(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!isEmailValid || password.length === 0) return;

    setLoading(true);
    signInUser(email, password, role)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('AT', res.data.accessToken);
          localStorage.setItem('AT_EX', res.data.expiresIn);
          navigate('/', { replace: true });
        }
      })
      .catch(err => {
        navigate('/error', {
          replace: true,
          state: {
            statusCode: err.response?.status,
            message: 'Cannot sign you in right now',
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="p-10 flex flex-col justify-center" onSubmit={handleSubmit}>
      {loading && <LoadingContainer content="Signing you in..." />}
      {!loading && !isRoleChoosen && (
        <>
          <h2 className="mb-4 text-lg font-semibold text-center">Please choose your role</h2>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => handleRoleChange('customer')}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange('organizer')}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Organizer
            </button>
          </div>
        </>
      )}

      {!loading && isRoleChoosen && (
        <>
          <p className="mb-4 text-sm text-gray-600">If you don’t have an account you will be prompted to create one.</p>

          <label className="text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            disabled={loading}
            className={`border rounded px-4 py-2 mb-2 ${isEmailTouched && !isEmailValid ? 'border-red-500' : ''}`}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => setIsEmailTouched(true)}
          />
          <p className={`text-sm ${isEmailTouched && !isEmailValid ? 'text-red-500' : 'text-white'} mb-4`}>
            Please enter a valid email address.
          </p>

          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            disabled={loading}
            className={`border rounded px-4 py-2 mb-2 ${
              isPasswordTouched && password.length === 0 ? 'border-red-500' : ''
            }`}
            onChange={e => setPassword(e.target.value)}
            onBlur={() => setIsPasswordTouched(true)}
          />
          <p className={`text-sm ${isPasswordTouched && password.length === 0 ? 'text-red-500' : 'text-white'} mb-4`}>
            Please enter your password.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200 font-semibold"
          >
            Sign In
          </button>

          <GoogleLoginButton role={role} buttonType="button" />
        </>
      )}

      <p className="text-xs text-gray-500 mt-4 text-center">
        By continuing, you agree to the{' '}
        <a href="#" className="text-blue-600 underline">
          Terms of Use
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default AuthForm;
