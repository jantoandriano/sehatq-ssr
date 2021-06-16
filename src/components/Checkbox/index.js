import React from "react";

function Checkbox() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" id="remember" />
      <label style={{ marginLeft: "10px" }} htmlFor="remember">
        Remember Me
      </label>
    </div>
  );
}

export default Checkbox;
