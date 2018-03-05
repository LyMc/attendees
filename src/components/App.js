import React from 'react'

import Reboot from 'material-ui/Reboot'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Snackbar from 'material-ui/Snackbar'
import CloseIcon from 'material-ui-icons/Close'

import { withStyles } from 'material-ui/styles'
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog'

import Routes from './Routes'

const styles = theme => ({
	content: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.up('sm')]: {
			width: '100%'
		},
	},
})

const App = ({ classes, theme, dialog, snacks, removeSnack, closeDialog, confirmDialog }) => (
	<div>
		<Reboot />
		<Snackbar
			open={ snacks.size > 0 }
			message={ snacks.size > 0 ? snacks.first() : '' }
			autoHideDuration={ 4000 }
			onClose={ removeSnack }
			action={ [
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					onClick={ removeSnack }
				>
					<CloseIcon/>
				</IconButton>,
			] }
		/>
		<Dialog
			open={ dialog.get('open') }
			onClose={ closeDialog }
		>
			<DialogTitle>{ dialog.get('title') }</DialogTitle>
			<DialogContent>
				<DialogContentText>{ dialog.get('content') }</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={ closeDialog } color="primary">Cancel</Button>
				<Button onClick={ confirmDialog } color="primary" autoFocus>Ok</Button>
			</DialogActions>
		</Dialog>
		<Routes className={ classes.content } />
	</div>
)

export default withStyles(styles, { withTheme: true })(App)
