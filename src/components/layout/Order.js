/**
 * Created by jiahang Lee on 2018/3/28.
 */
import { Result, Icon, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.min.css';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" style={{marginLeft:'6px', width: '50px', height: '100px' }}/>;

const Order = () => (<div className="result-example">
  <div className="sub-title">...</div>
  <Result
    img={ myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg') }
    title="支付成功"
    message={<div>998.00元 <del>1098元</del></div>}
  />

</div>);
export default Order;
