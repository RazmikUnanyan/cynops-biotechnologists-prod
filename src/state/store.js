import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./homeReducer";


const reducer = combineReducers({
    homePage: homeReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

export default store;
