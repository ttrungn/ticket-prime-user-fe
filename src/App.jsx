import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import './App.css';
import Auth from './pages/auth/Auth';
import AuthGoogleCallback from './pages/auth/AuthGoogleCallback';
import Error from './exceptions/Error';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/register" element={<Auth isLogin={true} />} />
          <Route path="/auth/google/customer/callback" element={<AuthGoogleCallback role="customer" />} />
          <Route path="/auth/google/organizer/callback" element={<AuthGoogleCallback role="organizer" />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error statusCode={404} message="Page not found" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
