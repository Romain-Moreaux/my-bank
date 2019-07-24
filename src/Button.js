import React from "react";

class Button extends React.Component {
  render = () => {
    return (
      <button
        onclick={`${this.props.onclick}`}
        type={`${this.props.type}`}
        className="Button"
      >
        {this.props.textContent}
      </button>
    );
  };
}

export default Button;
