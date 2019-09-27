import React,{ Component } from "react";
import { Card, Tabs, message, Icon } from 'antd';
import './index.less';
const { TabPane } = Tabs;
class Tab extends Component {
  constructor(props){
    super(props)
    this.newTabIndex = 0;
    this.state={
      
    }
  }
  componentWillMount(){
    const panes = [
      {
        title:'tabs1',
        content:'Tab 1',
        key:'1'
      },
      {
        title:'tabs2',
        content:'Tab 2',
        key:'2'
      },
      {
        title:'tabs3',
        content:'Tab 3',
        key:'3'
      }
    ] 
    this.setState({
      activeKey:panes[0].key,
      panes
    })
  }
  handleChange=(key)=>{
    message.info(`当前点击了${key}`)
  }

  onChange=(activeKey)=>{
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: `Content of ${activeKey}`, key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  render (){
    return(
      <div className="Tabs">
        <Card title="tab页签">
          <Tabs defaultActiveKey="2" onChange={this.handleChange}>
            <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
            <TabPane tab="Tab 2" disabled key="2"> Tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
          </Tabs>
        </Card>

        <Card title="tab页签带图标">
          <Tabs defaultActiveKey="2" onChange={this.handleChange}>
            <TabPane tab={<span><Icon type="plus" />Tab 1 </span>} key="1">Tab 1</TabPane>
            <TabPane tab={<span><Icon type="plus-square" />Tab 2 </span>} key="2"> Tab 2</TabPane>
            <TabPane tab={<span><Icon type="question" />Tab 3 </span>} key="3">Tab 3</TabPane>
          </Tabs>
        </Card>

        <Card title="tab页签删除&新增">
          <Tabs 
              onChange={this.onChange} 
              type="editable-card"
              activeKey={this.state.activeKey}    
              onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel)=>{
                return <TabPane 
                      tab={panel.title}
                      key={panel.key}
                >{panel.content}</TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}
export default Tab;