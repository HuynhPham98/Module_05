import React from "react";

export default function ManagerItem({ item }) {
  return (
    <tr>
      <td class="pl-4">{item.id}</td>
      <td>
        <h6 class="font-medium mb-0">{item.name}</h6>
      </td>
      <td>
        <span class="text-muted">{item.age}</span>
        <br />
        <span class="text-muted">Past : teacher</span>
      </td>
      <td>
        <span class="text-muted">{item.email}</span>
        <br />
      </td>
      <td>
        <span class="text-muted">{item.dateofbirthday}</span>
        <br />
      </td>
      <td>
        <select
          class="form-control category-select"
          id="exampleFormControlSelect1"
        >
          <option>Modulator</option>
          <option>Admin</option>
          <option>User</option>
          <option>Subscriber</option>
        </select>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i class="fa fa-trash"></i>{" "}
        </button>
        <button
          type="button"
          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i class="fa fa-edit"></i>{" "}
        </button>
      </td>
    </tr>
  );
}
