import React from "react";
import "./LoginForm.scss";
import { UserOutlined, UnlockFilled } from "@ant-design/icons";

const LoginForm = () => (
	<div id="login-form">
		<form>
			<div className="input-container">
				<UserOutlined />
				<input placeholder="Username" id="username" />
			</div>
			<div className="input-container">
				<UnlockFilled />
				<input type="password" placeholder="Password" id="password" />
			</div>
			<button type="submit">Login</button>
		</form>
	</div>
);

export default LoginForm;
