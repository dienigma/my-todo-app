import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  color: "white",
  textAlign: "center",
  background: "#333",
  padding: "10px"
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};
