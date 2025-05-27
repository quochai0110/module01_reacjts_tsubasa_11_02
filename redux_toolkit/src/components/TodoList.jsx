import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux_toolkit/reducers/todoReducer';
export default function TodoList() {
    const data= useSelector(state=>{
        console.log("giá trị state", state);
        return state. todo;
        
    })
    const dispatch= useDispatch();
    // hàm thêm công việc
    const addNewTodo= ()=>{
        const newJob = {
            id:Math.floor(Math.random() *999),
            name:`công việc ${Math.floor(Math.random() *999)} `
        }
        dispatch(addTodo(newJob));
    }
    // hàm xóa công việc
    const deleteJob=(index_item)=>{
            dispatch(deleteTodo(index_item));
    }
  return (
    <div>
       
      danh sách công việc
      <button onClick={addNewTodo}>thêm công việc </button>
      <ul>
        {data.map((item,index)=> <li key={item.id}> {item.name} <button onClick={()=>deleteJob(index)}>delete</button></li>)}
      </ul>
    </div>
  )
}
