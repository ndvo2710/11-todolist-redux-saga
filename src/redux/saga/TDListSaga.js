import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { todoListService } from "../../services/ToDoListService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import { GET_TASKLIST_API, SET_TASK_API } from "../constants/ToDoListConst";



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

const todoListSagaActionTrackingList = [
    trackingActionGetTaskApi()
]

export default todoListSagaActionTrackingList
