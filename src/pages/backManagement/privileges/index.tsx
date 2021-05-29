import React, { Component } from 'react'
import LeftNav from '../../../components/LeftNav'
import { Layout } from 'antd';
/*
* 权限管理
* */
const { Sider } = Layout;
export default class Privileges extends Component {
    render() {
        return (
            <div style={{ height: '100%', display: 'flex' }}>
                <Sider>
                    <LeftNav />
                </Sider>
            权限管理路由
            </div>
        )
    }
}