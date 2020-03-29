<template>
  <div id="ProductList" class="d-flex flex-wrap">
		<div 
		v-for="product in products" 
		:key="product.title"
		class="card" 
		style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">{{ product.title }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" class="card-link">Card link</a>
				<a href="#" class="card-link">Another link</a>
			</div>
		</div>
	</div>
</template>

<script>

import ProductServices from '@/services/ProductServices'

export default {
	name: 'ProductList',
	
	data() {
		return {
			products: [], // Array of products
			firstProduct: {}
		}
	},

	mounted() {
		this.getProducts()
	},
	
	methods: {
		async getProducts() {
			const res = await ProductServices.getPosts()			
			this.products = res.data
		},
	}
}
</script>

<style lang="scss" scoped>
	.side {
		padding-left: 0;
	}
</style>
