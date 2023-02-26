import React from "react";
import Button from "react-bootstrap/Button";

const Event = (props) => {
  return (
    <div className="Event">
      <img src={props.image} alt="image" />
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
      <div className="link-button">
        <Button href={props.link}>Website</Button>
      </div>
    </div>
  );
};

export default Event;
