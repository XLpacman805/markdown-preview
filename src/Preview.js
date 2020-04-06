import React from 'react';
import Markdown from 'markdown-to-jsx';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="preview">
                <Markdown>{this.props.text}</Markdown>
            </div>
        );
    } 
}

export default Preview;