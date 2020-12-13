<template>
	<b-row no-gutters>
		<b-col>
			<b-row>
				<b-col>
					<page-header>
						Portfolio
					</page-header>
				</b-col>
			</b-row>
			<b-row class="border-bottom border-primary">
				<b-col>
					<h2 class="text-primary text-center p-4">
						Design & Illustration
					</h2>
					<b-row no-gutters>
						<portfolio-swatch :index="index" v-for="(item, index) in portfolioItems.images" :item="item" :key="index" />
					</b-row>
				</b-col>
			</b-row>
			<b-row class="border-bottom border-primary">
				<b-col>
					<h2 class="text-primary text-center p-4">
						QuickMedical Site Redesign
					</h2>
					<b-row no-gutters>
						<portfolio-swatch :index="index"  v-for="(item, index) in portfolioItems.redesign" :item="item" :key="index" />
					</b-row>
				</b-col>
			</b-row>
			<b-row class="border-bottom border-primary">
				<b-col>
					<h2 class="text-primary text-center p-4 mt-4">
						Writing
					</h2>
					<b-row class="border-bottom border-primary" no-gutters>
						<portfolio-swatch :index="index"  v-for="(item, index) in portfolioItems.text" :item="item" :key="index" />
					</b-row>
				</b-col>
			</b-row>
			<b-row class="border-bottom border-primary">
				<b-col>
					<h2 class="text-primary text-center p-4 mt-4">
						Emails
					</h2>
					<b-row no-gutters>
						<portfolio-swatch :index="index"  v-for="(item, index) in portfolioItems.emails" :item="item" :key="index" />
					</b-row>
				</b-col>
			</b-row>
			<b-row class="border-bottom border-primary">
				<b-col>
					<h2 class="text-primary text-center p-4 mt-4">
						Web Development
					</h2>
					<b-row no-gutters>
						<portfolio-swatch :index="index"  v-for="(item, index) in portfolioItems.code" :item="item" :key="index" />
					</b-row>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioSwatch from '@/components/PortfolioSwatch'
import PageHeader from '@/components/PageHeader'
export default {
	name: 'index',
	head: {
		title: 'Portfolio'
	},
	components: {
		PageHeader,
		PortfolioSwatch
	},
	computed: {
		...mapState (['portfolio']),
		portfolioItems () {
			const images = this.findItemsByType (['img', 'gallery'])
			const emails = this.findItemsByType (['email'])
			const text = this.findItemsByType (['text'])
			const code = this.findItemsByType (['code'])
			const redesign = this.findItemsByType (['redesign'])
			return {
				images,
				emails,
				text,
				code,
				redesign
			}
		}
	},
	methods: {
		findItemsByType (types) {
			const matchedTypes = []
			types.forEach (
				type => {
					const matches = this.portfolio.filter (item => item.type === type)
					matches.forEach (match => matchedTypes.push (match))
				}
			)
			return matchedTypes
		}
	}
}
</script>

<style>
	.bg-castle {
		background-image: url("~assets/Eos.png");
	}
	@media only screen and (min-width: 768px) {
		.bg-castle {
			background-size: 130% auto;
			background-position: -70% 98%; 
			background-repeat: no-repeat;
		}
	}	
	.preview-img {
		height: 70vh;
		width: auto;
		max-width: '100%'
	}
</style>