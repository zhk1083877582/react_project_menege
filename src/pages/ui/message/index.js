import React,{ Component } from "react";
import { Card, Button, message } from 'antd'
import './index.less';
class Message extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  componentWillMount(){
    
  }
  openMsg=(type,content,duration)=>{
    let config = {
      content:content,
      duration:duration
    }
    message[type](content)
  }
  render (){
    return(
      <div className="Message">
        <Card title="全局提示框">
          <Button type="primary" onClick={()=>this.openMsg("success",'successsuccesssuccess',2)}>success</Button> 
          <Button type="primary" onClick={()=>this.openMsg("error",'errorerrorerrorerror',2)}>error</Button>
          <Button type="primary" onClick={()=>this.openMsg("warning",'warningwarningwarningwarning',2)}>warning</Button>
          <Button type="primary" onClick={()=>this.openMsg("info",'infoinfoinfoinfoinfo',2)}>info</Button>
          <Button type="primary" onClick={()=>this.openMsg("loading",'loadingloadingloadingloading',2)}>loading</Button>
        </Card>
      </div>
    )
  }
}
export default Message;