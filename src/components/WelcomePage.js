import React, { useState, useEffect } from "react";

export default function WelcomePage({ user, onChange, onSubmit }) {
  const [nameError, setNameError] = useState(false);
  const [levelError, setLevelError] = useState(false);

  const nameErrorMessage = (
    <span className="error">Please Enter Your Name</span>
  );
  const levelErrorMessage = <span className="error">Please Select Level</span>;

  const localOnChange = (e) => {
    if (e.target.name === "name" && e.target.value === "") {
      setNameError(true);
    } else if (e.target.name === "level" && e.target.value === "") {
      setLevelError(true);
    } else {
      setLevelError(false);
      setNameError(false);
    }
    onChange(e);
  };

  const localOnSubmit = (e) => {
    if (user.name === "") {
      setNameError(true);
    } else if (user.level === "") {
      setLevelError(true);
    } else {
      setLevelError(false);
      setNameError(false);
      onSubmit(e);
    }
  };

  return (
    <div className="welcome-page">
      <input
        type="text"
        placeholder="TYPE YOUR NAME"
        name="name"
        value={user.name}
        onChange={localOnChange}
        autoComplete="off"
      />
      <br />
      {nameError ? nameErrorMessage : ""}
      <br />
      <select
        type="text"
        placeholder="DIFFICULY LEVEL"
        name="level"
        value={user.level}
        onChange={localOnChange}
        autoComplete="off"
      >
        <option value="">DIFFICULY LEVEL</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <br />
      {levelError ? levelErrorMessage : ""}
      <br />
      <button type="submit" onClick={localOnSubmit}>
        START GAME
      </button>
    </div>
  );
}
