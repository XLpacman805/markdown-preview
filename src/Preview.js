import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="preview">
                <h2>{this.props.text}</h2>
            </div>
        );
    } 
}

export default Preview;