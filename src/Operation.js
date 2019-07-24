import React from "react";

class Operation extends React.Component {
  render = () => {
    return (
      <li className="Operation">
        <span className="Operation-date">{this.props.operation.date}</span>
        <span className="Operation-desc">
          {this.props.operation.description}
        </span>
        <span className="Operation-amount">
          {this.props.operation.amount}&euro;
        </span>
      </li>
    );
  };
}

export default Operation;
