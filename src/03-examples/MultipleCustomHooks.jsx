import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultiCustomHooks = () => {
  // Primero declarar e inicializar la variable 'counter' usando useCounter
  const { counter, increment } = useCounter(1);

  // Ahora puedes usar 'counter' en la llamada a useFetch
  const { data, isLoading, haserror } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>breakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1"> {quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment()}>
        new quote
      </button>
    </>
  );
};
