import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const { Header, Content, Footer } = Layout;
const isLoggedIn = false;
const menuItems = [
  {
    key: '1',
    label: <Link to="/?category=all">All Events</Link>,
  },
  {
    key: '2',
    label: <Link to="/?category=concerts">Concerts</Link>,
  },
  {
    key: '3',
    label: <Link to="/?category=sports">Sports</Link>,
  },
  {
    key: '4',
    label: (
      <Link to="/?category=arts-theater-comedy">Arts, Theater & Comedy</Link>
    ),
  },
  {
    key: '5',
    label: <Link to="/?category=family">Family</Link>,
  },
  {
    key: '6',
    label: <Link to="/?category=festivals">Festivals</Link>,
  },
];

const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary, colorText },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: colorBgContainer,
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              className="demo-logo"
              style={{
                width: '120px',
                height: '32px',
                backgroundColor: colorPrimary,
                marginRight: '16px',
              }}
            />
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{ fontSize: '1rem', flexWrap: 'nowrap' }}
              defaultSelectedKeys={['1']}
            />
          </div>
          <div>
            {isLoggedIn ? (
              <Link to="/profile" className="menu-item menu-item-right">
                Profile
              </Link>
            ) : (
              <Link to="/login" className="menu-item menu-item-right">
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()}{' '}
        <span style={{ fontWeight: 'bold' }}>Ticket Prime</span>. All rights
        reserved.
      </Footer>
    </Layout>
  );
};

export default MainLayout;
