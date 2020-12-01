<template>
	<b-row>
		<b-col>
			<b-row v-if="!isGroup">
				<b-col>
					<h5>
						{{ item.brand }} {{ item.title }}
					</h5>
					<p v-if="item.description">
						{{ item.description }}
					</p>
					<cujo-spec-display v-if="item.specs" :specs="item.specs" />
				</b-col>
			</b-row>
			<b-row v-else>
				<b-col>
					<b-row class="mb-4" v-for="(item, index) in componentList" :key="index"> 
						<b-col>
							<h5>
							<b-badge variant="primary">
								{{ capitalize(item.name) }}
							</b-badge>
							</h5>
							<h4>
								{{ item.brand }} {{ item.title }}
							</h4>
							<p v-if="item.description">
								{{ item.description }}
							</p>
							<b-link @click="toggleCollapse (`spec-collapse-${item.title}__${item.brand}__${index}`)">
								More Info
							</b-link>
							<b-collapse :id="`spec-collapse-${item.title}__${item.brand}__${index}`">
								<cujo-spec-display v-if="item.specs" :specs="item.specs" />
							</b-collapse>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import _ from 'lodash'
export default {
	name: 'CujoComponentInfo',
	props: {	
		item: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	computed: {
		isGroup () {
			if (('components' in this.item)) {
				return true
			} else {
				return false
			}
		},
		componentList () {
			if (this.isGroup) {
				return this.item.components
			} else {
				return []
			}
		},
		componentInfo () {
			if (!this.isGroup) {
				return this.item
			} else {
				return {}
			}
		}
	},
	methods: {
		capitalize (string) {
			return _.capitalize (string)
		},
		toggleCollapse (id) {
			this.$root.$emit('bv::toggle::collapse', id)
		}

	}
}
</script>

<style>

</style>