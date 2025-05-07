import React, { useEffect, useState } from 'react'

export default function HookUseEffect() {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        console.log("useEffect lại được gọi");
        // axios
        // thường call API lấy dữ liệu 
    },[count])
    console.log(2);
  return (
    <div>
      useEffect
      <p> giá trị biến count: {count}</p>
      <button onClick={()=>setCount(count+1)}>tăng</button>
    </div>
  )
}
