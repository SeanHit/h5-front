import { Form, Input, Button, Select, message } from 'antd';
import React from 'react';
import CodeImg from '@/assets/code.png';
import { history } from 'umi';
import styles from './index.less';
import { register } from './service'

interface FormValues {
    name: string;
    password: string;
    tel: string;
    sex: number
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};


const Register = () => {

    const onFinish = async (values: FormValues) => {
        const { name, password, tel, sex } = values;
        try {
            await register(name, password, tel, sex);
            message.success('注册成功，即将返回登录页登录')
            history.push('/login');
        } catch (e) {
            message.error(e.message)
        }
    };

    return (
        <div className={styles.registerWrap}>
            <Form
                {...layout}
                name="register"
                className={styles.formWrap}
                initialValues={{ name: '', password: '', confirm: '' }}
                onFinish={onFinish}
            >
                <div className={styles.title}>
                    运营活动编辑器后台管理
                <span className={styles['login-text']}>注册</span>
                </div>
                <Form.Item label="用户名" name="name" rules={[{ required: true, message: '请输入用户名!' }]} >
                    <Input />
                </Form.Item>

                <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]} >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请确认你的密码',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('您输入的两个密码不匹配！'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label="电话" name="tel" rules={[{ required: true, message: '请输入电话号码!' }]} >
                    <Input />
                </Form.Item>

                <Form.Item label="性别" name="sex" rules={[{ required: true, message: '请选择你的性别' }]} >
                    <Select placeholder="请选择你的性别">
                        <Select.Option value={1}>男</Select.Option>
                        <Select.Option value={0}>女</Select.Option>
                        <Select.Option value={2}>其他</Select.Option>
                    </Select>
                </Form.Item>

                <div className={styles.popover}>
                    <Button type="link" onClick={() => history.push('/login')}>返回登录</Button>
                </div>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" block>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
