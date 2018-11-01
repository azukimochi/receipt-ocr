import React, { Component } from 'react'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
		//request to server here
	}
	render() {

		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<div>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				</div>
				<br/>
				<div>
				<label htmlFor="password">Password: </label>
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
				</div>
				<br/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
