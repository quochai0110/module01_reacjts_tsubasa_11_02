import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTodos, fetchTodos } from '../redux/reducers/todoReducer';
export default function TodoList() {
  const data= useSelector(state=>{
        console.log("giá trị state",state);
        return state.todo.items;
  })
  const dispatch= useDispatch();
  // lấy data 
  useEffect(()=>{
    // bắn dispatch 
    dispatch(fetchTodos())
  },
  [])
  // tạo hàm thêm công việc
  const addNewTodo=()=>{
    const newJob={
        name: `user ${Math.floor(Math.random()*99)}`,
        age:25
    }
    dispatch(addTodos(newJob))

  }
  return (
    <div>
      danh sách công việc
      <button onClick={addNewTodo}>thêm công việc </button>
      <ul>
        {data.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
