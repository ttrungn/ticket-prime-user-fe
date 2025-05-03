import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Auth from './pages/auth/Auth';
import AuthGoogleCallback from './pages/auth/AuthGoogleCallback';
import Error from './exceptions/Error';
import ProtectedRoute from './routes/protectedRoute';

import './App.css';
import LoadingContainer from './components/LoadingContainer/LoadingContainer';
import { loadInitialData } from './store/loadInitialData';

function App() {
  const dispatch = useDispatch();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    dispatch(loadInitialData());
    setIsInitializing(false);
  }, [dispatch]);

  if (isInitializing) return <LoadingContainer content={'Loading'} />;

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/register" element={<Auth isLogin={false} />} />
          <Route path="/auth/google/customer/callback" element={<AuthGoogleCallback role="customer" />} />
          <Route path="/auth/google/organizer/callback" element={<AuthGoogleCallback role="organizer" />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error statusCode={404} message="Page not found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
