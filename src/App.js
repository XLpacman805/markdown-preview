import React from 'react';
import Editor from './Editor.Component';
import Preview from './Preview.Component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Editor />
          <Preview />
        </header>
      </div>
    );
  }
}

export default App;
