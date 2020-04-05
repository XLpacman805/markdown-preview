import React from 'react';
import Preview from './Preview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <h1>Enter Your GitHub Style Markdown:</h1>
              <textarea id="editor" className="editor" onChange={this.handleChange}> </textarea>
          </div>
          <Preview text={this.state.text} />
        </header>
      </div>
    );
  }
}

export default App;
