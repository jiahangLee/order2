/**
 * Created by jiahang Lee on 2018/3/28.
 */
import { connect } from 'dva';
import React from 'react'
import Order from '../components/layout/Order';
import MainLayout from '../components/layout/MainLayout';

class Item extends React.Component {
  render() {
    return (
      <MainLayout>
        <div >
          <Order {...this.props}/>
        </div>
      </MainLayout>
    );
  }
}
function mapStateToProps(state) {
  const { list} = state.common;
  return {
    loading: state.loading.models.common,
    list
  };
}
export default connect(mapStateToProps)(Item);
