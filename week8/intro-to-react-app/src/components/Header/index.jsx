import React from "react";

import "./style.css";

const Header = props => (
  <header className="Header">
    <h1>{props.children}</h1>
  </header>
);

export default Header;
