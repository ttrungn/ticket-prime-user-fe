import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import MainLayout from './components/layouts/MainLayout';
import LoadingContainer from './components/LoadingContainer/LoadingContainer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Auth from './pages/auth/Auth';
import AuthGoogleCallback from './pages/auth/AuthGoogleCallback';
import Organizers from './pages/organizers/Organizers';
import Error from './exceptions/Error';

import { loadInitialData } from './store/loadInitialData';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    dispatch(loadInitialData());
    setIsInitializing(false);
  }, [dispatch]);

  if (isInitializing) return <LoadingContainer content="Loading..." />;

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Common routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/register" element={<Auth isLogin={false} />} />
          <Route path="/auth/google/:role/callback" element={<AuthGoogleCallback />} />

          {/* Category-based organizers routes */}
          <Route path="/category/:categorySlug" element={<Organizers />} />

          {/* Error pages */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error statusCode={404} message="Page not found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
