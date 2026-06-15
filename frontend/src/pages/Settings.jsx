import { useState } from "react";

function Settings() {
  const [theme, setTheme] = useState("Light");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Settings</h1>

      <h3>Theme</h3>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option>Light</option>
        <option>Dark</option>
      </select>

      <br />
      <br />

      <button>Save Settings</button>
    </div>
  );
}

export default Settings;