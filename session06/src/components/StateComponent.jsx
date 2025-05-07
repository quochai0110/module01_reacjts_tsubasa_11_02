import React, { useState } from 'react'


export default function StateComponent() {
    const [count, setCount]= useState(1);//[1, f]
    // khai báo hàm tăng giá trị count
    const increase=()=>{
        console.log("11111");
        setCount(pre=>pre+1);
        setCount(pre=>pre+1);
        setCount(pre=>pre+1);
        console.log("count bên trong:", count);// 1
        
    }
    console.log("count bên ngoài:", count);
    
    // khi state thay đổi thì component re-render ( render lại!)
  return (
    <div>
      <p> giá trị count: {count}</p>
      <button onClick={increase}>tăng </button>
    </div>
  )
}
