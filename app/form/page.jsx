"use client";

import React from "react";
import { useState } from "react";
export default function Form() {
  //const [user, setUser] = useState({ name: "", password: "" });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleForm(formData) {
    const name = formData.get("name");
    const password = formData.get("password");
    setName(name);
    setPassword(password);
  }
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">submit</button>
      </form>
      <p>{name}</p>
      <p>{password}</p>
    </div>
  );
}
