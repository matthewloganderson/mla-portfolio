<template>
	<b-row tabindex="0" @keyup.left="previousPortfolioItem()" @keyup.right="nextPortfolioItem()">
		<b-col>
			<b-row>
				<b-col>
					<b-row align-v="center" class="p-4 bg-primary">
						<b-col>
							<b-row>
								<b-col class="d-none d-md-inline" cols="auto">
									<b-btn :disabled="currentPortfolioItem.id <= 1" @click="previousPortfolioItem()" size="lg" variant="primary">
										<fa icon="arrow-alt-circle-left" />
									</b-btn>
								</b-col>
								<b-col>
									<h1 class="text-white text-center mb-0 pb-0">
										{{ currentPortfolioItem.title }}
									</h1>
								</b-col>
								<b-col class="d-none d-md-inline" cols="auto">
									<b-btn :disabled="currentPortfolioItem.id >= portfolioLength" @click="nextPortfolioItem()" size="lg" variant="primary">
										<fa icon="arrow-alt-circle-right" />
									</b-btn>
								</b-col>
							</b-row>
							<b-row class="d-md-none mt-2">
								<b-col cols="6" class="text-right">
									<b-btn :disabled="currentPortfolioItem.id <= 1" @click="previousPortfolioItem()" size="lg" variant="primary">
										<fa icon="arrow-alt-circle-left" />
									</b-btn>
								</b-col>
								<b-col cols="6">
									<b-btn :disabled="currentPortfolioItem.id >= portfolioLength" @click="nextPortfolioItem()" size="lg" variant="primary">
										<fa icon="arrow-alt-circle-right" />
									</b-btn>
								</b-col>
							</b-row>
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
import { mapGetters, mapState } from 'vuex'
export default {
	name: 'Item',
	head: {
		title: 'Portfolio Gallery'
	},
	watch: {
		$route: {
			handler: 'setCurrentPortfolioItem', 
			immediate: true
		} 
	},
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
		...mapGetters (['currentPortfolioItem']), 
	},
	methods: {
		nextPortfolioItem () {
			const nextItem = Number(this.$route.query.item) + 1
			if (nextItem <= this.portfolioLength) {
				this.$router.push (`/portfolio/item?item=${nextItem}`)
			}
		},
		previousPortfolioItem () {
			const previousItem = Number (this.$route.query.item) - 1
			if (previousItem > 0) {
				this.$router.push (`/portfolio/item?item=${previousItem}`)
			}
		},
		setCurrentPortfolioItem () {
			if (this.$route.query.item) {
				this.$store.dispatch ('setCurrentPortfolioItem', this.$route.query.item) 
			}
		}
	}
}
</script>

<style>

</style>