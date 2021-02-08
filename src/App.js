import React, { Component } from 'react';
import './App.css';
import IdeaForm from './IdeaForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = idea => {
    this.setState({ ideas: [...this.state.ideas, idea] })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Idea Keeper</h2>
        </div>
        <IdeaForm addIdea={this.addIdea} />
      </div>
    );
  }
}

export default App;
