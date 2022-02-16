import React from "react";
import { Button } from "../../Button";

function Generator() {
  return (
    <div className="generator-section light">
      <div className="row generator-row">
        <div className="col">
          <Button buttonSize="btn--xlarge">Generate</Button>
        </div>
        <div className="col">You should... </div>
      </div>
    </div>
  );
}

export default Generator;
