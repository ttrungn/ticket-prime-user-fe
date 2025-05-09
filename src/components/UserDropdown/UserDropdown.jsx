import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';

const UserDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  const items = [{ label: <button>Log out</button>, key: '0' }];
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space>
        <UserOutlined style={{ color: '#ffffff' }} />
      </Space>
    </Dropdown>
  );
};

export default UserDropdown;
