import React from "react";
import "./styles.css";

class Add extends React.Component {
  render() {
    return <h1>{this.props.a + this.props.b}</h1>;
  }
}

export default function App() {
  return <Add a={100} b={55000} />;
}
