import React,{Component} from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from '../App'

import Login from '../pages/login'
import Admin from '../Admin'
import Bottons from '../pages/ui/bottons'
export default class IRouter extends Component{
  render(){
    return(
      <HashRouter>
        <App>
          <Route path='/login' component={Login}></Route>\
          <Route path='/admin' render={() => 
            <Admin>
              <Route path='/admin/ui/bottons' component={ Bottons }/>
            </Admin>
          }></Route>
          <Route path='/order/detail' component={Login}></Route>
        </App>
      </HashRouter>
    )
  }
}