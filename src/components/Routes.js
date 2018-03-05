import React from 'react'
import { Route } from 'react-router'

import HomeScreen from '../containers/Home'

export default ({ className }) => (
	<main className={ className }>
		<Route exact path="/" component={ HomeScreen }/>
	</main>
)