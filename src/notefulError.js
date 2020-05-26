import React, { Component } from 'react';

class NotefulError extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h3>Could not display your notes</h3>
            );
        }
        return this.props.children;
    }
}

export default NotefulError;