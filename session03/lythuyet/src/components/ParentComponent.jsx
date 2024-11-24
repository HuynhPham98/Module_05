import React from "react";
import ChildrenComponent from "./ChildrenComponent";
import Button from "./Button";
import Event from "./Event";

export default function ParentComponent() {
  const userName = "Nguyen Van A";
  return (
    <>
      <h3>ParentComponent</h3>
      <hr />
      <Button disable={true}>
        <a href="#">Click me</a>
      </Button>
      <hr />
      <ChildrenComponent userName={userName} />
      <Event />
    </>
  );
}
