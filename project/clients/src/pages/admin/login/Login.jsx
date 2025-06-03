import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

export default function Login() {
  const navigate= useNavigate();
  // hàm check xem email và pass có đúng hay không?
  const checkLogin= async (email)=>{
    const res= await axios.get(`http://localhost:8080/users?email=${email}`);
    return res.data;
  }
  const login=   ()=>{
    // console.log("tiến hành đăng nhập");
    // lấy thông tin người dùng nhập
    const user={
      email:"minhtuan1@gmail.com",
      pass:12345
    }
    checkLogin(user.email)
    .then(data=>{
     
      if(data.length!==0){
       // tồn tại email
        // navigate("/admin");
        // console.log("đúng email",data);
        
        bcrypt.compare("123456",  data[0].password, (err, res) => {
        console.log('resss',res);
          
});
        
        //  console.log("giá trị result",result);
         
        
         
        
      }else{
        console.log("tên tài khoản hoặc mật khẩu không đúng");
        
      }
      
    })
    .catch(error=>{
      console.log("trường hợp thất bại",error);
      
    })
    
  }
  return (
    <div>
      Trang đăng nhập <br />
      <button onClick={login}>đăng nhập</button>
    </div>
  )
}
