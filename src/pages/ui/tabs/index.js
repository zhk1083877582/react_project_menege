import React,{ Component } from "react";
import { Card, Tabs, message } from 'antd';
import './index.less';
const { TabPane } = Tabs;
class Tab extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  componentWillMount(){
    
  }
  handleChange=(key)=>{
    message.info(`当前点击了${key}`)
  }
  render (){
    return(
      <div className="Tabs">
        <Card title="tab页签">
        <Tabs defaultActiveKey="2" onChange={this.handleChange}>
          <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
          <TabPane tab="Tab 2" disabled key="2"> Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
        </Tabs>,
        </Card>
      </div>
    )
  }
}
export default Tab;