<template>
  <div class="home">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3 side">
					<Sidebar/>
				</div>
				<div class="col-lg-9">
				</div>
			</div>
				
		</div>
		
		
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/shared/navigation/Sidebar'
import ProductServices from '@/services/ProductServices'

export default {
  name: 'Shop',
	components: { Sidebar },
	
	mounted() {
		ProductServices.getPosts()
	}
}
</script>

<style lang="scss" scoped>
	.side {
		padding-left: 0;
	}
</style>
