import React, { useState } from 'react'

export default function EventComponent() {
  const [users, setUser]= useState([
    {
      id:1,
      name:"hoa"
    },
    {
      id:2,
      name:"hồng"
    }
  ])
  const handleDelete=(id1)=>{
    console.log("click vào btn có id là:  ", id1)
    
  }
  return (
    <div>
     
      Sự kiện trong reactjs
     <ul>
     {users.map(item=>(
       
           <li key={item.id}>{item.name}<button onClick={()=>handleDelete(item.id)}>xóa</button></li>
           
      
      ))}
     </ul>
      
    </div>
  )
}
