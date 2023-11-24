import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = () => {
  const { description, onInputchange, onResetForm } = useForm({
    description: "",
  });

  const handleAddTodo = (e) => {
    e.preventDefault();

    console.log("Nuevo todo:", description);

    onResetForm();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputchange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
