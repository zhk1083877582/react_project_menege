import React,{Component} from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from '../App'


import Admin from '../Admin'

import Home from '../pages/Home/index'
//ui
import Bottons from '../pages/ui/bottons'
import Modals from '../pages/ui/modals'
import Loading from '../pages/ui/Loading'
import Message from '../pages/ui/message'
import Tabs from '../pages/ui/tabs'
import Notification from '../pages/ui/notification'
import Gallery from '../pages/ui/gallery'
import Carousel from '../pages/ui/carousel'

//form
import Login from "../pages/form/login";
import Register from "../pages/form/register";
//table
import BasicTable from '../pages/table/basicTable';

//404
import Nomatch from "../pages/nomatch";
export default class IRouter extends Component{
  render(){
    return(
      <HashRouter>
        <App>
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
                <Route path='/admin/ui/tabs' component={ Tabs } />
                <Route path='/admin/form/login' component={ Login } />
                <Route path='/admin/form/register' component={ Register } />
                <Route path='/admin/table/basic' component={ BasicTable } />
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