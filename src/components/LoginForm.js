import React from "react";

const LoginForm = () => (
	<div id="login-form">
		<form>
			<label htmlFor="username">
				Username
				<input placeholder="Username" id="username" />
			</label>
			<label htmlFor="password">
				Password
				<input type="password" placeholder="Username" id="password" />
			</label>
			<button type="submit">Login</button>
		</form>
	</div>
);

export default LoginForm;
