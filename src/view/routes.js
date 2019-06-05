import React, {Component} from 'react'
import {HashRouter as Router, Route, Redirect, hashHistory, Switch, } from 'react-router-dom'
//import {IndexRoute} from 'react-router'
import { hashHistory } from 'react-router';
import Login from './login'
import layer from './layer'
import Home from './home'
import Register from './register'
import App from './App'
//import {Button} from 'antd'
import 'antd/dist/antd.css';


export default class Route{
	
 render(){
	return (<hashHistory>
	
    <Route path="/" component={App}>
      
      <Route path="/repos" component={Home}/>
      <Route path="/about" component={Register}/>
   
    </Route>


                
        </hashHistory>);
}

}

//
//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
//import Page from './components/Page';
//import Dashboard from './components/dashboard/Dashboard';
//import ReactJavascript from './components/js/ReactJavascript';
//import Angular from './components/js/Angular';
//import Vue from './components/js/Vue';
//import Php './components/backend/Php';
//import Golang from './components/backend/Golang';
//import Python from './components/backend/Python';
//import Centos from './components/system/Centos';
//import Ubuntu from './components/system/Ubuntu';
//import Suse from './components/system/Suse';
//
//const routes =
//  <div>
//      <Route path={'/'} component={Page}>
//          <IndexRedirect to="/app/dashboard/index" />
//          <Route path={'app'} component={App}>
//              <Route path={'js'}>
//                  <Route path={'react'} component={ReactJavascript} />
//                  <Route path={'angular'} component={Angular} />
//                  <Route path={'vue'} component={Vue} />
//              </Route>
//              <Route path={'backend'}>
//                  <Route path={'php'} component={Php} />
//                  <Route path={'golang'} component={Golang} />
//                  <Route path={'python'} component={Python} />
//              </Route>
//              <Route path={'system'}>
//                  <Route path={'centos'} component={Centos} />
//                  <Route path={'ubuntu'} component={Ubuntu} />
//                  <Route path={'suse'} component={Suse} />
//              </Route>
//              <Route path={'dashboard/index'} component={Dashboard} />
//          </Route>
//      </Route>;
//  </div>
//
//ReactDOM.render(
//  <Router history={hashHistory}>
//      {routes}
//  </Router>,
//  document.getElementById('root')
//);
