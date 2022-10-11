import React from "react";
import "../styles/Link.css";

function Link(props) {
  return (
    <a href={props.link} className="Link">
      <p style={{ fontSize: props.size }}>{props.text}</p>
      {props.icon}
    </a>
  );
}

export default Link;
