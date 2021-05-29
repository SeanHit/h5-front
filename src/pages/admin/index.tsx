import React from 'react';
import { Layout } from 'antd';
import LeftNav from '../../components/LeftNav/index'
import './index.less';


const { Sider, Content } = Layout;
export default ({ children }) => {
  return (
    <Layout className='layout'>
      <Sider>
        <LeftNav />
      </Sider>
      <Content >
        {children}
      </Content>
    </Layout>
  );
};


