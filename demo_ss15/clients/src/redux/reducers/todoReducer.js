import {createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// hàm để lấy thông tin công việc
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:8080/users');
  return response.data;// kết quả khi lấy API VỀ
    
})
// hàm thêm công việc
export const addTodos = createAsyncThunk('todos/addTodos', async (job) => {
  const response = await axios.post('http://localhost:8080/users',job);
  return response.data;// kết quả khi lấy API VỀ
})

export const todoReducer= createSlice({
    name:"todo",
    initialState: {
        items:[],
    },
    reducers:{},
    extraReducers: abc => {
    abc
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
        // đang chờ xử lý
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // thành công
        console.log("lấy data thành công",action);
        state.items=action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        // lấy data thất bại
        console.log("lấy data thất bại ");
      })
      /* CASE THÊM CÔNG VIỆC */
      .addCase(addTodos.fulfilled, (state, action) => {
        // thành công
        console.log("lấy data thành công",action);
        state.items.push(action.payload);
      })
      .addCase(addTodos.rejected, (state, action) => {
        // lấy data thất bại
        console.log("lấy data thất bại ");
      })
  }
    
})


export default todoReducer.reducer;