<template>
	<b-row>
		<b-col>
			<b-row align-h="center">
				<b-col cols="12" md="10" lg="9" xl="8" class="px-5 mt-4">
					<p class="font-weight-bold mb-1">
						By Matthew L. Anderson
					</p>
					<p class="font-weight-bold">
						Published: {{ currentPortfolioItem.createdOn }}
					</p>
				</b-col>
			</b-row>
			<b-row align-h="center">
				<b-col cols="12" md="10" lg="9" xl="8" class="px-5" v-html="currentPortfolioItem.src">

				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PortfolioText',
	computed: {
		...mapGetters (['currentPortfolioItem'])
	}
}
</script>

<style>

</style>