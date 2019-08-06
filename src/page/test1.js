import React,{Component}from'react'
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
        <p>{this.state.count}</p>
        <button onClick={this.handleAdd}>加一</button>
        <button onClick={this.handleRemove.bind(this)}>减一</button>
      </div>
    )
  }
  
}
export default test1;