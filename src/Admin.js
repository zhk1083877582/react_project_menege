import React,{Component} from 'react';
import { Row, Col } from 'antd';
import Header from "./components/Header";
import Footer from "./components/Footer";
class Admin extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render() {
    return(
      <Row>
        <Col span={3}>
          left
        </Col>
        <Col span={21}>
          <Header></Header>
          right
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}
export default Admin;