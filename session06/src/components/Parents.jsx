import React from 'react'
import Child from './Child'

export default function Parents() {
    const fullName=" vũ hồng vân";
    const age=33;
  return (
    <div>
      component cha
      <Child a={fullName} age={age}></Child>
    </div>
  )
}
