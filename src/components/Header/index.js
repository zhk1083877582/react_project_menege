import React,{ Component } from "react";

class Header extends Component {
  constructor(props){
    super(props)
    this.state= {
      Header : 'this is Header component'
    }
  }
  render (){
    return(
      <div>
        {this.state.Header}
      </div>
    )
  }
}
export default Header;