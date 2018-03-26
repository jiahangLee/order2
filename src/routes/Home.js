/**
 * Created by jiahang Lee on 2018/3/23.
 */
import { connect } from 'dva';
import ListView1 from '../components/layout/ListView';
import MainLayout from '../components/layout/MainLayout';

function Home({ location ,list:list}) {
  let list1 = list
  return (
    <MainLayout location={location}>
      <div className='normal'>
        <ListView1 {...list}/>
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list} = state.common;
  return {
    loading: state.loading.models.common,
    list
  };
}
export default connect(mapStateToProps)(Home);
