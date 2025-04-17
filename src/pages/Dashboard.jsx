import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onClick={({ key }) => navigate(`/${key}`)}
        >
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
          <Menu.Item key="products">Products</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <h1>Welcome to Dashboard</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
