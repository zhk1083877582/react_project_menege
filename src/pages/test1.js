import React,{Component}from'react'
import  '../App.less'
import { Button } from 'antd'

class test1 extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  handleAdd=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  handleRemove(){
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    return(
      <div>
        <p className='test_less'>{this.state.count}</p>
        <Button onClick={this.handleAdd}>加一</Button>
        <Button onClick={this.handleRemove.bind(this)}>减一</Button>
      </div>
    )
  }
  
}
export default test1;