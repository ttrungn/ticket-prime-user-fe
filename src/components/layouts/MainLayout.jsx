import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import './styles.css';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Content className="lg:container lg:mx-auto px-8 lg:py-8 my-7">
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
