import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ msgCount }) => {
	return (
		<div className="navbar fixed">
			<div className="brand"><Link to='/'>Message App</Link></div>
			<div className="nav-list">
				<Link to='/'>Home</Link>
				<Link to='/messages'>All messages</Link>
			</div>
		</div>
	)
}
