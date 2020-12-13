<template>
	<b-row align-h="center" class="mt-4 mb-4">
		<b-col cols="12" md="10">
			<b-row align-h="center">
				<b-col cols="12" :md="imgType === 'vertical' ? '6' : '9'">
					<img v-show="imgLoaded" :class="currentPortfolioItem.bg ? `bg-${currentPortfolioItem.bg}` : ''" class="border border-primary w-100" @load="imgLoaded = true; setImgType()" :id="`${currentPortfolioItem.title}__img`" :src="imgSrc" :alt="currentPortfolioItem.title" />
					<b-spinner type="grow" v-if="!imgLoaded" />
				</b-col>
				<b-col cols="12" :md="imgType === 'vertical' ? '6' : '9'" class="pt-4">
					<h3 class="text-primary">
						Details about {{ currentPortfolioItem.title }}
					</h3>
					<b-list-group class="border-0">
						<b-list-group-item class="border-0 p-0" v-if="currentPortfolioItem.createdOn">
							<strong>Created:</strong> {{ currentPortfolioItem.createdOn }}
						</b-list-group-item>
						<b-list-group-item class="border-0 p-0" v-if="currentPortfolioItem.description">
							<strong>Description:</strong> {{ currentPortfolioItem.longDescription ? currentPortfolioItem.longDescription : currentPortfolioItem.description }}
						</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PortfolioImage',
	data () {
		return {
			imgType: 'horizontal', 
			imgLoaded: false,
		}
	},
	computed: {
		...mapGetters (['currentPortfolioItem']),
		imgSrc () {
			if (this.currentPortfolioItem) {
				return require(`~/assets/${this.currentPortfolioItem.src}`)
			} else {
				return ''
			}
		},
	},
	methods: {
		setImgType () {
			const img = document.getElementById (`${this.currentPortfolioItem.title}__img`)
			const dims = this.returnImgDims (img)
			if (dims.width > dims.height) {
				this.imgType = 'horizontal'
			} else if (dims.width < dims.height) {
				this.imgType = 'vertical'
			} else if (dims.width === dims.height) {
				this.imgType = 'square'
			} else {
				return ''
			}
		},
		returnImgDims (img) {
			return {
				height: img.naturalHeight,
				width: img.naturalWidth
			}
		}
	}
}
</script>

<style>

</style>