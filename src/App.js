import React from 'react';
import Editor from './Editor.Component';
import Preview from './Preview.Component';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log("SOME CHANGE!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <h1>Enter Your GitHub Style Markdown:</h1>
              <textarea id="editor" className="editor" onChange={this.handleChange}> </textarea>
          </div>
          <Preview text="Hello world" />
        </header>
      </div>
    );
  }
}

export default App;
