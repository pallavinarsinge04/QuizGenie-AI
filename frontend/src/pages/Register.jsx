import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  return (
    <div>
      <h1>Register Page</h1>
    </div>
  );
}

export default Register;