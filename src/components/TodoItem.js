import React, { Component } from "react";
// import PropTypes from "prop-types";
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "60px",
      borderBottom: "1px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={() => this.props.markComplete(id)} />{" "}
        <p>{title}</p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} />
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "white",
  border: "none",
  padding: "20px 20px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

// Prototypes
// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: propTypes.func.isRequired
// };

export default TodoItem;
