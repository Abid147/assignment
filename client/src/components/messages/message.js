import React from 'react'
import { Link } from 'react-router-dom'

export const Message = ({ message, type, click }) => {
	return (

		<div className="message">
			<Link to={ `/messages/${ message._id }` }>
				<h3>{ message.subject }</h3>
				<p>{ message.body.substring(0, 30) }...</p>
			</Link>
			{ type === 'unread' && <button className="btn btn-primary" onClick={ () => click(message._id) }>Mark Read</button> }
		</div>
	)
}
