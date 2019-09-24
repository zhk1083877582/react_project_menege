import React,{ Component } from "react";
import { Row, Col } from 'antd';
import './index.less';
import Utils from "../../utils/utils";
class Header extends Component {
  componentWillMount(){
    this.setState({
      userName:'登陆人名字'
    })
    setInterval(() => {
      let sysTime = Utils.formatDate(new Date().getTime())
      this.setState({
        sysTime:sysTime
      })
    }, 1000);
  }
  render (){
    return(
      <div className="Header">
        <Row className="Header_top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="Header_bottom">
          <Col span={4} className="Header_bottom_title">
            首页
          </Col>
          <Col span={20} className="weacher"> 
            <span className="date">2019-09-24</span>
            <span className="weacher_detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Header;