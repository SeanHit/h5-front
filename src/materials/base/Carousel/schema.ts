import {
  IDataListConfigType,
  IRadioConfigType,
  ISwitchConfigType,
  INumberConfigType,
  TDataListDefaultType,
  TRadioDefaultType,
  TSwitchDefaultType,
  TNumberDefaultType,
} from '@/components/FormComponents/types';

import { serverUrl } from '@/utils/tool';

export type CarouselDirectionKeyType = 'down' | 'left';

export type TCarouselEditData = Array<
  | IRadioConfigType<CarouselDirectionKeyType>
  | ISwitchConfigType
  | IDataListConfigType
  | INumberConfigType
>;
export interface ICarouselConfig {
  direction: TRadioDefaultType<CarouselDirectionKeyType>;
  swipeable: TSwitchDefaultType;
  autoPlay: TSwitchDefaultType;
  imgList: TDataListDefaultType;
  tplImg: string;
  round: TNumberDefaultType;
}

export interface ICarouselSchema {
  editData: TCarouselEditData;
  config: ICarouselConfig;
}

const Carousel: ICarouselSchema = {
  editData: [
    {
      key: 'direction',
      name: '方向',
      type: 'Radio',
      range: [
        {
          key: 'down',
          text: '从上到下',
        },
        {
          key: 'left',
          text: '从左到右',
        },
      ],
    },
    {
      key: 'swipeable',
      name: '是否可拖拽',
      type: 'Switch',
    },
    {
      key: 'round',
      name: '圆角',
      type: 'Number',
    },
    {
      key: 'autoPlay',
      name: '是否自动播放',
      type: 'Switch',
    },
    {
      key: 'imgList',
      name: '图片列表',
      type: 'DataList',
    },
  ],
  config: {
    direction: 'left',
    swipeable: false,
    round: 0,
    autoPlay: false,
    imgList: [
      {
        id: '1',
        title: '淘宝图片',
        desc: '淘宝首页轮播图1',
        link: 'https://re.taobao.com/?pid=&ali_trackid=19_19a0ad40e4a96d6efa15603491b264ef',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: `https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg`,
          },
        ],
      },
      {
        id: '2',
        title: '淘宝图片2',
        desc: '淘宝首页轮播图2',
        link: 'https://re.taobao.com/action_ecpm_home?ali_trackid=19_6db4d5d5fd6ec72e0e5c99620c0c957e',
        imgUrl: [
          {
            uid: '002',
            name: 'image.png',
            status: 'done',
            url: `https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg`,
          },
        ],
      },
    ],
    tplImg: `${serverUrl}/uploads/carousal_17442e1420f.png`,
  },
};
export default Carousel;
