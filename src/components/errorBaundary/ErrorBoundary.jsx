import React, { Component } from 'react'

 class ErrorBoundary extends Component {
    state={
        error:false;
    }

    componentDidCatch(err,info){
        console.log(err,info)
        this.setState={
            error:true
        }
    }

  render() {
    return (
      <div>ErrorBoundary</div>
    )
  }
}
export default ErrorBoundary;