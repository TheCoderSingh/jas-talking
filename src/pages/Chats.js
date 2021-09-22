import React from "react";
import ChatList from "../components/ChatList";
import "./Chats.scss";

const Chats = () => (
	<div id="chats">
		<h1>
			Welcome, <span>thecodersingh</span>!
		</h1>
		<h3>Your Chats</h3>
		<ChatList />
	</div>
);

export default Chats;
