import { SET_TASK_API } from "../constants/ToDoListConst";

const initialState = {
  taskList: []
};

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_API: {
      state.taskList = action.taskList;
      return { ...state };
    }
    default:
      return state;
  }
};

export default TodoListReducer;