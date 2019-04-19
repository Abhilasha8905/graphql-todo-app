import React from "react";
import TextField from "@material-ui/core/TextField";

export default class Form extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      console.log(e);
      this.props.submit(this.state.text);
    }
  };

  render() {
    const { text } = this.state;
    return (
      <TextField
        onKeyDown={this.handleKeyDown}
        margin="normal"
        label="todo.."
        fullWidth
        value={text}
        onChange={this.handleChange}
      />
    );
  }
}
