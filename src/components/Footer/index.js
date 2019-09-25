import React,{ Component } from "react";
import './index.less';
class Footer extends Component {
  constructor(props){
    super(props)
    this.state= {
      Footer : 'this is Footer component'
    }
  }
  render (){
    return(
      <div className="Footer">
        {this.state.Footer} 
      </div>
    )
  }
}
export default Footer;