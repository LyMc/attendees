import React from 'react'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

export default () =>
	<Grid container spacing={ 24 }>
		<Grid item>
			<Card>
				<CardContent>
					<Typography>Some title</Typography>
				</CardContent>
			</Card>
		</Grid>
	</Grid>
