import React from "react";

const PasswordDisplay = ({ password, onCopy }) => (
  <div className="display-container">
    <input
      type="text"
      className="display"
      placeholder="Password"
      value={password}
      readOnly
    />
    <button className="copybtn" onClick={onCopy}>
      <img src="./copy.svg" alt="Copy" width="23" height="23" />
    </button>
    
  </div>
);

export default PasswordDisplay;
