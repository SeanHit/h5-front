import React, { useState, useEffect } from 'react';
import { message, Layout, Table } from 'antd';
import { history } from 'umi';
import { columns } from './config'
import req from '@/utils/req';

const Logs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        req.get('/h5/list?creator=liuxiang', { page: 1, limit: 10, creator: 'liuxiang' }).then((res) => {
            console.log('123', res.data)
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
    );
};

export default Logs;
