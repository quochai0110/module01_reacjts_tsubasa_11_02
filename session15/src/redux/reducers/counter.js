export const counterReducer=(state1=0, action1)=>{
        console.log("giá trị action", action1);
        if(action1.type=="ADD"){
            console.log("thêm công việc"); // spread
            return state1+=1
           
           
        }
    return state1;
}