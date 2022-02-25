import React from "react"

import { useSubscription, gql } from "@apollo/client"

import Message from './Message'

const GET_MESSAGES = gql`
subscription {
  messages {
    id,
    user,
    content
  }
}`

const Messages = ({ user }) => {
	const { data } = useSubscription(GET_MESSAGES)
	if(!data) return null
	
	return (
		<>
		{ data.messages.map((message) => (
			<Message
				key={message.id}
				id={message.id}
				user={message.user}
				content={message.content}
				messageUser={user} />
			)
		)}
		</>
	)
}

export default Messages