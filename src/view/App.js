import React, {Component} from 'react'
import {HashRouter as Router, Route, Redirect, hashHistory} from 'react-router-dom'
import {IndexRoute} from 'react-router'
import Login from './login'
import Home from './home'
import Register from './register'
import {Button} from 'antd'
import 'antd/dist/antd.css';

class app extends Component {
  render() {
  	let isLogin = true;
  	if(isLogin) {
	    return (
	    	<div>
		    	<Router>
		    	<div>
		    		<Route exact path="/"  component={Login}></Route>
		    		<Route path="/home"  component={Home}></Route>
	    		</div>
		    	</Router>
	    	</div>
    	)
  	} else {
  		return (<div>
		    	<Router>
			    	<div>
			    		<Route path="/register"  component={Register}></Route>
			    		<Redirect to="register"></Redirect>
		    		</div>
		    	</Router>
	    	</div>)
  		
  	}
  }
}
export default app
