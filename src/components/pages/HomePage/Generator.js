import React, { useState } from "react";
import { Button } from "../../Button";
import { dateIdeas } from "./Data";
import "./Generator.css";

function Generator() {
  const [click, setClick] = useState(false);
  const generate = () => setClick(true);

  const [idea, setIdea] = useState(
    dateIdeas[Math.floor(Math.random() * dateIdeas.length)]
  );
  const refresh = () =>
    setIdea(dateIdeas[Math.floor(Math.random() * dateIdeas.length)]);

  return (
    <div className="generator-section">
      {" "}
      <div className="container">
        <div
          className="row generator-row"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="col">
            <div className="btn-wrapper">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--xlarge"
                onClick={() => {
                  generate();
                  refresh();
                }}
              >
                Generate
              </Button>
            </div>
          </div>
          <div className="col">
            <div className="top-line">You should... </div>
            <h1 className="heading">
              {click ? idea : "hit the generate button!"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
