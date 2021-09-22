import React from "react";
import { ChatEngine } from "react-chat-engine";
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
		<div className="chat-area">
			<ChatEngine
				projectID="e5cb14f1-2203-4c95-b3ff-54cec3a1f190"
				userName="codersingh"
				userSecret="FreeChat@123"
			/>
		</div>
	</div>
);

export default Chat;
