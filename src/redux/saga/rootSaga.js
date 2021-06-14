import { all } from "redux-saga/effects"
import todoListSagaActionTrackingList from "./TDListSaga"

export function* rootSaga() {
    yield all([
        ...todoListSagaActionTrackingList
    ])
}