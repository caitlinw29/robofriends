import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({ hasError: true})
  }

  render(){
    if(this.state.hasError){
      return <h1>Oops! There was an issue loading your robots. Check back later!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;