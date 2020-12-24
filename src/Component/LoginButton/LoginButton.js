import React from "react";

const LoginButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="LogInBtn LogInBtn-rounded"
        onClick={props.login}
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginButton;
