<template>
	<b-row class="my-5">
		<b-col class="px-5">
			<b-row>
				<b-col class="mb-4" :sm="sm" cols="12" :md="md" :lg="lg" :xl="xl" v-for="(item, index) in currentPortfolioItem.src" :key="index">
					<b-card class="h-100" no-body>
						<b-row class="portfolio_swatch">
							<b-col>
								<b-link @click="setCurrentItem(item); showModal = !showModal">
									<img :src="returnItemSwatchSrc(item.src)" class="w-100" />
								</b-link>
							</b-col>
						</b-row>
						<b-card-body>
							<h5>
								{{ item.title }}
							</h5>
							<b-row v-if="item.description">
								<b-col>
									<b-link @click="toggleCollapse (`${item.title}__${index}`)">
										More Info 
										<fa icon="chevron-down" class="ml-1" />
									</b-link>
									<b-collapse :id="`portfolio_gallery_description__${item.title}__${index}`">
										<p class="mt-4">
											{{ item.description }}
										</p>
									</b-collapse>
								</b-col>
							</b-row>
						</b-card-body>
					</b-card>
				</b-col>
			</b-row>
			<b-modal class="text-center" :title="currentItem.title" v-if="currentItem" size="xl" centered hide-footer v-model="showModal">
				<b-row>
					<b-col class="text-center">
						<b-img class="border border-primary" fluid :src="returnItemSrc (currentItem.src)" />
					</b-col>
				</b-row>
			</b-modal>
		</b-col>
	</b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PortfolioGallery',
	props: {
		sm: {
			type: [String, Number],
			default: '6'
		},
		md: {
			type: [Number, String],
			default: '4'
		},
		lg: {
			type: [Number, String],
			default: '4'
		},
		xl: {
			type: [Number, String],
			default: '3'
		}
	},
	data () {
		return {
			showModal: true,
			currentItem: null
		}
	},
	computed: {
		...mapGetters (['currentPortfolioItem'])
	},
	methods: {
		returnItemSwatchSrc (src) {
			return require(`~/assets/swatch/${src}`)
		},
		returnItemSrc (src) {
			return require(`~/assets/${src}`)
		},
		setCurrentItem (item) {
			this.currentItem = item
		},
		toggleCollapse (id) {
			this.$root.$emit('bv::toggle::collapse', `portfolio_gallery_description__${id}`)
		}
	}
}
</script>

<style>
	.portfolio_swatch {
		max-height: 500px;
		overflow-y: hidden;
	}
</style>