import React from "react";
import ManagerItem from "./ManagerItem";

export default function ListManager() {
  const managers = [
    {
      id: 1,
      name: "Daniel Kristeen",
      age: "Visual Designer",
      email: "daniel@website.com",
      dateofbirthday: "15 Mar 1988",
      manage: "Modulator",
    },
    {
      id: 2,
      name: "Emma Smith",
      age: "Visual Designer",
      email: "daniel@website.com",
      dateofbirthday: "15 Mar 1855",
      manage: "Modulator",
    },
    {
      id: 3,
      name: "Olivia Johnson",
      age: "Visual Designer",
      email: "daniel@website.com",
      dateofbirthday: "17 Aug 1988",
      manage: "Modulator",
    },
    {
      id: 4,
      name: "Isabella Williams",
      age: "Visual Designer",
      email: "daniel@website.com",
      dateofbirthday: "26 Mar 1999",
      manage: "Modulator",
    },
    {
      id: 5,
      name: "Sophia Jones",
      age: "Visual Designer",
      email: "daniel@website.com",
      dateofbirthday: "16 Aug 2001",
      manage: "Modulator",
    },
    {
      id: 6,
      name: "Charlotte Brown",
      age: "Visual Designer",
      email: "daniel@website.com",
      dateofbirthday: "15 Mar 1988",
      manage: "Modulator",
    },
  ];
  return (
    <>
      {managers.map((item) => (
        <ManagerItem key={item.id} item={item} />
      ))}
    </>
  );
}
