import { CloseOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Pagination, Table } from "antd";
import React from "react";

export default function ProductManager() {
  //Đại diện cho dữ liệu
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  //Đại diện các hàng ở trên bảng
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title={
          <div className="flex justify-between mb-4">
            <h3>Add product</h3>
            <CloseOutlined />
          </div>
        }
        closeIcon={false}
        footer={false}
        open={true}
      >
        <Form
          layout="vertical" //Chuyển label từ ngang thành dọc
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <div className="mt-4 flex justify-end gap-3">
              <Button type="default" htmlType="submit">
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <main>
        <div className="flex justify-between mb-4">
          <h3>Product</h3>
          <Button type="primary">Add product</Button>
        </div>
        <div className="flex justify-end gap-4">
          <Input.Search className="w-[400px] mb-4" />
          <ReloadOutlined />
        </div>
        <div>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          ;
        </div>
        <div className="flex justify-end mb-4">
          <Pagination
            total={85}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </div>
      </main>
    </>
  );
}
