import React, { useCallback, useState } from 'react';
import { library, generateRespones, RenderList, useRegister } from 'chatbot-antd';
import { IRouteComponentProps } from 'umi';
import { Button } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';
import './index.less';

//text是语句，reg会生成正则匹配，useReg会使用自定义匹配
library.push(
  {
    text: '我是机器人',
    reg: '你是谁',
  },
  {
    text: (
      <div>
        作者是：
        <a href="https://github.com/SeanHit">@liuxiang</a>
      </div>
    ),
    useReg: /(.*?)作者是谁(.*?)/,
  },
);

export default function Layout({ children }: IRouteComponentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const callb = useCallback((v: RenderList) => {
    setTimeout(() => {
      //使用settimeout 更像机器人回话
      const returnValue = generateRespones(v);
      if (returnValue) {
        setList(prev => prev.concat({ isUser: false, text: returnValue }));
      }
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 注册
  const [chatbot, setList] = useRegister(
    modalOpen,
    callb,
    {
      onOk: () => setModalOpen(false),
      onCancel: () => setModalOpen(false),
      title: '机器人客服',
      width: 420,
    },
    {},
    <div>
      welcome!欢迎使用h5页面编辑系统，你有任何问题，都可以咨询我哦～
      <div className="chat-card-custom">
        <div>【系统指南】</div>
        <div>
          <div>
            &nbsp;&nbsp;1.{' '}
            <a href="https://github.com/SeanHit/h5-front" target="_blank">
              前端-源码地址
            </a>
          </div>
          <div>
            &nbsp;&nbsp;2.{' '}
            <a href="https://github.com/SeanHit/h5-backend" target="_blank">
              服务端-源码地址
            </a>
          </div>
          <div >
            &nbsp;&nbsp;3. 交流或者意见(微信：Gent_liuxiang)
          </div>
        </div>
      </div>
    </div>,
  );

  const hackCodeStyle = window.location.pathname.indexOf('preview') < 0 ? { height: '100%' } : { height: '100%', overflow: 'auto' };
  return (
    <div style={hackCodeStyle}>
      <Button
        type="primary"
        style={{ visibility: modalOpen ? 'hidden' : 'visible' }}
        className='chat'
        onClick={() => setModalOpen(!modalOpen)}
      >
        <CustomerServiceOutlined></CustomerServiceOutlined>
      </Button>
      { chatbot}
      {/* 子路由 */}
      { children}
    </div >
  );
}
