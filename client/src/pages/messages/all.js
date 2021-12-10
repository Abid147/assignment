import React from 'react'
import { Link } from 'react-router-dom'
import { Message } from '../../components/messages/message'
import { Request } from '../../helpers/request'

export const Messages = ({ type }) => {

	const [ messages, setMessages ] = React.useState([])
	const [ loading, setLoading ] = React.useState(true)

	React.useEffect(() => {
		Request.get(type === 'unread' ? '/unread' : '/')
			.then(({ data }) => setMessages(data))
			.catch(err => console.log(err))
			.finally(setLoading(false))
	}, [ type ])

	const handleRead = (id) => {
		Request.patch(`/read/${ id }`)
			.then(() => setMessages(messages.filter(message => message._id !== id)))
			.catch(err => console.log(err))
	}

	return loading ? <div>Loading ... </div> : (
		<div>
			<h1 className="title">Hello User!</h1>
			<p>You have { messages.length } { type } messages.</p>
			<div className="message-list">
				{ messages.map(message => <Message message={ message } key={ message._id } type={ type } click={ handleRead } />) }
			</div>
			{ type === 'unread' &&
				<div className="text-center">
					<Link to="/messages" className="btn btn-secondary">View all messages</Link>
				</div>
			}
		</div>
	)
}
