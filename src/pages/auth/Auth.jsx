import { useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Navigate } from 'react-router-dom';

const Auth = ({ isLogin }) => {
  const { user } = useSelector(state => state.auth);
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full min-h-[500px] lg:-w-4xl bg-white shadow-lg rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Left Panel */}
      <div className="bg-black relative text-white p-10 flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('loginBackground.png')" }}
        ></div>
      </div>

      {/* Right Panel */}
      <AuthForm isLogin={isLogin} />
    </div>
  );
};

export default Auth;
