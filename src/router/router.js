import React,{Component} from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from '../App'

import Login from '../pages/login'
import Admin from '../Admin'

import Home from '../pages/Home/index'
//ui
import Bottons from '../pages/ui/bottons'
import Modals from '../pages/ui/modals'
import Loading from '../pages/ui/Loading'
import Message from '../pages/ui/message'
import Notification from '../pages/ui/notification'
import Gallery from '../pages/ui/gallery'
import Carousel from '../pages/ui/carousel'

//404
import Nomatch from "../pages/nomatch";
export default class IRouter extends Component{
  render(){
    return(
      <HashRouter>
        <App>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={() => 
            <Admin>
              <Switch>
                <Route path='/admin/home' component={ Home }/>
                <Route path='/admin/ui/bottons' component={ Bottons }/>
                <Route path='/admin/ui/modals' component={ Modals }/>
                <Route path='/admin/ui/Loading' component={ Loading }/>
                <Route path='/admin/ui/message' component={ Message } />
                <Route path='/admin/ui/notification' component={ Notification }/>
                <Route path='/admin/ui/gallery' component={ Gallery }/>
                <Route path='/admin/ui/carousel' component={ Carousel }/>
                <Route path='' component={ Nomatch } />
              </Switch>
            </Admin>
          }></Route>
          <Route path='/order/detail' component={Login}></Route>
        </App>
      </HashRouter>
    )
  }
}