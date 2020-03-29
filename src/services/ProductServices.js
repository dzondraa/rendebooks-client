import axios from 'axios'

const Api = 'https://jsonplaceholder.typicode.com'

export default {
	getPosts() {
		axios.get(`${Api}/posts`)
		.then(response => {
			console.log(response.data);
		});
	},
}