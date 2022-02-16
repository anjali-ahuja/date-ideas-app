import React, { useState } from "react";
import { Button } from "../../Button";
import "./Generator.css";

function Generator() {
  const [click, setClick] = useState(false);
  const generate = () => setClick(true);

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
                onClick={generate}
              >
                Generate
              </Button>
            </div>
          </div>
          <div className="col">
            <div className="top-line">You should... </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
