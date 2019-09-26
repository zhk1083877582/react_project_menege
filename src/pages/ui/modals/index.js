import React,{ Component } from "react";
import { Card, Modal, Button, message } from 'antd'
import './index.less';
import './index.less';
const success = () => {
  message.success('This is a success message');
};
class Modals extends Component {
  constructor(props){
    super(props)
    this.state={
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5:false,
      visible6:false,
      visible7:false,
      visible8:false
    }
  }
  componentWillMount(){
    
  }
  showModal=(type)=>{
    this.setState({
      [type]:true
    })
  }

  handleConfirm=(type,txt)=>{
    Modal[type]({
      title: type,
      content:txt,
      onOk:()=>{
        console.log(123123)
      }
    })
  }


  handleCancel=(type)=>{
    this.setState({
      [type]:false
    })
  }
  handleOk=(type)=>{
    success();
  }
  render (){
    return(
      <div className="Modals">
        <Card title="基础弹框" className="Card_wrap">
          <Button type="primary" onClick={()=>this.showModal('visible1')}>Open Modal </Button> {/*这个地方必须要设置箭头函数 不然会直接执行 */}
          <Button type="primary" onClick={()=>this.showModal('visible2')}>自定义页脚</Button>
          <Button type="primary" onClick={()=>this.showModal('visible3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={()=>this.showModal('visible4')}>水平垂直居中</Button>
        </Card>  
        <Card title="信息确认框" className="Card_wrap">
          <Button type="primary" onClick={()=>this.handleConfirm('confirm','Confirm')}>Confirm</Button> {/*这个地方必须要设置箭头函数 不然会直接执行 */}
          <Button type="primary" onClick={()=>this.handleConfirm('info','Info')}>Info</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('success','Success')}>Success</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('warning','Warning')}>Warning</Button>
        </Card>
          <Modal
            title="Basic Modal"
            visible={this.state.visible1}
            
            onCancel={()=>{this.setState({visible1:false})}}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <Modal
            title="自定义页脚"
            visible={this.state.visible2}
            
            onCancel={()=>{this.setState({visible2:false})}}
            okText='好的'
            cancelText='算了'
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        
        
      </div>
    )
  }
}
export default Modals;