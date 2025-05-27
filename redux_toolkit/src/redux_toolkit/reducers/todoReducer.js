import {createSlice} from "@reduxjs/toolkit"
const jobs=[
    {
        id:1,
        name:"công việc 1"
    },
     {
        id:2,
        name:"công việc 2"
    }
]
const todoReducer= createSlice({
    name:"todo1",
    initialState: jobs,
    reducers:{
        addTodo:( state, action )=>{

            // console.log("giá trị action",action);
            state.push(action.payload); // mutate
            
        },
        deleteTodo:(state, action )=>{
            console.log("giá trị action",action);
            state.splice(action.payload,1);
            
        }
    }
})

// console.log("todoReducer",todoReducer);
// destructorin lấy ra các hành động
export const {addTodo, deleteTodo} =todoReducer.actions;

export default todoReducer.reducer;