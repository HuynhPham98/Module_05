import React from "react";
import ManagerItem from "./ManagerItem";
import ListManager from "./ListManager";

export default function Session08() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase mb-0">MANAGER USER</h5>
            </div>
            <div class="table-responsive">
              <table class="table no-wrap user-table mb-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="border-0 text-uppercase font-medium pl-4"
                    ></th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Name
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Age
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Email
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Dateofbirth
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Manage
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ListManager />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
