import { User } from '@/pages/types';
import React, { useState } from 'react'
import { message, Modal, Form, Input, Select, DatePicker } from 'antd';
import { editUser } from './service';
import moment from 'moment';
const { RangePicker } = DatePicker;
export default function ShowUserModal({ user, visible, setVisible, getUsers }: { user: User, visible: boolean, setVisible: (arg0: boolean) => void, getUsers: () => void }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const handleModalOk = async () => {
        // 获得表单的值
        const { name, sex, tel, time } = form.getFieldsValue(true);
        const start_time = time[0].valueOf();
        const end_time = time[1].valueOf();

        try {
            setConfirmLoading(true)
            await editUser({ name, sex, tel, start_time, end_time })
            message.success('修改成功');
            setConfirmLoading(false)
            setVisible(false);
            getUsers();
        } catch (e) {
            message.error(e.message)
        }
    }


    return <Modal
        title={`${user?.name}的基本信息 `}
        visible={visible}
        onOk={handleModalOk}
        confirmLoading={confirmLoading}
        onCancel={() => {
            setVisible(false);
        }}
    >
        <Form
            form={form}
            name="update"
            preserve={false}
        >
            <Form.Item label="用户名" name="name" rules={[{ required: true, message: '请输入用户名!' }]} initialValue={user.name}>
                <Input />
            </Form.Item>
            <Form.Item label="电话" name="tel" rules={[{ required: true, message: '请输入电话号码!' }]} initialValue={user.tel} >
                <Input />
            </Form.Item>
            <Form.Item label="性别" name="sex" rules={[{ required: true, message: '请选择你的性别' }]} initialValue={Number(user.sex)}>
                <Select placeholder="请选择你的性别">
                    <Select.Option value={1}>男</Select.Option>
                    <Select.Option value={0}>女</Select.Option>
                    <Select.Option value={2}>其他</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="生效时间" name="time" rules={[{ type: 'array' as const, required: true, message: 'Please select time!' }]} initialValue={[moment(user.start_time), moment(user.end_time)]}>
                <RangePicker format="YYYY-MM-DD HH:mm:ss" showTime />
            </Form.Item>
        </Form >
    </Modal>
}