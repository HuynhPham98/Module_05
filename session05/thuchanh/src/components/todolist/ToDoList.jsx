import { Button, Checkbox, Input, List } from "antd";
import React from "react";

export default function ToDoList() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[70%] text-center mt-2">
          <h1 className="text-4xl font-semibold text-emerald-700">ToDoList</h1>
          <div className="flex justify-between gap-2">
            <Input placeholder="Nhập tên công việc" />
            <Button type="primary">Thêm</Button>
          </div>
          <div className="mt-2">
            <List size="small" bordered>
              <List.Item>
                <Checkbox>Đá bóng</Checkbox>
                <div className="flex gap-2">
                  <Button type="primary">
                    <i class="fa-solid fa-pencil"></i>
                  </Button>
                  <Button type="primary" danger>
                    <i class="fa-regular fa-trash-can"></i>
                  </Button>
                </div>
              </List.Item>
              <List.Item>
                <Checkbox>Đi chơi</Checkbox>
                <div className="flex gap-2">
                  <Button type="primary">
                    <i class="fa-solid fa-pencil"></i>
                  </Button>
                  <Button type="primary" danger>
                    <i class="fa-regular fa-trash-can"></i>
                  </Button>
                </div>
              </List.Item>
              <List.Item>
                <Checkbox>Chơi game</Checkbox>
                <div className="flex gap-2">
                  <Button type="primary">
                    <i class="fa-solid fa-pencil"></i>
                  </Button>
                  <Button type="primary" danger>
                    <i class="fa-regular fa-trash-can"></i>
                  </Button>
                </div>
              </List.Item>
              <List.Item>Công việc đã hoàn thành 0/3</List.Item>
            </List>
          </div>
        </div>
      </div>
    </>
  );
}
