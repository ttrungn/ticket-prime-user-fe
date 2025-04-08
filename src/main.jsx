import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ConfigProvider } from 'antd';
import themeConfig from './configs/themeConfig.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={
          themeConfig
      }
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
