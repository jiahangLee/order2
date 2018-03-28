/**
 * Created by jiahang Lee on 2018/3/23.
 */
import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router'
import {hashHistory} from 'dva/router'
import { List, Stepper } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.min.css';
import  api  from '../../config';
import common from '../../models/common'
import { ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import stepper from "../../routes/stepper";



const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 3;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  console.log(dataBlob)
  return dataBlob;
}

class ListView1 extends React.Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource:new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,}),
      isLoading: false,
      data2:[],
      val: 3,
      val1: 2,
    };
    // this.state = {
    //   searchString:'',
    // isLoading:false,
    // message:'',
    // dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!== r2})};

  }

  onChange3 = (id) => {
    // hashHistory.push('/item')
    this.props.dispatch({
      type:'common/getId',
      payload:id
    })
  }
  onChange1 = (val1) => {
    // console.log(val);

  }

  componentDidMount() {

      this.rData = genData();
    if(this.state.data2.length === 0)
      return;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    let abc = nextProps.list.data
    if (nextProps.list.data !== this.state.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.list.data),
        data2:abc
      });
    }
  }

  // shouldComponentUpdate(){}

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });

      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });

  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let data3 = this.state.data2
    let index = data3.length - 1;

    const row = (rowData, sectionID, rowID) => {
      console.log("index:"+index)
      if (index < 0) {
        index = data3.length - 1;
      }
      const obj = data3[index--];
      return (

        <div key={rowID} style={{ padding: '0 15px' }} onClick={()=>{this.onChange3(obj.id)}}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj!==undefined?obj.name:"tom"}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj!==undefined?(api.REST_API+obj.imageUrl):"tom"} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj!==undefined?obj.description:"tom"}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{obj!==undefined?obj.price:"tom"}</span>¥</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}



export default ListView1;
