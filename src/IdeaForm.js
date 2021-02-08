import React, { Component } from 'react';

export default class IdeaForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  handleInputChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value} )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addIdea(this.state)
    this.resetState()
  }

  resetState = () => {
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    const { title, body } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={this.handleInputChange}
        />
        <input 
          type="text"
          placeholder="Description"
          value={body}
          name="body"
          onChange={this.handleInputChange}
        />
        <button>Add Idea</button>
      </form>
    )
  }

}