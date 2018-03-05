import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { push } from 'react-router-redux'
import { snacks, dialog } from '../selectors'
import Component from '../components/App'

const mapStateToProps = createStructuredSelector({
	snacks,
	dialog,
})
const mapDispatchToProps = dispatch => ({
	removeSnack: () => dispatch({ type: 'SNACKS/REMOVE' }),
	closeDialog: () => dispatch({ type: 'DIALOG/CLOSE' }),
	confirmDialog: () => dispatch({ type: 'CONFIRM_DIALOG' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
