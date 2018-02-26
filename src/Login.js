import React from 'react'

export default class Login extends React.Component {
	render() {
		const doLogin = this.props.login
		return (
			<form action="" onSubmit={ (event) => {
				event.preventDefault()
				doLogin()
			} }>
				<h1>Login</h1>
				<input placeholder="username" />
				<button type="submit">Login</button>
			</form>
		)
	}
}
