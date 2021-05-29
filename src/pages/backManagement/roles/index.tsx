import React, { Component } from 'react'
import { Layout, Table } from 'antd';
import LeftNav from '../../../components/LeftNav'
import { columns } from './config'
/*
* 角色管理路由
* */
const { Sider } = Layout;
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export default class Roles extends Component {
    render() {
        return (
            <div style={{ height: '100%', display: 'flex' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                {/* <Table columns={columns} dataSource={data} /> */}
            </div>
        )
    }
}