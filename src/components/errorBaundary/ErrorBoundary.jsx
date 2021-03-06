import React, { Component } from 'react'
import Error from '../Error/Error'

class ErrorBoundary extends Component {

    state = {
        error: false
    }

    componentDidCatch(err, info) {
        console.log(err, info)
        this.setState = ({ error: true })

    }

    render() {
        if (this.state.error) {
            return (
                <Error />
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;