import { Button, Input } from "antd";
import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[400px] p-6 bg-white rounded-lg shadow-md">
        <p className="text-xl font-semibold mb-4 text-center">Create account</p>
        <label className="block mb-2 text-gray-700">Your email</label>
        <Input className="mb-4" placeholder="name@company.com" />
        <label className="block mb-2 text-gray-700">Password</label>
        <Input className="mb-4" placeholder="******" type="password" />
        <label className="block mb-2 text-gray-700">Confirm Password</label>
        <Input className="mb-4" placeholder="******" type="password" />
        <Button type="primary" className="w-full">
          Create an account
        </Button>
      </div>
    </div>
  );
}
