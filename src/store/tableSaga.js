import { all, call, put, takeLatest, } from 'redux-saga/effects';

import {setLoaded, setData, setDataFailure } from './tableReducer';
import { getData } from './api';

const ON_SET_DATA = 'ON_SET_DATA';

export function* setDataSaga({ payload: {sortBy, ascOrder}  }) {
  try {
    yield put(setLoaded(false));
    console.log(ascOrder);
    console.log(sortBy);

    const response = yield getData(sortBy, ascOrder);
    yield put(setData(response.data))
  } catch (error) {
    yield put(setDataFailure(error));
  }
}

export function* onsetData() {
  yield takeLatest(ON_SET_DATA, setDataSaga);
}


export default function* tableSagas() {
  yield all([
    call(onsetData),
  ]);
}