import React,{Component} from 'react';
// import Test1 from './page/test1'
// import Admin from './Admin'
import './App.less';

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Test1/> */}
        {/* <Admin/> */}
        { this.props.children }
      </div>
    )
  }
}


export default App;
