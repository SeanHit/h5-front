import { Form, Input, Button, Popover, message } from 'antd';
import React from 'react';
import CodeImg from '@/assets/code.png';
import { history } from 'umi';
import styles from './index.less';
import { login } from './service'

interface FormValues {
  name: string;
  password: string;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

const content = (
  <>
    <div style={{ textAlign: 'center' }}>
      <img style={{ width: '180px' }} src={CodeImg} alt="趣谈前端-liuxiang" />
    </div>
    <p style={{ width: '240px' }}>扫描上方二维码，添加liuxiang微信好友，获取登录账号</p>
  </>
);

const Login = () => {

  const onFinish = async (values: FormValues) => {
    const { name, password } = values;
    try {
      const user = await login(name, password);
      localStorage.setItem('nickname', user.name);
      history.push('/');
    } catch (e) {
      message.error(e.message)
    }
  };

  return (
    <div className={styles.loginWrap}>
      <Form
        {...layout}
        name="login"
        className={styles.formWrap}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className={styles.title}>
          运营活动编辑器后台管理
          <span className={styles['login-text']}>登录</span>
        </div>
        <Form.Item label="用户名" name="name" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <div className={styles.popover}>
          <Popover placement="topLeft" content={content} trigger="click">
            <Button type="link">如何获取登录账号？</Button>
          </Popover>
        </div>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
