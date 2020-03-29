import axios from 'axios'
import config from '@/config/config'

const BASE_API_URL = config.BASE_API_URL

export default (token) => {
	const options = {
		baseURL: BASE_API_URL,
		timeout: 0, // 0 is unlimited timeout
		crossDomain: true
	}

	// If token is passed, add Authorization header
	if (token) {
		options.headers = {
			'Authorization': `Bearer ${token}`
		}
	}

	const instance = axios.create(options)

	// Force logout on user when api sends a response status 403
	// instance.interceptors.response.use(null, responseInterceptor)

	return instance
}
