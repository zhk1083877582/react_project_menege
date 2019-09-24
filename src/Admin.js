import React,{Component} from 'react';
import { Row, Col } from 'antd';
import Navleft from "./components/Navleft";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/common.less"
class Admin extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render() {
    return(
      <Row className="container">
        <Col span={3} className="nav_left">
          <Navleft/>
        </Col>
        <Col span={21} className="main">
          <Header/>
          <Row className="main_content">
            right
            {/* {this.props.children} */}
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}
export default Admin;