<template>
	<b-row>
		<b-col>
			<b-row>
				<b-col>
					<portfolio-gallery sm="12" md="6" lg="6" xl="6" v-if="currentPortfolioItem.src.length > 1" />
					<b-img class="my-5 border border-primary" v-else fluid :src="returnImgSrc(currentPortfolioItem.src[0].src)" />
				</b-col>
				<b-col class="my-5">
					<p v-if="currentPortfolioItem.description">
						{{ currentPortfolioItem.description }}
					</p>
					<b-btn variant="primary" class="mb-4 mr-3" :href="currentPortfolioItem.link" v-if="currentPortfolioItem.link">
						View Application
					</b-btn>
					<b-btn class="mb-4" :href="currentPortfolioItem.code" v-if="currentPortfolioItem.code && !currentPortfolioItem.proprietary">
						View Source
					</b-btn>
					<private-code-notice class="mb-4" v-if="currentPortfolioItem.proprietary" />
					<b-card no-body class="mb-4">
						<b-card-body>
							<h5 class="text-primary">
								Built Using...
							</h5>
						</b-card-body>
						<b-list-group flush>
							<b-list-group-item class="sans-serif" href="https://vuejs.org/">
								<fa :icon="['fab', 'vuejs']" class="mr-1" />VueJS
							</b-list-group-item>
							<b-list-group-item href="https://github.com/axios/axios">
								Axios
							</b-list-group-item>
							<b-list-group-item href="https://vuex.vuejs.org/">
								<fa :icon="['fab', 'vuejs']" class="mr-1" />Vuex
							</b-list-group-item>
							<b-list-group-item href="https://bootstrap-vue.org/">
								<fa :icon="['fab', 'bootstrap']" class="mr-1" />Bootstrap
							</b-list-group-item>
						</b-list-group>
					</b-card>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import PortfolioGallery from '@/components/PortfolioGallery'
import { mapGetters } from 'vuex'
export default {
	name: 'PortfolioCode',
	components: {
		PortfolioGallery
	},
	computed: {
		...mapGetters (['currentPortfolioItem']),
	},
	methods: {
		returnImgSrc (src) {
			return require(`~/assets/swatch/${src}`)
		}
	}
}
</script>

<style scoped>
</style>