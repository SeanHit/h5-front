import Tab from './Tab/template';
import List from './List/template';
import Coupons from './Coupons/template';
import CardLabel from './CardLabel/template';

const basicTemplate = [List, Tab, Coupons, CardLabel];
const ShopTemplate = basicTemplate.map(v => {
  return { ...v, category: 'shop' };
});

export default ShopTemplate;
