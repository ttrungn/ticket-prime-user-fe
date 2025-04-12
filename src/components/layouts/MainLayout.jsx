import { Breadcrumb, Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

import './styles.css';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <Content className="lg:container lg:mx-auto px-8 lg:py-8 mt-7">
        {/* Uncomment and customize Breadcrumb if needed */}
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
