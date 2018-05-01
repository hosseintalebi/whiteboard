import React, { Component } from 'react';
import Editor from './views/Editor/Editor'
import './App.css';
import 'material-components-web/dist/material-components-web.css'

class App extends Component {
  render () {
    return (
        <div className="App">
          <Editor />
        </div>
    )
  }
}

export default App;
