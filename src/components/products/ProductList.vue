<template>
  <div id="ProductList">
		<BasicLoader v-if="loading"/>
		<div v-if="!loading" class="col d-flex flex-wrap">
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
		
	</div>
</template>

<script>

import ProductServices from '@/services/ProductServices'
import VueRouter from 'vue-router'
import BasicLoader from '@/components/shared/loaders/BasicLoader'
export default {
	name: 'ProductList',
	components: { BasicLoader },
	
	data() {
		return {
			products: [], // Array of products
			parentCategoryId: this.categoryId,
			loading: true,
		}
	},

	mounted() {
		this.getProducts()
	},
	
	methods: {
		async getProducts() {
			this.loading = true
			const res = await ProductServices.getPosts()			
			this.products = res.data
			this.loading = false
		},

		async getProduct(id) {
			this.loading = true
			const res = await ProductServices.getPost(id)			
			this.products = res.data
			this.loading = false
			console.log('NEW PRODUCTS: ', res.data)
			
		},
	},

	watch: {
		categoryId(val) {
			if(val == 1) this.getProduct(val)
			else this.getProducts()
			
			// this.products = []
			// this.products[0] = 
					
		},
	},
	

	props: ['category-id']
}
</script>

<style lang="scss" scoped>
	.side {
		padding-left: 0;
	}
</style>
