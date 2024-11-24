import React, { useState } from "react";
import Controls from "./Controls";

export default function Table() {
  const listStudent = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Tran Thi B", age: 22 },
    { id: 3, name: "Le Van C", age: 19 },
    { id: 4, name: "Hoang D", age: 21 },
  ];

  const [students, setStudents] = useState(listStudent);
  const [search, setSearch] = useState("");
  const [sortAge, setSortAge] = useState(listStudent);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChange = () => {
    const fillterStudents = students.filter((s) =>
      s.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    setStudents(fillterStudents);
  };

  const handleSortAge = (order) => {
    const sortStudents = [...students].sort((a, b) => {
      if (order === "asc") {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
    setSortAge(sortStudents);
  };

  // Hàm gọi khi người dùng chọn sắp xếp
  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    handleSortAge(order); // Gọi hàm sắp xếp khi thay đổi thứ tự
  };
  return (
    <div>
      <Controls
        search={search}
        setSearch={setSearch}
        handleChange={handleChange}
        handleSortOrderChange={handleSortOrderChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortAge.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
