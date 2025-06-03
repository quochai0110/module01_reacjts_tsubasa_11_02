import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../redux/reducers/reducerUser';

export default function UserManager() {
  const data_users= useSelector(state=>{
    // console.log("giá trị state",state);
    return state.users.users;
    
  })
  // console.log("data_users",data_users);
  
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers());
  },[])
  return (
    <div>
      trang quản lý user <br />
      <ul>
        {data_users.map((item,index)=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
