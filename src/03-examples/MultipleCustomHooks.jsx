import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";
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

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button className="btn btn-primary" onClick={() => increment()}>
        new quote
      </button>
    </>
  );
};
