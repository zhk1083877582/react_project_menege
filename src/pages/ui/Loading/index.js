import React,{ Component } from "react";
import { Card, Icon, Spin, Alert } from 'antd'
import './index.less';
import '../ui.less';
class Loading extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  componentWillMount(){
    
  }
  
  render (){
    const antIcon  = <Icon type="loading" style={{fontSize:24}} />
    return(
      <div className="Loading">
        <Card title="Spin 用法" className="Card_wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={antIcon}/>
        </Card>
        <Card title="内容遮罩">
          <Alert 
            message="Alert Message Text11111"
            description="内容遮罩内容遮罩内容遮罩内容遮罩"
            type="info"
          />
          <Spin>
            <Alert 
              message="Alert Message Text22222"
              description="内容遮罩内容遮罩内容遮罩内容遮罩"
              type="info"
            />
          </Spin>
          <Spin tip="Loading...">
            <Alert 
              message="Alert Message Text22222"
              description="内容遮罩内容遮罩内容遮罩内容遮罩"
              type="info"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
export default Loading;