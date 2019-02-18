import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.text  = 'Login'
  }
  login( event) {
  	console.log(event)
  }
  render() {
    return (
      <section className="related-search-container">
        <Link to="home"><h1 className="related-search-title">{this.text}</h1></Link>
      </section>
    );
  }
}