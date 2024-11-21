import React from "react";

const Controls = ({
  passwordLength,
  setPasswordLength,
  options,
  setOptions,
  onGenerate, strengthColor
}) => {
  const handleOptionChange = (e) => {
    const { id, checked } = e.target;
    setOptions((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <div className="input-container">
      <div className="Length-container">
        <p>Password Length</p>
        <p>{passwordLength}</p>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        className="slider"
      />
      {["upperCase", "lowerCase", "numbers", "symbols"].map((option) => (
        <div key={option} className="check">
          <input
            type="checkbox"
            id={option}
            checked={options[option]}
            onChange={handleOptionChange}
          />
          <label htmlFor={option}>
            Include {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </div>
      ))}
      <div className="strength-container">
      <p>Strength</p>
      <div
        className="indicator"
        style={{
          backgroundColor: strengthColor,
          boxShadow: `0 0 12px 1px ${strengthColor}`,
        }}
      />
    </div>
      <button className="Generate-button" onClick={onGenerate}>
        Generate Password
      </button>
    </div>
  );
};

export default Controls;
