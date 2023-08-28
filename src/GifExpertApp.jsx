import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch ", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
  };

  return (
    <>
      <h1>Hola mundo</h1>

      <AddCategory
        //  setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
