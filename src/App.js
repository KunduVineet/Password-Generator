import React, { useState } from "react";
import PasswordDisplay from "./PasswordDisplay";
import Controls from "./Controls";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [strengthColor, setStrengthColor] = useState("#f00");
  const [options, setOptions] = useState({
    upperCase: false,
    lowerCase: false,
    numbers: false,
    symbols: false,
  });

  const handleGeneratePassword = () => {
    const { upperCase, lowerCase, numbers, symbols } = options;
    const symbolsList = `~!@#$%^&*()+-<,>_?/[]{};:'".`;
    let charPool = "";

    if (upperCase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) charPool += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charPool += "0123456789";
    if (symbols) charPool += symbolsList;

    if (!charPool || passwordLength < 1) return;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randIndex = Math.floor(Math.random() * charPool.length);
      newPassword += charPool[randIndex];
    }

    setPassword(newPassword);
    calculateStrength(newPassword);
  };

  const calculateStrength = (password) => {
    let strength = 0;
    if (options.upperCase) strength++;
    if (options.lowerCase) strength++;
    if (options.numbers) strength++;
    if (options.symbols) strength++;

    if (password.length >= 12) strength++;

    if (strength >= 4) setStrengthColor("#0f0");
    else if (strength === 3) setStrengthColor("#ff0");
    else setStrengthColor("#f00");
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <PasswordDisplay
        password={password}
        onCopy={() => navigator.clipboard.writeText(password)}
      />
      <Controls
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        options={options}
        setOptions={setOptions}
        strengthColor={strengthColor}
        onGenerate={handleGeneratePassword}
      />
    </div>
  );
};

export default App;
