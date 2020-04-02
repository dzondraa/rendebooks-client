<template>
	<!-- Sidebar -->
	<div id="sidebar">
			<div class="list-group" id="list-tab" role="tablist">
				<a 
					v-on:click="passToParent"
					class="list-group-item list-group-item-action active" 
					id="list-home-list" 
					data-category='1' 
					data-toggle="list" 
					href="#list-home" 
					role="tab" 
					aria-controls="home"
				>
					Home
				</a>
				<a 
					v-on:click="passToParent"
					class="list-group-item list-group-item-action" 
					id="list-home-list" 
					data-category='2' 
					data-toggle="list" 
					href="#list-home" 
					role="tab" 
					aria-controls="home"
				>Profile</a>
			</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categoryId: 1
		}
	},

	methods: {
		passToParent(event) {
			this.categoryId = parseInt(event.target.getAttribute('data-category'))
			this.$parent.setCategory(this.categoryId)
		}
	},

	props: ['category']
}
</script>

<style lang="scss" scoped>
	#sidebar {
		padding: 20px;
		a {
			border-radius: 5px;
			margin: 2px;
			border: 2px solid #fff;
			transition: all ease-in-out 100ms;
		}

		a:active {
			background-color: #31b554;
			border: 2px solid #31b554;
		}

		a.active {
			background-color: #31b554;
		}
	}
</style>