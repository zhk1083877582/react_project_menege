import React,{ Component } from "react";
import Menuconfig from '../../config/menuConfig'
import './index.less'

import { Menu } from 'antd';

const { SubMenu } = Menu;
class Navleft extends Component{
  constructor(props){
    super(props)
    this.state={
      message:'this is Navleft'
    }
  }

  componentWillMount(){
    const menuTreeNode = this.renderMenu(Menuconfig)
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
        
      }
      return <Menu.Item title={ item.title } key= { item.key }>{item.title}</Menu.Item>
    })
  }

  render(){
    return(
      <div>
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo"/>
          <h1>React</h1>
        </div>

        <Menu theme="dark">
            {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default Navleft;