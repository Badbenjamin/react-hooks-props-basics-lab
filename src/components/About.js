import React from "react";
import Links from "./Links";

function About(props) {
  if ((props.bio == null) || (props.bio == "")) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links links={props.links} />
        {/* {Links} */}
      </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links links={props.links} />
        {/* {Links} */}
      </div>
    );
  }

}



export default About;
