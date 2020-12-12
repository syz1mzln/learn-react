import React from "react";

// props is just a terminology, can be change to other thing, but for same understanding with others, use props
const NavItem = (props) => {
  return (
    <a className="navlink" href={props.path}>
      {props.text}
    </a>
  );
};

export default NavItem;
