import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h2>Tạo tài khoản</h2>
      <form>
        <label htmlFor="email">Email của bạn</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@company.com"
          required
          autoComplete="email" // thêm autocomplete cho email
        />{" "}
        <br />
        <label htmlFor="password">Mật khẩu</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Nhập mật khẩu"
          required
          autoComplete="new-password" // thêm autocomplete cho mật khẩu mới
        />{" "}
        <br />
        <label htmlFor="confirmPassword">Xác nhận mật khẩu</label> <br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Xác nhận mật khẩu"
          required
          autoComplete="new-password" // thêm autocomplete cho xác nhận mật khẩu
        />{" "}
        <br />
        <button type="submit">Tạo tài khoản</button> <br />
      </form>

      <p>
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
      </p>
    </div>
  );
}
