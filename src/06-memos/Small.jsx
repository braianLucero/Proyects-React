import React from "react";
import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("me volvi a dibukar :?");

  return <small>{value}</small>;
});
