import React, { useState } from 'react';
import { Menu, Drawer, Button, Grid } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import './styles.css';

const { useBreakpoint } = Grid;
const isLoggedIn = false;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const screens = useBreakpoint();
  const categories = useSelector(state => state.category.categories);
  const menuItemsLeft = categories.map((category, index) => ({
    key: String(index),
    label: (
      <Link className="menu-item" to={`/category/${category.toLowerCase().replace(/ /g, '-')}`}>
        {category}
      </Link>
    ),
  }));

  return (
    <header className="header border-b-1">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src="/logo.png" alt="" className="w-[50px] h-[50px]" />
            </Link>
          </div>
          <div className="navbar-categories">
            {screens.lg ? (
              <Menu style={{ borderBottom: 'none' }} mode="horizontal" items={menuItemsLeft} disabledOverflow />
            ) : (
              <>
                <Button icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} />
                <Drawer width="100%" placement="left" onClose={() => setDrawerVisible(false)} open={drawerVisible}>
                  <Menu mode="vertical" items={menuItemsLeft} defaultSelectedKeys={['1']} />
                </Drawer>
              </>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <Link to={isLoggedIn ? '/profile' : '/login'} className="menu-item">
            {screens.lg ? isLoggedIn ? <UserOutlined /> : 'Login / Register' : <UserOutlined />}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
