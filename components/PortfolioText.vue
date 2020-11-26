<template>
	<b-row align-h="center">
		<b-col cols="12" md="10" lg="9" xl="8" class="px-5 py-4" v-html="currentPortfolioItem.src">

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