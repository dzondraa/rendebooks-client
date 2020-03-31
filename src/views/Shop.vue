<template>
  <div class="home">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3 side">
					<Sidebar v-on:childToParent="setCategory"/>
				</div>
				<div class="col-lg-9">
					
					<ProductList :category-id="categoryId" />
				</div>
			</div>
				
		</div>
		
		
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/shared/navigation/Sidebar'
import ProductList from '@/components/products/ProductList'

export default {
  name: 'Shop',
	components: { Sidebar, ProductList },

	data() {
		return {
			categoryId: 1,
		}
	},
	methods: {
		setCategory(value) {
			this.categoryId = value
		}
	}
	
}
</script>

<style lang="scss" scoped>
	.side {
		padding-left: 0;
	}
</style>
