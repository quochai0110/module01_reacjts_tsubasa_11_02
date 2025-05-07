import React, { useState } from "react";

export default function FormControl() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1111);
    // const user={
    //     name:name,
    //     email:email,
    // }
    console.log("thông tin user", user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    // console.log("giá trị thuộc tính name", e.target.name);
    // const name= e.target.name;
    // const value= e.target.value;
    const { name, value } = e.target; // destructoring

    console.log("name", name);
    console.log("value", value);
    setUser({ name: "", email: "", password: "", [name]: value });
    const student1 = {
      id: 1,
      name: "minh thu",
      name: "hồng vân",
    };
    // console.log("student1", student1);

    // student.address="hà nội";
    // student["address"]= "hà nội"
  };
  return (
    <div>
      <h1> form control</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          type="text"
          value={user.name}
          name="name"
          placeholder="nhập tên"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="nhập email"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="nhập mật khẩu"
        />{" "}
        <br />
        <button type="submit"> Đăng ký</button>
      </form>
    </div>
  );
}
