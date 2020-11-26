<template>
	<b-row align-v="center">
		<b-col cols="10" md="10" lg="6">
			<b-img @load="setImgHeight()" :id="`email_img_${currentPortfolioItem.id}`" fluid :src="imgSrc" />
		</b-col>
		<b-col cols="10" md="10" lg="6" v-if="imgHeight" :style="`height: ${imgHeight}px;`" class="email-code">
			<pre>
				<code v-text="currentPortfolioItem.code" class="text-white"></code>
			</pre>
		</b-col>
	</b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PortfolioEmail',
	data () {
		return {
			imgHeight: null
		}
	},
	computed: {
		...mapGetters (['currentPortfolioItem']),
		imgSrc () {
			return require(`~/assets/${this.currentPortfolioItem.src}`)
		}
	},
	methods: {
		setImgHeight () {
			this.imgHeight = document.getElementById (`email_img_${this.currentPortfolioItem.id}`).clientHeight
		}
	}
}
</script>

<style>
	.email-code {
		overflow-y: scroll;
		background-color: #333;
	}
</style>