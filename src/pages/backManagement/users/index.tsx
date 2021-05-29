import React, { useEffect, useState } from 'react'
import { Layout, Table } from 'antd';
import LeftNav from '../../../components/LeftNav'
import { columns } from './config'
import req from '@/utils/req';
/*
* 用户管理路由
* */
const { Sider } = Layout;

export default function Users() {
    const [data, setData] = useState([]);
    useEffect(() => {
        req.get('user/list', { page: 1, limit: 10 }).then((res) => {
            console.log('123/user/list', res)
            setData(res.data.rows)
            // if (res.code === 0) {
            //     localStorage.setItem('nickname', res.n);
            //     localStorage.setItem('h5', JSON.stringify(res.h5 || []));
            //     history.push('/');
            // } else {
            //     message.error(res.message)
            // }

        });
    }, [])
    return (
        <div style={{ height: '100%', display: 'flex' }}>
            <Table columns={columns} dataSource={data} style={{ width: '100%' }} />
        </div>
    )

}