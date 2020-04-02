<template>
  <div id="home" class="home">
		<div class="row intro">
			<div class="col">
				<img src="@/assets/images/intro.svg" alt="Rende">
			</div>
			<div class="col text">
				<h1>RENDE</h1>
				<p>
					Izdavačka kuća Rende osnovana je 2000. godine sa misijom da objavljuje, distribuira i promoviše one autore i naslove koji pripadaju marginama književnosti, a često i društva kao i sa željom, verom i ubeđenjem da knjige najbrže mogu da povežu pokidane veze između naroda.
				</p>
			</div>
		</div>
		<div class="row">
			<NewsSlider />
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsSlider from '@/components/news/NewsSlider'


export default {
  name: 'Home',
  components: {
		NewsSlider,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

#home {
	h1 {
		color: $highlight-color;
	}

	.intro {
		margin: 50px 0;

		img {
			height: 250px;
		}

		.text {
			text-align: left;
			padding-right: 35px;

			p {
				text-align: justify;
			}
		}
	}
}
	
</style>
