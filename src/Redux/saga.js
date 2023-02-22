import { takeLatest, put, all, call } from "redux-saga/effects";
import { addEventSaga, deleteEventSaga, updateDataSaga } from "./action";

// add
export function* onAddEventSaga({ payload }) {
  yield put(addEventSaga(payload));
}

export function* onAdd() {
  yield takeLatest("ADD_EVENT", onAddEventSaga);
}
// del
export function* onDeleteEventSaga({ payload }) {
  yield put(deleteEventSaga(payload.id));
}

export function* onDel() {
  yield takeLatest("DELETE_DATA", onDeleteEventSaga);
}

//  update
export function* onUpdateDataSaga({ payload }) {
  yield put(updateDataSaga(payload));
}
export function* onUpdate() {
  yield takeLatest("UPDATE_DATA", onUpdateDataSaga);
}
// all -----------------------
export function* datas() {
  yield all([call(onAdd), call(onDel), call(onUpdate)]);
}
