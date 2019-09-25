import React,{ Component } from "react";
import { Row, Col } from 'antd';
import './index.less';
import Utils from "../../utils/utils";
import Axios from '../../axios/index'
class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      userName:'',
      sysTime:''
    }
  }
  componentWillMount(){
    this.setState({
      userName:'登陆人名字',
      weacher:''
    })
    setInterval(() => {
      let sysTime = Utils.formatDate(new Date().getTime())
      this.setState({
        sysTime:sysTime
      })
    }, 1000);
    this.getWeatherAPIDate()
  }
  getWeatherAPIDate () {
    console.log(1212)
    let city = 'beijing'
    Axios.jsonP({
      url:'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=1a3cde429f38434f1811a75e1a90310c&location='+ encodeURIComponent(city)
    }).then((res)=>{
      console.log(res)
      let data = res.results[0].weather_data[0];
      this.setState({
        weacher:data.wind,
        weacherPic:data.dayPictureUrl
      })
    })
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
            <span className="date">{this.state.sysTime}</span>
            <span className="weacher_detail">
              <img src={this.state.weacherPic} alt="白天天气图片" />
              {this.state.weacher}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Header;