import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [stringReversal, setStringReversal] = useState("");
  const [originalString, setOriginalString] = useState("");

  function onClickReverseString() {
    let result = originalString.split("").reverse().join("");
    setStringReversal(result);
  }

  return (
    <div className="Home">
      <div className="container mt-5 d-flex justify-content-center">
        <div className="row align-items-center">
          <div className="col">
            <span>String Reversal</span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="String"
              onChange={(e) => setOriginalString(e.target.value)}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClickReverseString}
            >
              Submit
            </button>
          </div>
          <div class="col alert alert-warning" role="alert">
          {stringReversal}
            </div>
        </div>
      </div>
    </div>
  );
}
