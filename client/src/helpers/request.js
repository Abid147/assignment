import axios from 'axios'
import { API_URL } from './variables'

export const Request = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-type': 'application/json',
	},
})
