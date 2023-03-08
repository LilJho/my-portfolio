import Card from "./card/Card";
import { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="h-[500px] w-[300px] flipcard">
      <CSSTransitionGroup in={showFront} timeout={300} classname="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransitionGroup>
    </div>
  );
}

export default FlippableCard;
