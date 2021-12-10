import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from './navbar'

const Layout = () => {
	return (
		<div>
			<Navbar />
			<div className="content">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout