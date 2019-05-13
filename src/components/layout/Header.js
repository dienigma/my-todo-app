import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  );
}

const headerStyle = {
  color: "white",
  textAlign: "center",
  background: "#333",
  padding: "10px"
};
