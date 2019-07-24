import React from "react";
import Button from "./Button";
import Operation from "./Operation";

class Account extends React.Component {
  render = () => {
    let bgColor = { backgroundColor: this.props.color };
    return (
      <section className="Account">
        <div className="Account--container wrapper">
          <div className="Account--header" style={bgColor}>
            <div className="Account--header-name">{this.props.name}</div>
            <div className="Account--header-balance">
              {this.props.balance}&euro;
            </div>
          </div>
          <div className="Account--body">
            <ul>
              {this.props.operations.map((operation, index) => {
                return <Operation key={index} operation={operation} />;
              })}
            </ul>
            <Button textContent="see more" type="button" />
          </div>
        </div>
      </section>
    );
  };
}

export default Account;
