
import { useDispatch, useSelector } from 'react-redux'
import { toDoAction } from '../actions/todoAction';

export default function TodoList() {
    const jobs= useSelector(state1=>{
        console.log("giá trị state",state1);
        return state1.todo
    })
    const disPatch= useDispatch();
    const addTodo=()=>{
        console.log("thêm công việc");
        const newTodo={
            id:Math.floor(Math.random()*9999),
            name:` công việc số ${Math.floor(Math.random()*99)}`
        }
        disPatch(toDoAction("ADD",newTodo));
     // bắt buộc phải truyền giá trị là object có key:"type"
        
    }
    // hàm xóa công việc
    const deleteTodo=(id)=>{
        console.log("id công việc muốn xóa",id);
        disPatch(toDoAction("DELETE",id));
    }
  return (
    <div>
       danh sách công việc
       <button onClick={addTodo}>thêm </button>
       <ul>
        {jobs.map(item=><li key={item.id}>{item.name} <button onClick={()=>deleteTodo(item.id)}>xóa</button></li>)}
       </ul>
    </div>
  )
}
