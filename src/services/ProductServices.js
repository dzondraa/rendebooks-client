import Api from '@/services/Api'

export default {
	getPosts() {
		return Api().get(`/posts`)
	},

	getPost(id) {
		return Api().get(`/posts/${id}`)
	}
}