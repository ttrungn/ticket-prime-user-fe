import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

import './styles.css';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Content className="lg:container lg:mx-auto px-8 lg:py-8 mt-7 relative">
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
