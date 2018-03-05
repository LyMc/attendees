import { /*call, take, */put, takeLatest, select } from 'redux-saga/effects'
import { /*loginData, someData, */dialog } from './selectors'
// import rsf from './rsf'

// function * doLogin() {
// 	const login = yield select(loginData)
// 	try {
// 		yield call(rsf.auth.signInWithEmailAndPassword, login.email, login.password)
// 	} catch (error) {
// 		console.error('doLogin', error)
// 	}
// }
//
// function * doLogout() {
// 	try {
// 		yield call(rsf.auth.signOut)
// 	} catch (error) {
// 		console.error('doLogout', error)
// 	}
// }
//
// function * syncUser() {
// 	const channel = yield call(rsf.auth.channel)
//
// 	while (true) {
// 		const { error, user } = yield take(channel)
//
// 		if (user) {
// 			const admin = true // yield call(firebaseSaga.get, 'admins/' + user.uid) @todo: fix it
// 			if (admin) {
// 				yield put({ type: 'SIGN_IN', payload: { name: user.displayName, email: user.email, uid: user.uid, admin } })
// 				yield put({ type: 'SNACKS/ADD', payload: 'Login with succes' })
// 			}
// 		} else {
// 			yield put({ type: 'SIGN_OUT' })
// 		}
// 		if (error) {
// 			console.error('syncUser', error)
// 		}
// 	}
// }
//
// function* syncSomeData() {
// 	const channel = rsf.firestore.channel('data')
// 	while (true) {
// 		const snapshot = yield take(channel)
// 		let data = {}
// 		snapshot.forEach(d => data[d.id] = d.data());
// 		yield put({ type: 'DATA/SET', payload: data })
// 	}
// }
// function* addNewData() {
// 	const data = yield select(someData)
// 	yield call(rsf.firestore.addDocument, 'data', data.toJS())
// 	yield put({ type: 'DATA/RESET' })
// 	yield put({ type: 'SNACKS/ADD', payload: `Some data was added.` })
// }
// function* changeData({ payload }) {
// 	const data = yield select(someData)
// 	yield call(rsf.firestore.updateDocument, 'data/' + payload, data)
// 	yield put({ type: 'DATA/CHANGED', payload })
// 	yield put({ type: 'SNACKS/ADD', payload: `Data was changed.` })
// }
// function* removeData({ payload }) {
// 	yield call(rsf.firestore.deleteDocument, 'data/' + payload)
// 	yield put({ type: 'SNACKS/ADD', payload: `Data was removed.` })
// }

function* confirmDialog() {
	const d = yield select(dialog)
	const action = d.get('action').toJS()
	yield put(action)
	yield put({ type: 'DIALOG/CLOSE' })
}

export default function * rootSaga() {
	// yield takeLatest('DO_LOGIN', doLogin)
	// yield takeLatest('SYNC_USER', syncUser)
	// yield takeLatest('DO_LOGOUT', doLogout)
	//
	// yield takeLatest('SYNC_SOME_DATA', syncSomeData)
	// yield takeLatest('ADD_NEW_DATA', addNewData)
	// yield takeLatest('CHANGE_DATA', changeData)
	// yield takeLatest('REMOVE_DATA', removeData)

	yield takeLatest('CONFIRM_DIALOG', confirmDialog)

	// yield put({ type: 'SYNC_USER' })
	// yield put({ type: 'SYNC_SOME_DATA' })
}
