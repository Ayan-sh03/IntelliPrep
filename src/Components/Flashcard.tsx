import React from "react";
import "../App.css";
interface Fprops {
  title: string;
  description: string;
}
const Flashcard = (props: Fprops) => {
  return (
    <div className="flip-card font-montserrat">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{props.title}</p>
          <p>Hover Me For Description</p>
        </div>
        <div className="flip-card-back">
          {/* <p className="title">BACK</p> */}
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
