import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log("Change!")
    }

    render() {
        return (
            <div>
                <h1>Enter Your GitHub Style Markdown:</h1>
                <textarea id="editor" className="editor" onChange={this.handleChange}> </textarea>
            </div>
        );
    }
}

export default Editor;