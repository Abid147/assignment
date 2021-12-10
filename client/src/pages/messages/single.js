import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Request } from '../../helpers/request'

export const Single = () => {
	let { id } = useParams()

	const [ message, setMessage ] = useState({})
	const [ loading, setLoading ] = useState(true)

	useEffect(() => {
		setLoading(true)
		Request.get('/single/' + id)
			.then(({ data }) => setMessage(data))
			.catch(err => console.log(err))
			.finally(setLoading(false))
	}, [ id ])


	return loading ? <div>Loading</div> : (
		<div>
			<h1 className="title">{ message.subject }</h1>
			<p>{ message.body }</p>
		</div>
	)
}
