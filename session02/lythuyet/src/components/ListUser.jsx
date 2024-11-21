import React from "react";

export default function ListUser() {
  const users = [
    {
      id: 1,
      userName: "Nguyen Van A",
      gender: "Name",
      address: "Ha Noi,VN",
    },
    {
      id: 2,
      userName: "Nguyen Van B",
      gender: "Name",
      address: "Ha Noi,VN",
    },
    {
      id: 3,
      userName: "Nguyen Van C",
      gender: "Name",
      address: "Hai Phong,VN",
    },
  ];
  return (
    <>
      <h3><i className="fa-solid fa-house"></i> List User</h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Gioi tinh</th>
            <th>Dia chi</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              < React.Fragment key={user.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                  <td>
                    <button>Sua</button>
                    <button>Xoa</button>
                  </td>
                </tr>
              </ React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
