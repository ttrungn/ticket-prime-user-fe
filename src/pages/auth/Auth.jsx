import { useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Navigate } from 'react-router-dom';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

const Auth = ({ isLogin }) => {
  const { user, loading } = useSelector(state => state.auth);
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div className="relative min-h-[650px]">
        {loading ? (
          <LoadingContainer content="Signing you in..." />
        ) : (
          <div className="w-full min-h-[600px] lg:-w-4xl bg-white shadow-lg rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AuthForm isLogin={isLogin} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
