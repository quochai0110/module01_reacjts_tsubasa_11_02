// bản chất reducer là những cái hàm
const initial=[
    {
        id:1,
        name:"học redux"
    },
    {
        id:2,
        name:"học redux_toolkit"
    }
]
export const todoReducer=(state1=initial, action1)=>{
        console.log("giá trị action", action1);
        if(action1.type=="ADD"){
            // reducer sẽ hiểu thêm công việc
            console.log("thêm công việc"); // spread
            return [...state1,action1.payload]
            // state1.push(action1.payload1); // mutate_redux toolkit
            // return state1
        }else if(action1.type=="DELETE"){

            return state1.filter(item=>item.id!=action1.payload);
        }
    return state1;
}