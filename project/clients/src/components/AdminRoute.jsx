import React from 'react'
import { Navigate } from 'react-router-dom'
export default function AdminRoute({children}) {
    
    /*  viết logic đi kiểm tra xem đã đăng nhập hay chưa? */
    const isAdmin = localStorage.getItem("isLogin");
    return  isAdmin ? <>{children} </> : <Navigate to="/login"/>
  
}
