import React from "react";

const Event = (props) => {
  return (
    <div className="Event">
      <img src={props.image} alt="image" />
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
      <a href={props.link}>
        <button>Website</button>
      </a>
    </div>
  );
};

export default Event;