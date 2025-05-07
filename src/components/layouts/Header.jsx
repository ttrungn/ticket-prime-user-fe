import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, Drawer, Button, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import UserDropdown from '../UserDropdown/UserDropdown';
import { toSlug } from '../../utils/stringConverter';
import './styles.css';

const { useBreakpoint } = Grid;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { user } = useSelector(state => state.auth);
  const categories = useSelector(state => state.category.categories);
  const screens = useBreakpoint();
  const location = useLocation();

  // Build menu items from categories
  const menuItemsLeft = categories.map((category, index) => ({
    key: String(index),
    label: (
      <Link className="menu-item" to={`/category/${toSlug(category.name)}`}>
        {category.name}
      </Link>
    ),
  }));

  // Determine which category is currently active (highlighted)
  const selectedCategoryKey = categories.findIndex(category =>
    location.pathname.includes(`/category/${toSlug(category.name)}`)
  );
  const selectedKeys = location.pathname === '/' ? [] : [String(selectedCategoryKey)];

  // Right-side menu (auth/login)
  const menuItemsRight = [
    {
      key: 'auth',
      label: screens.lg ? (
        user ? (
          <UserDropdown />
        ) : (
          <Link className="menu-item" to="/login">
            Login / Register
          </Link>
        )
      ) : (
        <UserDropdown />
      ),
    },
  ];

  return (
    <header className="header bg-black">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="w-[75px] h-[75px]" />
            </Link>
          </div>
          <div className="navbar-categories">
            {screens.lg ? (
              <Menu mode="horizontal" items={menuItemsLeft} selectedKeys={selectedKeys} disabledOverflow />
            ) : (
              <>
                <Button icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} />
                <Drawer
                  styles={{
                    content: {
                      backgroundColor: '#000', // Set the drawer content background
                    },
                  }}
                  width="100%"
                  placement="left"
                  onClose={() => setDrawerVisible(false)}
                  open={drawerVisible}
                >
                  <Menu mode="vertical" items={menuItemsLeft} selectedKeys={selectedKeys} />
                </Drawer>
              </>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <Menu mode="horizontal" items={menuItemsRight} disabledOverflow />
        </div>
      </div>
    </header>
  );
};

export default Header;
