<template>
	<b-col cols="12" sm="6" md="4" lg="3">
		<b-link @click="handleClick()">
			<b-row no-gutters>
				<b-col v-if="backgroundUrl" @mouseover="hover = true" @mouseleave="hover = false" :class="item.bg ? `bg-${item.bg}`: ''" class="m-0 portfolio-swatch" :style="`background-image: url(${backgroundUrl}); background-size: cover; background-position: 50% 100%;`">
					<b-row>
						<b-col class="p-5">
						</b-col>
					</b-row>
					<transition enter-active-class="animate__animated animate__slideInUp animate__faster" leave-active-class="animate__animated animate__slideOutDown animate__faster">
						<b-row no-gutters class="p-3 swatch-overlay text-light" v-show="hover">
							<b-col>
								<h5 v-if="item.title">
									{{ item.title }}
								</h5>
							</b-col>
						</b-row>
					</transition>
				</b-col>
				<b-col class="m-0 portfolio-swatch p-4" :class="`bg-${item.bg}`" v-else-if="item.type === 'text'">
					<h5 class="text-white mt-5">
						{{ item.title }}
					</h5>
					<p class="text-white" v-if="textDescription">
						{{ textDescription }}
					</p>
				</b-col>
			</b-row>
		</b-link>
	</b-col>
</template>	

<script>
import _ from 'lodash'
export default {
	name: 'PortfolioSwatch',
	components: {
	},
	props: {
		item: {
			type: Object,
			default: () => {
				return {
					src: '',
					bg: '',
					title: '',
					type: '',
					description: '',
				}
			}
		},
		index: {
			type: Number, 
			default: null,
		}
	},
	data () {
		return {
			hover: false,
		}
	},
	computed: {
		backgroundUrl () {
			switch (this.item.type) {
				case 'img': 
					return require(`~/assets/swatch/${this.item.src}`)
				case 'gallery': 
					return require(`~/assets/swatch/${this.item.src[0].src}`)
				case 'redesign': 
					return require(`~/assets/swatch/${this.item.src[0].src}`)
				case 'email': 
					return require(`~/assets/swatch/${this.item.src}`)
				case 'code': 
					return require(`~/assets/swatch/${this.item.src[0].src}`)
				default: 
					return ''
			}
		},
		textDescription () {
			if (this.item.type === 'text') {
				return _.replace (_.truncate (this.item.src, {length: 125}), '<p>', '')
			} else {
				return null
			}
		},
		testfunction () {
			const myString = 'THis is an awesome string!'
			return {
				myString,
				myStringSliced: myString.slice (-3)
			}
		}
	},
	methods: {
		handleClick () {
			this.$emit ('portfolio_swatch_clicked', this.item.id)
			this.$store.dispatch ('setCurrentPortfolioItem', this.item.id)
			this.$router.push (`/portfolio/item?item=${this.item.id}`)
		},
	}
}
</script>

<style>
	.portfolio-swatch {
		height: 250px !important;
		overflow-y: hidden;
		overflow-x: hidden;
	}
	.swatch-overlay {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
		background-color: hsla(229, 29%, 10%, .7);
	}
</style>