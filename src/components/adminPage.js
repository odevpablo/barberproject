import React, { useState } from 'react';
import '../App.css';
import {
  DesktopOutlined,
  LogoutOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Carga Horária', '1', <PieChartOutlined />),
  getItem('Configurar Horários', '2', <DesktopOutlined />),
  getItem('Barbeiros', 'sub1', <UserOutlined />, [
    getItem('Emerson', '3'),
  ]),
  getItem('Suporte', '9', <QuestionCircleOutlined />),
];

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Layout
      id="AdminPage"
      style={{
        minHeight: '100vh',
        zIndex: 1001,
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          ></Breadcrumb>
          <div
            className="viewAdmin"
            style={{
              padding: 24,
              minHeight: 680,
              width: '85vw',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >

            
          </div>
        </Content>
      </Layout>
      <Button id='back' type="primary" icon={<LogoutOutlined />} onClick={handleGoBack}>
          </Button>
    </Layout>
    
  );
};

export default AdminPage;
