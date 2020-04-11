import React from 'react'

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        return <div>404</div>;
    }
}
export default NotFound