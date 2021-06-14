import { applyMiddleware, combineReducers, createStore } from "redux";
import TodoListReducer from './reducers/TodoListReducer';

// middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from "./saga/rootSaga";
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    TodoListReducer
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

// Call Saga
middleWareSaga.run(rootSaga);

export default store;