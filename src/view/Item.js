import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props)

//  this.state = {
//    name: this.props.name
//  }
  }

  handleChange = (event) => {
  	this.setState({
  		name: event.target.value
  	})
  	this.props.parent(event.target.value)
  	console.log(this.state.name)
  }

  render() {
        return (
          <div>

          </div>
        )
  }
}

