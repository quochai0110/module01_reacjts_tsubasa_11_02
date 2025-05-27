import React, { useRef } from 'react'

export default function FormUncontrol() {
    const nameRef =useRef();
    // console.log("11111", nameRef);
    
    const emailRef= useRef();
    const passwordRef= useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("thông tin người dùng đăng ký",{
        //     name:nameRef.current.value,
        //     email:emailRef.current.value,
        //     password:passwordRef.current.value,
        // });
        
    }
  return (
    <div>
      <h1> form uncontrol</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef}  type="text"  placeholder="nhập tên" /> <br />
        <input ref={emailRef}  type="text" placeholder="nhập email" /> <br />
        <input  ref={passwordRef} type="text" placeholder="nhập mật khẩu" /> <br />
        <button type='submit' > Đăng ký</button>
      </form>
    </div>
  )
}
