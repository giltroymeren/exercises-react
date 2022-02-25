import React from "react"

const Message = ({id, user, content, messageUser}) => {

	return (
		<div 
			style={{
				display: 'flex',
				justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
				paddingBottom: '1em'
			}}>
			<div
				style={{
					height: 50,
					widht: 75,
					marginRight: '0.5em',
					border: '2px solid #CDCDCD',
					borderRadius: 50,
					textAlign: 'center',
					fontSize: '18pt',
					padding: 5,
					display: user === messageUser ? 'none' : ''
				}}>
				{ user.slice(0,2).toUpperCase() }
			</div>

			<div
				style={{
					background: user === messageUser ? "#58BF56" : "#E5E6EA",
					color: user === messageUser ? "#FFFFFF" : "#292B30",
					padding: '1em',
					borderRadius: '2em',
					maxWidth: '60%'
				}}>
				{ content }
			</div>
		</div>
	)
}

export default Message