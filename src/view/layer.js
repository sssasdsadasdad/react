import React, {Component} from 'react'
import {Link, HashRouter as Router} from 'react-router-dom'
import axios from 'axios'
import { createStore } from 'redux';
import home from './home'
export default class layer extends Component {
  constructor(props) {
    super(props);
    this.text  = 'layer'
//  setInterval(()=> {
//  	this.setState({
//  		time: ++ this.time 
//  	})
//  	console.log(this.time )
//  }, 1000)
//  this.gos = this.gos.bind(this)
  }
  login( event) {
  	console.log(event)
  }
  gos(){
//	console.log(this.props.history)
		axios.post('/api/test/e').then(res => {
			console.log(res)
		})
//		window.open('/api/download')
  }
  render() {
    return (
//  	<Router>
      <section className="related-search-container">
        <h1 onClick={this.gos.bind(this)} className="related-search-title">{this.text}</h1>
        		
      </section>
//  	</Router>
      
    );
  }
}