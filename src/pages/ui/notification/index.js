import React,{ Component } from "react";
import { Card, Button, notification } from 'antd'
import './index.less';
import '../ui.less'
class Notification extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  componentWillMount(){
    
  }
  openNotification=(type,message,description,placement)=>{
    let obj = {
      message,
      description,
      placement,
      duration:2
    }
    notification[type](obj)
  }
  render (){
    return(
      <div className="Notification">
         <Card title="通知提醒框" className="Card_wrap">
          <Button type="primary" onClick={()=>this.openNotification("success",1,2,'topLeft')}>success</Button> 
          <Button type="primary" onClick={()=>this.openNotification("error",'3','4','topRight')}>error</Button>
          <Button type="primary" onClick={()=>this.openNotification("warning",5,6,'bottomLeft')}>warning</Button>
          <Button type="primary" onClick={()=>this.openNotification("info",7,8,'bottomRight')}>info</Button>
         </Card>
      </div>
    )
  }
}
export default Notification;