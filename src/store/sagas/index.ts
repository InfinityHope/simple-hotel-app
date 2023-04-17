import { all } from 'redux-saga/effects'
import { hotelsWatcher } from './hotels.sagas'

export default function* rootSaga() {
	yield all([hotelsWatcher()])
}
