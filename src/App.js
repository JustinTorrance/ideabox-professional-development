import React, { Component } from 'react';
import './App.css';
import IdeaForm from './IdeaForm'
import { uniqueId } from 'lodash'
import IdeasContainer from './IdeasContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = idea => {
    const newIdea = {...idea, id: uniqueId()}
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Idea Keeper</h2>
        </div>
        <IdeaForm addIdea={this.addIdea} />
        <IdeasContainer ideas={this.state.ideas} />
      </div>
    );
  }
}

export default App;
