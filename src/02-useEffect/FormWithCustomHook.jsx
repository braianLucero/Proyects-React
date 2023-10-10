import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputchange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

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

      <input
        type="password"
        className="form-control mt-2 "
        placeholder="Contrasenia"
        name="password"
        value={password}
        onChange={onInputchange}
      />

      <button onClick={onResetForm} className=" btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
