
import { combineReducers } from "redux"
import {todoReducer} from "./reducers/todo"
export const rootReducer= combineReducers({
    todo:todoReducer
})