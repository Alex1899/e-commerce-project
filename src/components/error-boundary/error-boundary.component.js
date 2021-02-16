import React from "react";
import {ErrorImageContainer ,ErrorImageOverlay, ErrorImageText   } from './error-boundary.styles'

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, Info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
          <ErrorImageOverlay>
              <ErrorImageContainer imageUrl='/images/space.png'/>
              <ErrorImageText>Sorry :( This Page Is Lost In Space</ErrorImageText>
          </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
