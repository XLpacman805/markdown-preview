import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <textarea id="editor"> </textarea>
        );
    }
}

export default Editor;