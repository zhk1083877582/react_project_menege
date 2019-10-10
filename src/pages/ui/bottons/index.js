import React,{ Component } from "react";
import { Card, Button, Icon, Radio } from "antd";
import '../ui.less'
import './index.less';
class Buttons extends Component {
  constructor(props){
    super(props)
    this.state={
        size: 'default',
        loading:true
    }
  }
  componentWillMount(){
    
  }
  closeLoading =() => {
    this.setState({
      loading:false
    })
  }
  openLoading=()=>{
    this.setState({
      loading:true
    })
  }
  handleChange=(e)=>{
    console.log(e)
    this.setState({
      size:e.target.value
    })
  }
  render (){
    const { size } = this.state;
    const ButtonGroup = Button.Group;
    const RadioGroup = Radio.Group
    return(
      <div className="Buttons">
        <Card title="基础按钮" className="Card_wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>disabled</Button>
          <Button type="link">Link</Button>
        </Card>

        <Card title="图形按钮" className="Card_wrap">
          <Button type="primary" shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="primary" icon="download" size={size} />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size}></Button>
        </Card>

        <Card title="Loading按钮" className="Card_wrap">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>确定</Button>
          <Button type="primary" loading={this.state.loading} onClick={this.openLoading}>点击加载</Button>
          <Button type="primary" onClick={this.closeLoading}>关闭</Button>
        </Card>

        <Card title="按钮组">
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" size="small" icon="cloud" />
            <Button type="primary" size="small" icon="cloud-download" />
          </ButtonGroup>
        </Card>
      
        <Card title="按钮尺寸" className="Card_wrap">
          <RadioGroup value={size} onChange={this.handleChange}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </RadioGroup>
          <Button type="primary" size={size}>Primary</Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>Dashed</Button>
          <Button type="danger" size={size}>Danger</Button>
          <Button disabled size={size}>disabled</Button>
          <Button type="link" size={size}>Link</Button>
        </Card>
      </div>
    )
  }
}
export default Buttons;