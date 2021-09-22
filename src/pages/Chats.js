import React from "react";
import ChatList from "../components/ChatList";
import "./Chats.scss";

const Chats = () => (
	<div id="chats">
		<h1>Your Chats</h1>
		<ChatList />
	</div>
);

export default Chats;
