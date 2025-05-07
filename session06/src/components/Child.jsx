import React from 'react'

export default function Child(props123) {
    // console.log(11111111,props123);
    // data onway binding 
    const fullName= props123.a;
    const age= props123.age;
    // console.log("fullName",fullName);
    // console.log("age",age);

    const student={
        name:"minh thu",
        address:"hà nội",
    }
    const {name,address}=student;
    
  return (
    <div>
      component con
      <p>dữ liệu từ component cha truyên xuống: {fullName}- {age}</p>
    </div>
  )
}
