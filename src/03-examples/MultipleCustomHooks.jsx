import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultiCustomHooks = () => {
  const { data, isLoading, haserror } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/5"
  );

  console.log({ data, isLoading, haserror });

  return (
    <>
      <h1>breakingBad Quotes</h1>
      <hr />
    </>
  );
};
