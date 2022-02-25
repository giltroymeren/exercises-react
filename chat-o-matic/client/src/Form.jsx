import React from "react"

import {
  gql,
  useMutation
} from "@apollo/client"

import {
	Row,
	Col,
	FormInput,
	Button
} from "shards-react"

const Form = (props) => {

	const onEnterKey = (event) => {
		if(event.keyCode === 13) props.onSubmit()
	}

	return (
		<div>
			<Row>
				<Col xs={2} style={{ padding: 0 }}>
					<FormInput
						label="User"
						value={props.message.user}
						onChange={props.handleUserInputChange} />
				</Col>

				<Col xs={8} style={{ padding: 0 }}>
					<FormInput
						label="Message"
						value={props.message.content}
						onChange={props.handleMessageInputChange}
						onKeyUp={onEnterKey} />
				</Col>

				<Col xs={2} style={{ padding: 0 }}>
					<Button onClick={props.onSubmit}>Submit</Button>
				</Col>
			</Row>
		</div>	        
	)
}

export default Form