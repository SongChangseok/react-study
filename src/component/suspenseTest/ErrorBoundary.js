import React, { Component } from "react";
const errorStyle = {
  backgroundColor: "#efacac",
  border: "double 4px darked",
  color: "darked",
  padding: "1em"
};

function ErrorScreen({ error }) {
  return (
    <div className="error" style={errorStyle}>
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, Fallback } = this.props;
    if (error && !Fallback) return <ErrorScreen error={error} />;
    if (error) return <Fallback error={error} />;
    return children;
  }
}
