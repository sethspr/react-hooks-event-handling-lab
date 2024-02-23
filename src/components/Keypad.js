// Code Keypad Component Here
import React from 'react'

function Keypad() {
  function handlePassword() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input
        onChange={handlePassword}
        type="password"
        name="new-password"
        text="Entering Password..."
      />
    </div>
  );
}

export default Keypad;
