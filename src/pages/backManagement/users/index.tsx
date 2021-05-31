import React, { useEffect, useState } from 'react'
import { message, Space, Table, Modal, Form, Input, Select, DatePicker } from 'antd';
import { getUserList, deleteUser, editUser } from './service';
import { User } from '@/pages/types';
import './index.less'
import { fmtTime } from '@/utils';
import ShowUserModal from './showUserModal';
/*
* 用户管理路由
* */


const { Column } = Table;

export default function Users() {
    const [data, setData] = useState<User[]>([]);
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState<User>({} as User);

    const getUsers = async () => {
        try {
            const res = await getUserList();
            setData(res.rows)
        } catch (e) {
            message.error(e.message)
        }

    }

    const handleDelete = async (name: string) => {
        try {
            // 执行删除
            await deleteUser(name)
            message.success('删除成功')
            // 重新搜索一遍
            getUsers();
        } catch (e) {
            message.error(e.message)
        }

    }

    const handleEdit = (user: User) => {
        // 弹出modal框
        setUser(user);
        setModal(true);
    }


    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className='wrap'>
            <Table dataSource={data} style={{ width: '100%' }} >
                <Column title="用户名" dataIndex="name" key="name" />
                <Column title="电话" dataIndex="tel" key="tel" />
                <Column title="性别" dataIndex="sex" key="sex" render={(sex: number) => sex === 1 ? '男' : sex === 0 ? '女' : '未知'} />
                <Column title="注册时间" dataIndex="create_time" key="create_time" render={(value: string | number) => fmtTime(value)} />
                <Column title="生效时间" dataIndex="start_time" key="start_time" render={(value: string | number) => fmtTime(value)} />
                <Column title="截至时间" dataIndex="end_time" key="end_time" render={(value: string | number) => fmtTime(value)} />
                <Column
                    title="Action"
                    key="action"
                    dataIndex="name"
                    render={(_, user: User) => (
                        <Space size="middle">
                            <a onClick={() => handleDelete(user.name)}>删除</a>
                            <a onClick={() => handleEdit(user)}>编辑</a>
                        </Space>
                    )}
                />
            </Table>
            <ShowUserModal user={user} visible={modal} setVisible={setModal} getUsers={getUsers} />
        </div >
    )

}