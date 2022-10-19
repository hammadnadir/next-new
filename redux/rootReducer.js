import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";

export const CombinedReducer = () => {
    combineReducers({
        users,
    })
}