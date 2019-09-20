import React,{ Component } from "react";

class Footer extends Component {
  constructor(props){
    super(props)
    this.state= {
      Footer : 'this is Footer component'
    }
  }
  render (){
    return(
      <div>
        {this.state.Footer}
      </div>
    )
  }
}
export default Footer;