import React,{ Component } from "react";

class Navleft extends Component{
  constructor(props){
    super(props)
    this.state={
      message:'this is Navleft'
    }
  }
  render(){
    return(
      <div>{this.state.message}</div>
    )
  }
}

export default Navleft;