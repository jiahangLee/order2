/**
 * Created by jiahang Lee on 2018/3/27.
 */
import { connect } from 'dva';
import Item1 from '../components/layout/Item';
import MainLayout from '../components/layout/MainLayout';

class Item extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className='normal'>
          <Item1 {...this.props}/>
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
