import React from "react";
import Logo from "./Logo";
import User from "./User";

class Header extends React.Component {
  render = () => {
    return (
      <header className="Header">
        <div className="Header--container wrapper">
          <div className="Header--logo">
            <Logo />
          </div>
          <div className="Header--user">
            <User name="Romain" />
          </div>
        </div>
      </header>
    );
  };
}

export default Header;
