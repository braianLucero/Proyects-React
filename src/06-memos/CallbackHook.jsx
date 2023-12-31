import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementPadre = useCallback(() => {
    setCounter((value) => value + 5);
  }, []);

  return (
    <>
      <h1>useCallback Hook : {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementPadre} />
    </>
  );
};
