import React, { useEffect } from 'react';
import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from './resource';
import { useAuth } from '../context/AuthContext';

function Logout() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const { setAuth } = useAuth(); 
  
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Logout Successful',
      description: 'You have been logged out',
    });
  };

  const handleClick = () => {
    handleLogout(navigate);
    // setAuth(false); =>> masih gagal
    openNotificationWithIcon('success');
  };

  useEffect(() => {
    handleClick(); 
  }); 
}

export default Logout;
