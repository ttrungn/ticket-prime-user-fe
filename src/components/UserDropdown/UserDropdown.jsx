import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

const UserDropdown = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const items = [{ label: <button>Log out</button>, key: '0' }];
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space>
        <UserOutlined onClick={handleLogout} />
      </Space>
    </Dropdown>
  );
};

export default UserDropdown;
