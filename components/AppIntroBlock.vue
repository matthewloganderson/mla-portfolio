<template>
	<b-col cols="12" md="6" lg="3" class="p-5 border border-primary">
		<b-link :to="route">
			<h2 v-text="header"></h2>
			<p v-text="text" class="font-size-large"></p>
		</b-link>
	</b-col>
</template>

<script>
export default {
	name: 'AppIntroBlock',
	props: {
		header: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: '',
		},
		linkText: {
			type: String, 
			default: ''
		},
		route: {
			type: String,
			default: '/'
		},
	},
}
</script>

<style>

</style>