
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import { router1 } from './routers/index.jsx'
import store from './redux/store.js'
createRoot(document.getElementById('root')).render(
 
   <Provider store={store}>
      <RouterProvider router={router1}>
      </RouterProvider>
   </Provider>
)
