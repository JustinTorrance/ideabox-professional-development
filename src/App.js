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

  removeIdea = id => {
    const ideas = this.state.ideas.filter(idea => ( idea.id !== id ))
    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Idea Keeper</h2>
        </div>
        <IdeaForm addIdea={this.addIdea} />
        <IdeasContainer ideas={this.state.ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
