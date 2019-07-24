import React, { Component } from "react";
import Header from "./Header";
import Account from "./Account";
import accounts from "./accounts.json";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {accounts.map((account, index) => {
          return (
            <Account
              key={index}
              name={account.name}
              balance={account.balance}
              color={account.color}
              operations={account.operations}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
