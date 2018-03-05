import { createSelector } from 'reselect'
import { Map } from 'immutable'
const EMPTY = new Map()

const appReducer = state => state.app
export const someData = createSelector(appReducer, app => app.get('someData'))

const selectLogin = createSelector(appReducer, state => state.get('login'))
export const loginData = createSelector(selectLogin, data => ({
	email: data.get('email'), password: data.get('password'),
}))

export const snacks = createSelector(appReducer, state => state.get('snacks', EMPTY))
export const dialog = createSelector(appReducer, state => state.get('dialog', EMPTY))
