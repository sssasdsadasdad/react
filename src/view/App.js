import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 
import Item from './Item'
class App extends Component {
	constructor(props){
		super(props)
		this.state   = {
			inp: {i: '煞笔'}
		}
	}
	parent(v){
		this.setState({
			inp: v
		})
	}
	render(){
		return (
			<div>
				{this.state.inp}
				<Item {...this.state.inp} parent={this.parent.bind(this)} />
			</div>
		)
	}
}

export default App;
