<template>
	<b-row tabindex="0" @keyup.left="previousPortfolioItem()" @keyup.right="nextPortfolioItem()">
		<b-col>
			<b-row>
				<b-col>
					<b-row align-v="center" class="p-4 bg-primary">
						<b-col cols="auto">
							<b-btn :disabled="currentPortfolioItem.id <= 1" @click="previousPortfolioItem()" size="lg" variant="primary">
								<fa icon="arrow-alt-circle-left" />
							</b-btn>
						</b-col>
						<b-col>
							<h1 class="text-white text-center mb-0 pb-0">
								{{ currentPortfolioItem.title }}
							</h1>
						</b-col>
						<b-col cols="auto">
							<b-btn :disabled="currentPortfolioItem.id >= portfolioLength" @click="nextPortfolioItem()" size="lg" variant="primary">
								<fa icon="arrow-alt-circle-right" />
							</b-btn>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-row v-if="displayComponent">
				<b-col class="px-5">
					<transition mode="out-in" enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
						<component :is="displayComponent"></component>
					</transition>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import PortfolioImage from '@/components/PortfolioImage'
import PortfolioGallery from '@/components/PortfolioGallery'
import PortfolioText from '@/components/PortfolioText'
import PortfolioEmail from '@/components/PortfolioEmail'
import PortfolioCode from '@/components/PortfolioCode'
import { mapGetters } from 'vuex'
export default {
	name: 'Item',
	components: {
		PortfolioGallery, PortfolioImage, PortfolioText, PortfolioEmail, PortfolioCode
	},
	computed: {
		portfolioLength () {
			return this.$store.state.portfolio.length
		},
		displayComponent () {
			switch (this.currentPortfolioItem.type) {
				case 'img': 
					return 'portfolio-image'
				case 'gallery': 
					return 'portfolio-gallery'
				case 'text': 
					return 'portfolio-text'
				case 'email': 
					return 'portfolio-email'
				case 'code': 
					return 'portfolio-code'
				case 'redesign': 
					return 'portfolio-gallery'
				default: 
					return false
			}
			return 'portfolio-image'
		},
		...mapGetters (['currentPortfolioItem'])
	},
	methods: {
		nextPortfolioItem () {
			this.$store.dispatch ('nextItem')
		},
		previousPortfolioItem () {
			this.$store.dispatch ('previousItem')
		}
	}
}
</script>

<style>

</style>