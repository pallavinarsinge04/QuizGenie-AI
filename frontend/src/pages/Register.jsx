import { useState } from "react";
import API from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registration Successful");
      window.location.href = "/";
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Register</h1>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <br /><br />

      <button onClick={register}>Register</button>
    </div>
  );
}