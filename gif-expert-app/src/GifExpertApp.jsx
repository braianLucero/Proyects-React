import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch ", "Dragon ball"]);

  const onAddCategory = () => {
    // valorant
    setCategories([...categories, "Valorant"]);
  };

  return (
    <>
      <h1>Hola mundo</h1>

      <AddCategory />

      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
