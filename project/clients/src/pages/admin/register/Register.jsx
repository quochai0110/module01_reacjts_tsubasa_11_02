import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";
export default function Register() {
  // hàm kiểm tra xem email đã tồn tại hay chưa
  const navigate= useNavigate();

  const checkEmail= async(email)=>{
    const res= await axios.get(`http://localhost:8080/users?email=${email}`);
    return res.data;
  }
  const register= async ()=>{
    // giả sử lấy thông tin người dùng nhập
   const salt = bcrypt.genSaltSync(10);
  //  const hash = bcrypt.hashSync("12345", salt);
    // let check =bcrypt.compareSync("12345", hash);
  // console.log(111111,check);
  
    const new_user={
      name:"hong lan",
      email:"minhtuan1@gmail.com",
      password:bcrypt.hashSync("12345", salt)
    }
   checkEmail(new_user.email)
   .then(data=>{
    // console.log("giá trị trả về",data);
    if(data.length!=0){
      console.log("email đã được đăng ký");
      return
    }
    axios.post("http://localhost:8080/users",new_user);
    let id=1;
    // axios.put(`http://localhost:8080/users/${id}`,new_user);

    console.log("đăng ký tài khoản thành công!");
    // điều hướng sang trang đăng nhập 
    navigate("/login");
   })
   .catch(error=>{
    console.log(error);
   })
  }
  return (
    <div>
      trang đăng ký <br />
      {/* 
      Tạo form lấy dữ liệu
      */}
      <button onClick={register}>đăng ký</button>
    </div>
  )
}
