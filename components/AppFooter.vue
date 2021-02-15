<template>
	<b-row class="bg-primary">
		<b-col class="p-4 text-white text-center">
			Copyright Matthew Anderson {{ currentYear }}
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'AppFooter',
	computed: {
		currentYear () {
			const date = new Date
			return date.getFullYear()
		}
	}
}
</script>

<style>

</style>