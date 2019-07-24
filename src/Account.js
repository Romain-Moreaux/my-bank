import React from "react";

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
                return (
                  <li className="Operation" key={index}>
                    <span className="Operation-date">{operation.date}</span>
                    <span className="Operation-desc">
                      {operation.description}
                    </span>
                    <span className="Operation-amount">
                      {operation.amount}&euro;
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  };
}

export default Account;
