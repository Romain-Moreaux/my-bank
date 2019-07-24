import React from "react";
import UserIcon from "./UserIcon";
class User extends React.Component {
  render = () => {
    return (
      <div className="User">
        <div className="User--name">{this.props.name}</div>
        <div className="User--icon">
          <UserIcon />
        </div>
      </div>
    );
  };
}

export default User;
