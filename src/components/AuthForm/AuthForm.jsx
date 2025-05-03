import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import LoadingContainer from '../LoadingContainer/LoadingContainer';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/authSlice';
import RoleSelector from './RoleSelector';
import InputField from '../InputField/InputField';

const AuthForm = ({ isLogin }) => {
  const navigate = useNavigate();
  const [isRoleChoosen, setIsRoleChoosen] = useState(false);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email) && email.length <= 320;

  const handleRoleChange = selectedRole => {
    setRole(selectedRole);
    setIsRoleChoosen(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password, role }))
      .unwrap()
      .then(() => navigate('/', { replace: true }))
      .catch(() => {});
  };

  return (
    <form className="p-10 flex flex-col justify-center" onSubmit={handleSubmit}>
      {loading && <LoadingContainer content="Signing you in..." />}
      {!loading && !isRoleChoosen && <RoleSelector onSelect={handleRoleChange} />}
      {!loading && isRoleChoosen && (
        <>
          <p className="mb-4 text-sm text-gray-600">If you don’t have an account you will be prompted to create one.</p>

          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => setIsEmailTouched(true)}
            error={isEmailTouched && !isEmailValid ? 'Please enter a valid email address.' : ''}
          />

          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={() => setIsPasswordTouched(true)}
            error={isPasswordTouched && password.length === 0 ? 'Please enter your password.' : ''}
          />

          <button
            type="submit"
            className="bg-black mb-6 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200 font-semibold"
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
