import React from "react";
import "./Chat.scss";

const Chat = () => (
	<div id="chat">
		<div className="chat-header">
			<div className="chat-image">IMG</div>
			<div className="chat-header-details">
				<div className="chat-name">Arjun Kharbanda</div>
				<div className="chat-username">@arjunkharbanda</div>
			</div>
		</div>
		<div className="chat-area">Chat Area</div>
	</div>
);

export default Chat;
