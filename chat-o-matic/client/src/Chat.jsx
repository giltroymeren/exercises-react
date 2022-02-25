import React, { useState } from "react"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
	gql,
  useMutation
} from "@apollo/client"

import { Container } from "shards-react"

import Form from './Form'
import Messages from './Messages'

import { WebSocketLink } from '@apollo/client/link/ws'

const link = new WebSocketLink({
	uri: `ws://localhost:4000/`,
	options: {
		reconnect: true
	}
})

const client = new ApolloClient({
	link,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

const POST_MESSAGE = gql`
mutation ($user:String!, $content:String!) {
  postMessage(user: $user, content: $content)
}`

const Chat = () => {
	const [state, setState] = useState({
		user: 'Min',
		content: ''
	})

	const handleUserInputChange = (event) => {
		setState({
			...state,
			user: event.target.value
		})
	}

	const handleMessageInputChange = (event) => {
		setState({
			...state,
			content: event.target.value
		})
	}

	const [postMessage] = useMutation(POST_MESSAGE)

	const onSubmit = () => {
		if(state.content.length > 0) {
			postMessage({
				variables: state,
			})
		}

		setState({
			...state,
			content: '',
		})
	}

	return (
		<Container>
			<Messages user={state.user} />

			<Form 
				handleUserInputChange={handleUserInputChange}
				handleMessageInputChange={handleMessageInputChange}
				onSubmit={onSubmit}
				message={state}
			/>
		</Container>	        
	)
}

export default () => (
	<ApolloProvider client={client}>
		<Chat />
	</ApolloProvider>
)