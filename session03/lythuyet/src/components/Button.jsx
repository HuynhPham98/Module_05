import React from "react";

export default function Button({ children, disable }) {
  console.log("children: ", children);

  return (
    <>
      <button disabled={disable}>{children}</button>
    </>
  );
}
