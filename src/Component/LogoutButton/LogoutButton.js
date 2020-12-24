import React from "react";

const LogoutButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="LogInBtn LogInBtn-rounded"
        onClick={props.logout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default LogoutButton;
