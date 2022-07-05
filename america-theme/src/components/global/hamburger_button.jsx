import React, { useState } from "react";

function HamburgerButton() {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <label htmlFor="check">
        <input
          type="checkbox"
          id="check"
          onChange={() =>
            visibility ? setVisibility(false) : setVisibility(true)
          }
        />
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>
    </>
  );
}

export default HamburgerButton;
