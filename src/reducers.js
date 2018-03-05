import { fromJS } from 'immutable'

const defaultState = fromJS({
	snacks: [],
	dialog: {
		open: false,
		title: '',
		content: '',
		action: {},
	},
})

export default (state = defaultState, action) => {
	const { payload } = action
	switch (action.type) {
		case 'SNACKS/ADD':
			return state.update('snacks', snacks => snacks.push(payload))
		case 'SNACKS/REMOVE':
			return state.update('snacks', snacks => snacks.shift())
		case 'DIALOG/OPEN':
			return state.set('dialog', fromJS({
				open: true,
				title: payload.title || '',
				content: payload.content || '',
				action: payload.action || {},
			}))
		case 'DIALOG/CLOSE':
			return state.set('dialog', defaultState.get('dialog'))
		default:
			return state
	}
}
