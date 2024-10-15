import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Avatar, Space } from 'antd';
import { useNavigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Sign-In-Screen'; // Importa el componente de SignIn












import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDHbHj4i1H_EHKbIM0OtLTbL-XSNy9osSs",
  authDomain: "acme-22e50.firebaseapp.com",
  projectId: "acme-22e50",
  storageBucket: "acme-22e50.appspot.com",
  messagingSenderId: "1097815768281",
  appId: "1:1097815768281:web:5e4faa82e26d233ea052c8",
  measurementId: "G-RCCBE3W23K"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);






const { Header, Content, Footer, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App = () => {
  const navigate = useNavigate(); // Hook para navegación
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Función que navega a la página de SignIn
  const handleAvatarClick = () => {
    navigate('/Sign-In-Screen');
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar shape="square" size={64} icon={<UserOutlined />} onClick={handleAvatarClick} style={{ cursor: 'pointer' }} />
          </Space>
        </Space>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
       
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©{new Date().getFullYear()} Created by Yerba Mate</Footer>
    </Layout>
  );
};

// Configura las rutas
const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Sign-In-Screen" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default Root;
