import React, { Component } from "react";

import NavBar from "./NavBar.js";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <>
        <NavBar />
        {this.props.children}
      </>
    );
  }
}
export default Layout;
