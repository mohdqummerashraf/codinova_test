import { createStore, } from "redux";

import { combineReducers } from "redux";
import employeeReducer from "../reducer/employeeReducer";

const rootReducer = combineReducers({
    employee: employeeReducer,
});
const store = createStore(
    rootReducer,
);

export default store;