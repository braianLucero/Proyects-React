import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "braian lucero",
    email: "brasanluc123@gmail.com",
  });

  const { username, email } = formState;

  const onInputchange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("Form change ");
  }, [formState]);

  useEffect(() => {
    // console.log("email change ");
  }, [email]);

  return (
    <>
      <h1>Formulario simple </h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputchange}
      />

      <input
        type="email"
        className="form-control mt-2 "
        placeholder="brasanluc123@gmail.com"
        name="email"
        value={email}
        onChange={onInputchange}
      />

      {username === "braian lucero123" ? <Message /> : false}
    </>
  );
};
