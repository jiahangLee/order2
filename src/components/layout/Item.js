/**
 * Created by jiahang Lee on 2018/3/27.
 */
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { Card } from 'antd-mobile';
import { List, Stepper } from 'antd-mobile';

import stepper from '../../routes/stepper'
class Item1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      data: ['1', '2', '1'],
      imgHeight: 176,
      slideIndex: 0,
    };
  }
  onChange2 = (val) => {
    console.log(val);
    this.setState({ val });
  }

  componentDidMount() {
    // simulate img loading

  }
  componentWillUnmount(){
    let id = this.props.location.query.id
    let va = this.state.val
    this.props.dispatch({
      type:'common/push',
      payload:{id,va}
    })
  }
  render() {
    return (
      <WingBlank  style={{ marginTop: '50px', verticalAlign: 'top' }}>


        <WhiteSpace />

          <WhiteSpace size="lg" />
          <Card full>
            <Card.Header
              title={this.props.location.query.name}
              thumb="http://123.206.91.106:8080/logo.jpg"
              extra={<span>{this.props.location.query.price}元</span>}
            />
            <Card.Body>
              <div>{this.props.location.query.description}</div>
            </Card.Body>
            <Card.Footer content={this.props.location.query.practice} extra={<div>{this.props.location.query.restaurant}</div>} />
          </Card>

        <List>
          <List.Item
            wrap
            extra={
              <Stepper
                style={{ width: '100%', minWidth: '100px' }}
                showNumber
                max={10}
                min={1}
                value={this.state.val}
                onChange={this.onChange2}
              />}
          >
            数量
          </List.Item>
        </List>

      </WingBlank>


    );
  }
}

export default Item1;
