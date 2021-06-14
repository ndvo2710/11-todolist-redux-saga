import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { todoListService } from "../../services/ToDoListService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import { ADD_TASK_API, CHECK_TASK_API, DELETE_TASK_API, GET_TASKLIST_API, SET_TASK_API } from "../constants/ToDoListConst";



function* getTaskApiAction(action) {
    yield put({ type: DISPLAY_LOADING });
    try {
        const {data, status} = yield call(() => { return todoListService.getTaskApi() });
        yield delay(300);
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_TASK_API,
                taskList: data
            });
        } else {
            console.log('error');
        }
    } catch (err) {
        console.log('err', err);
    }
    yield put({ type: HIDE_LOADING });
}

function* trackingActionGetTaskApi() {
    yield takeLatest(GET_TASKLIST_API, getTaskApiAction)
}


function* addTaskApiAction(action) {
    const {taskName} = action;
    // Call API
    try {
        const {_, status} = yield call(() => { return todoListService.addTaskApi(taskName) });
        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_TASKLIST_API });
        }
    } catch (error) {
        console.log(error);
    }
}

function* trackingActionAddTaskApi() {
    yield takeLatest(ADD_TASK_API, addTaskApiAction)
}


function* delTaskApiAction(action) {
    const {taskName} = action;
    // Call API
    try {
        const {_, status} = yield call(() => { return todoListService.deleteTaskApi(taskName) });
        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_TASKLIST_API });
        }
    } catch (error) {
        console.log(error);
    }
}

function* trackingActionDelTaskApi() {
    yield takeLatest(DELETE_TASK_API, delTaskApiAction)
}


function* doneTaskApiAction(action) {
    const {taskName} = action;
    // Call API
    try {
        const {_, status} = yield call(() => { return todoListService.markTaskDoneApi(taskName) });
        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_TASKLIST_API });
        }
    } catch (error) {
        console.log(error);
    }
}

function* trackingActionDoneTaskApi() {
    yield takeLatest(CHECK_TASK_API, doneTaskApiAction)
}




const todoListSagaActionTrackingList = [
    trackingActionGetTaskApi(),
    trackingActionAddTaskApi(),
    trackingActionDelTaskApi(),
    trackingActionDoneTaskApi()
]

export default todoListSagaActionTrackingList
