import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Enter Your GitHub Style Markdown:</h1>
                <textarea id="editor" class="editor"> </textarea>
            </div>
        );
    }
}

export default Editor;