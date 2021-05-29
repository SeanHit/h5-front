import React from 'react';
import { history } from 'umi';
import {
  MobileOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import { generateTid } from '../../utils/tool'

const Home = () => {
  const handleGo = () => {
    history.push(`/editor?tid=${generateTid()}&isNew=1`);
  };
  return (
    <div className={styles.contentArea}>
      <div className={styles.logoTip}>
        <div className={styles.logo}>
          面向游戏电商类
            <span className={styles.logoText} title="H5-Dooring可视化编辑器">
            H5页面
            </span>
            可视化编辑器
          </div>
        <p style={{ display: 'inline-block', width: '520px', fontSize: '16px', lineHeight: '2' }}>
          这是一款H5可视化页面配置的平台，
          致力于提供一套页面可视化搭建工具，用于解决页面生成的效率问题，重复性强的问题
          前端技术栈以react为主，后台采用nodejs开发。
          </p>
      </div>
      <div className={styles.operation}>
        <div className={styles.card} onClick={() => handleGo()}>
          <MobileOutlined />
          <div>制作H5页面</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
